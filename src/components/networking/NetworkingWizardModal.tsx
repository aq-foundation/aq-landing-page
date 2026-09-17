import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react';

interface NetworkingWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NetworkingWizardModal: React.FC<NetworkingWizardModalProps> = ({
  isOpen,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    contact: '',
    sphere: 'Art',
    about: '',
    competencies: '',
    projects: '',
    portfolioUrl: '',
    offering: '',
    seeking: '',
    showProfile: true,
    hideContact: false,
    agreedTerms: false
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    onClose();
  };

  const stepsHeadlines = [
    'О тебе',
    'Чем занимаешься',
    'Опыт и работы',
    'Запрос и предложение',
    'Публикация'
  ];

  return (
    <Modal isOpen={isOpen} onClose={resetForm} maxWidth="max-w-2xl">
      {!isSubmitted ? (
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600">
              <span className="text-red-600 font-accent uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Шаг {currentStep} из 5: {stepsHeadlines[currentStep - 1]}
              </span>
              <span>{Math.round((currentStep / 5) * 100)}%</span>
            </div>
            
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
              <div 
                className="h-full bg-red-600 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleNext} className="space-y-5">
            {/* Step 01: Имя, Город, Контакт */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in">
                <h4 className="text-lg font-bold text-slate-900 font-heading">
                  Шаг 01. Контактные данные
                </h4>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Имя * <span className="text-slate-400 font-normal">(Обязательное)</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Город * <span className="text-slate-400 font-normal">(Обязательное)</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Алматы / Астана / Атырау..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Контакт * <span className="text-slate-400 font-normal">(Способ публикации настраивается)</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Telegram / Телефон / Email"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 02: Сфера, О себе, Таланты и компетенции */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in">
                <h4 className="text-lg font-bold text-slate-900 font-heading">
                  Шаг 02. Профиль и компетенции
                </h4>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Сфера деятельности * <span className="text-slate-400 font-normal">(Обязательное)</span>
                  </label>
                  <select
                    value={formData.sphere}
                    onChange={(e) => setFormData({ ...formData, sphere: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                  >
                    <option value="Art">Art (Искусство & Музыка)</option>
                    <option value="Business">Business (Предпринимательство)</option>
                    <option value="Education">Education (Образование & Менторство)</option>
                    <option value="Creative">Creative (Дизайн, Креатив & Арт-дирекшн)</option>
                    <option value="Production">Production (Свет, Звук & Сцена)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    О себе <span className="text-slate-400 font-normal">(Краткий текст)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Расскажите о вашей миссии, интересах и подходе..."
                    value={formData.about}
                    onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Таланты и компетенции * <span className="text-slate-400 font-normal">(Обязательное, через запятую)</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Продюсирование, Ювелирный дизайн, Фандрайзинг..."
                    value={formData.competencies}
                    onChange={(e) => setFormData({ ...formData, competencies: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>
            )}

            {/* Step 03: Опыт и проекты, Портфолио и социальные сети */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in fade-in">
                <h4 className="text-lg font-bold text-slate-900 font-heading">
                  Шаг 03. Опыт и ссылки
                </h4>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Опыт и проекты <span className="text-slate-400 font-normal">(Текст и описание кейсов)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Перечислите ключевые реализованные проекты..."
                    value={formData.projects}
                    onChange={(e) => setFormData({ ...formData, projects: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Портфолио и социальные сети <span className="text-slate-400 font-normal">(Ссылки)</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://instagram.com/..., https://linkedin.com/..."
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>
            )}

            {/* Step 04: Чем могу быть полезен, Кого или что ищу */}
            {currentStep === 4 && (
              <div className="space-y-4 animate-in fade-in">
                <h4 className="text-lg font-bold text-slate-900 font-heading">
                  Шаг 04. Синергия & Запрос
                </h4>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Чем могу быть полезен <span className="text-slate-400 font-normal">(Текст)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Чем можете помочь другим участникам экосистемы AQ..."
                    value={formData.offering}
                    onChange={(e) => setFormData({ ...formData, offering: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Кого или что ищу <span className="text-slate-400 font-normal">(Текст)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Каких специалистов, инвесторов, мастеров или арт-директоров вы ищете..."
                    value={formData.seeking}
                    onChange={(e) => setFormData({ ...formData, seeking: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600 resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 05: Согласие и Настройки публикации */}
            {currentStep === 5 && (
              <div className="space-y-4 animate-in fade-in">
                <h4 className="text-lg font-bold text-slate-900 font-heading">
                  Шаг 05. Настройка публикации и согласие
                </h4>

                <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.showProfile}
                      onChange={(e) => setFormData({ ...formData, showProfile: e.target.checked })}
                      className="w-4 h-4 rounded text-red-600 focus:ring-red-500 bg-white border-slate-300"
                    />
                    <span className="text-sm font-semibold text-slate-800">Разместить профиль в открытом каталоге AQ</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.hideContact}
                      onChange={(e) => setFormData({ ...formData, hideContact: e.target.checked })}
                      className="w-4 h-4 rounded text-red-600 focus:ring-red-500 bg-white border-slate-300"
                    />
                    <span className="text-sm font-semibold text-slate-800">Скрыть прямой контакт (связь только через форму модератора AQ)</span>
                  </label>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreedTerms}
                      onChange={(e) => setFormData({ ...formData, agreedTerms: e.target.checked })}
                      className="w-4 h-4 rounded text-red-600 focus:ring-red-500 bg-white border-slate-300 mt-1"
                    />
                    <span className="text-xs text-slate-700 font-bold leading-relaxed">
                      Согласие на обработку персональных данных * <span className="text-slate-500 font-normal">(Обязательный чекбокс)</span>
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Footer Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-sm font-bold hover:text-slate-900 flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Назад
                </button>
              ) : <div />}

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-all shadow-md shadow-red-600/20 flex items-center gap-2 ml-auto"
              >
                <span>{currentStep === 5 ? 'Отправить заявку' : 'Далее'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* Confirmation State */
        <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 mx-auto">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-heading">
            Заявка принята!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
            Спасибо. Заявка отправлена на модерацию командам AQ Networking. Мы свяжемся с вами после проверки данных.
          </p>
          <div className="pt-4">
            <button
              onClick={resetForm}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800"
            >
              Закрыть окнo
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};
