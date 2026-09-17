import React from 'react';
import { Modal } from '../common/Modal';
import { Trustee, TeamMember } from '../../data/mockCms';
import { CheckCircle2, ExternalLink, UserCheck, Shield } from 'lucide-react';

interface MemberDetailDrawerProps {
  person: Trustee | TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MemberDetailDrawer: React.FC<MemberDetailDrawerProps> = ({
  person,
  isOpen,
  onClose
}) => {
  if (!person) return null;

  const isTrustee = 'achievements' in person;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl">
      <div className="space-y-6">
        {/* Header Avatar & Name */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <img
            src={person.avatar}
            alt={person.name}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-slate-200 shadow-md"
          />
          <div className="text-center sm:text-left space-y-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-200">
              {isTrustee ? <Shield className="w-3 h-3" /> : <UserCheck className="w-3 h-3" />}
              {isTrustee ? 'Попечительский совет' : 'Команда AQ'}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
              {person.name}
            </h3>
            <p className="text-sm font-bold text-red-600">
              {person.role}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed pt-1 font-medium">
              {person.bio}
            </p>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Опыт и профессиональный профиль
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200 font-medium">
              {isTrustee ? (person as Trustee).detailedBio : person.bio}
            </p>
          </div>

          {/* Key Achievements or Responsibilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              {isTrustee ? 'Ключевые достижения' : 'Зона ответственности'}
            </h4>
            <ul className="space-y-2">
              {(isTrustee ? (person as Trustee).achievements : (person as TeamMember).responsibilities).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links if available */}
          {'links' in person && person.links && person.links.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Контакты и ссылки
              </h4>
              <div className="flex flex-wrap gap-2">
                {person.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 hover:text-red-600 hover:border-red-300 transition-colors"
                  >
                    <span>{link.title}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
