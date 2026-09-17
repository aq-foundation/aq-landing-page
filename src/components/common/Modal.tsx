import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  maxWidth = 'max-w-2xl'
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity animate-in fade-in" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className={`relative w-full ${maxWidth} bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl z-10 animate-in zoom-in-95 duration-200 text-slate-900`}>
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
          {title && <h3 className="text-xl font-bold text-slate-900 font-heading">{title}</h3>}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-red-600 hover:bg-slate-200 transition-colors ml-auto"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>
          {children}
        </div>
      </div>
    </div>
  );
};
