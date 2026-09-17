#!/bin/bash
set -e

# Setup PM2 static server on port 3000
npm install -g serve 2>/dev/null || true
pm2 delete aq 2>/dev/null || true
pm2 delete grasse 2>/dev/null || true
pm2 start "serve -s /var/www/aq/dist -l 3000" --name aq
pm2 save

# Write Nginx configuration for 204.168.232.2.nip.io
cat > /etc/nginx/sites-available/grasse << 'EOF'
server {
    listen 80;
    server_name 204.168.232.2.nip.io;

    root /var/www/aq/dist;
    index index.html;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        try_files $uri $uri/ /index.html;
    }
}
EOF

ln -sf /etc/nginx/sites-available/grasse /etc/nginx/sites-enabled/grasse
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

# Run certbot to configure SSL and redirection
certbot --nginx -d 204.168.232.2.nip.io --non-interactive --agree-tos -m admin@example.com --redirect --reinstall
systemctl reload nginx

echo "DEPLOYMENT_SUCCESS"
