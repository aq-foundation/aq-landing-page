import React from 'react';
import { Link } from 'wouter';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  mobileBackText?: string;
  mobileBackHref?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  items, 
  mobileBackText, 
  mobileBackHref 
}) => {
  const previousItem = items.length >= 2 ? items[items.length - 2] : null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      {/* Mobile Back Link */}
      <div className="md:hidden">
        <Link 
          href={mobileBackHref || previousItem?.href || '/'}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-red-600 transition-colors py-1.5 px-3 rounded-lg bg-slate-100 border border-slate-200"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-red-600" />
          <span>{mobileBackText || `Назад к ${previousItem?.label || 'AQ Foundation'}`}</span>
        </Link>
      </div>

      {/* Desktop Full Trail */}
      <ol className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-600">
        <li>
          <Link href="/" className="hover:text-red-600 transition-colors">
            AQ Foundation
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            {item.href ? (
              <Link href={item.href} className="hover:text-red-600 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-900 font-bold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
