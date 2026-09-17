import React from 'react';
import { Ticket } from 'lucide-react';

interface StickyCTAProps {
  label: string;
  subLabel?: string;
  onClick: () => void;
  icon?: React.ElementType;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({
  label,
  subLabel,
  onClick,
  icon: Icon = Ticket
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 md:hidden animate-in slide-in-from-bottom duration-300 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {subLabel && (
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
              Ближайшее событие
            </span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {subLabel}
            </span>
          </div>
        )}
        <button
          onClick={onClick}
          className="w-full py-3 px-5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </button>
      </div>
    </div>
  );
};
