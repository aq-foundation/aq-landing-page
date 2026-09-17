#!/bin/bash
set -e

cat > /etc/nginx/sites-available/aqintegration << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name aqintegration.org www.aqintegration.org;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name aqintegration.org www.aqintegration.org;

    root /var/www/aq/dist;
    index index.html;

    ssl_certificate /etc/letsencrypt/live/aqintegration.org-0001/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/aqintegration.org-0001/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

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

ln -sf /etc/nginx/sites-available/aqintegration /etc/nginx/sites-enabled/aqintegration
nginx -t
systemctl reload nginx

echo "SSL_CONFIGURED_SUCCESS"

