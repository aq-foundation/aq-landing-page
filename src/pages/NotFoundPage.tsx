import React from 'react';
import { Link } from 'wouter';
import { Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="glass-panel rounded-3xl p-8 sm:p-14 text-center max-w-lg space-y-6 border border-slate-800">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <span className="text-6xl font-extrabold font-accent text-amber-400 block tracking-tight">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 font-heading">
          Похоже, эта страница потерялась в экосистеме AQ.
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed">
          Запрошенный адрес не существует или был перемещён в другой раздел сайта AQ Foundation.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors"
          >
            Вернуться на главную
          </Link>

          <Link
            href="/about"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm hover:text-white"
          >
            Посмотреть проекты
          </Link>
        </div>
      </div>
    </div>
  );
};
