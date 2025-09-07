// Contact/page.jsx
'use client';
import React, { Suspense } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import { useT } from '../i18n/client';
import FadeUp from '../../components/FadeUp';

export default function ContactPage() {
  const { t } = useT('common');

  return (
    <Suspense fallback={<div>{t('contact2.loading')}</div>}>
      <Call />
    </Suspense>
  );
}

function Contact({ onScheduleClick }) {
  const { t } = useT('common');
  const { lang } = useParams();

  const handleScheduleClick = (type) => {
    onScheduleClick(type);
    setTimeout(() => {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        const elementPosition = formElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 470;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <FadeUp delay={0}>
      <div className="min-h-screen py-16 sm:py-24 lg:py-32" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
          {/* Desktop text sizes preserved at lg */}
          <h1 className={`font-bold text-center mb-6 sm:mb-8 ${lang === 'ar' ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-2xl sm:text-3xl lg:text-4xl'}`}>
            {t('contact2.page_title')}
          </h1>
          <p className={`max-w-6xl font-300 text-center mb-10 sm:mb-16 ${lang === 'ar' ? 'text-lg sm:text-xl lg:text-2xl' : 'text-base sm:text-lg lg:text-2xl'}`}>
            {t('contact2.page_intro')}
          </p>
        </div>

      {/* phone + consultations */}
      <div className="container mx-auto px-4 mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 lg:gap-32">
          <div className="text-center">
            <h4 className="font-semibold text-lg sm:text-xl lg:text-1.5xl mb-2 sm:mb-4">{t('contact2.location_city')}</h4>
            <p><a href="tel:+962795637354" className="hover:underline">+962 79 5637354</a></p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-lg sm:text-xl lg:text-1.5xl mb-2 sm:mb-4">{t('contact2.remote_consultations')}</h4>
            <p className="text-sm sm:text-base lg:text-xl">{t('contact2.available_worldwide')}</p>
            <button
              onClick={() => handleScheduleClick('consultation')}
              className="text-lg lg:text-lg text-blue-600 mt-2 hover:text-blue-800 hover:underline transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap"
            >
              {t('contact2.schedule_online_meetings')}
            </button>
          </div>
        </div>
      </div>

      {/* emails */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-16 py-6 sm:py-8 lg:py-8">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="font-semibold text-xl sm:text-2xl">{t('contact2.emails_general')}</h2>
            <p className="text-base sm:text-lg lg:text-2xl font-300">
              <a href="mailto:info@newlook-jo.com" className="hover:underline">info@newlook-jo.com</a>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h2 className="font-semibold text-xl sm:text-2xl">{t('contact2.emails_careers')}</h2>
            <p className="text-base sm:text-lg lg:text-2xl font-300">
              <a href="mailto:careers@newlook-jo.com" className="hover:underline">careers@newlook-jo.com</a>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h2 className="font-semibold text-xl sm:text-2xl">{t('contact2.emails_pr')}</h2>
            <p className="text-base sm:text-lg lg:text-2xl font-300">
              <a href="mailto:pr@newlook-jo.com" className="hover:underline">pr@newlook-jo.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </FadeUp>
  );
}

const FormInput = ({ label, type = 'text', value, onChange, name, lang }) => (
  <div
    className={`
      flex flex-col sm:flex-row items-start sm:items-baseline
      ${lang === 'ar' ? 'gap-2 sm:gap-6' : 'gap-2 sm:gap-4'}
    `}
    dir={lang === 'ar' ? 'rtl' : 'ltr'}
  >
    <label
      htmlFor={name}
      className={`
        text-gray-800 shrink-0
        ${lang === 'ar' ? 'text-right w-full sm:w-36 text-base sm:text-lg' : 'text-left w-full sm:w-28 text-base sm:text-base'}
      `}
    >
      {label}
    </label>

    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`
          w-full flex-grow bg-transparent border-b border-gray-400
          focus:outline-none focus:border-black transition-colors resize-none
          focus:text-gray-700 text-gray-300 overflow-hidden
          ${lang === 'ar' ? 'text-right text-base sm:text-lg sm:mr-2' : 'text-left text-base sm:text-base'}
        `}
        rows={1}
        style={{ resize: 'none' }}
        onInput={(e) => {
          e.target.style.height = 'auto';
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
      />
    ) : (
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`
          w-full flex-grow bg-transparent border-b border-gray-400
          focus:outline-none text-gray-300 focus:border-black transition-colors focus:text-gray-700
          ${lang === 'ar' ? 'text-right text-base sm:text-lg sm:mr-2' : 'text-left text-base sm:text-base'}
        `}
      />
    )}
  </div>
);

function ContactForm({ prefillType }) {
  const { t } = useT('common');
  const { lang } = useParams();

  const prefillTemplates = {
    consultation: t('contact2.prefill_consultation'),
    general: t('contact2.prefill_general'),
    collaboration: t('contact2.prefill_collaboration'),
  };

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    details: '',
    location: '',
    phone: '',
  });

  React.useEffect(() => {
    if (prefillType && prefillTemplates[prefillType]) {
      setFormData((prev) => ({
        ...prev,
        details: prefillTemplates[prefillType],
        location: prefillType === 'consultation' ? t('contact2.remote_value') : prev.location,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefillType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyFields = Object.entries(formData).filter(([, value]) => !value.trim());
    if (emptyFields.length > 0) {
      alert(`Please fill in the following fields: ${emptyFields.map(([key]) => key).join(', ')}`);
      return;
    }
    console.log('Form Submitted:', formData);
  };

  return (
    <FadeUp delay={0.4}>
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Headings above form */}
        <div className="flex items-center justify-center flex-col mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-6 sm:mb-8 font-500">
            {t('contact2.page_title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl text-gray-800 text-center max-w-5xl font-350">
            {t('contact2.page_intro')}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div id="contact-form" className="w-full max-w-5xl py-8 sm:py-12 lg:py-16 bg-white">
            <form onSubmit={handleSubmit}>
              {/* Responsive grid: 1 col mobile → 2 cols sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-6 sm:gap-x-8 lg:gap-x-12 mb-12 sm:mb-16 text-base sm:text-1.5xl font-400">
                <FormInput
                  label={t('contact2.label_name')}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  lang={lang}
                />
                <FormInput
                  label={t('contact2.label_location')}
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  lang={lang}
                />
                <FormInput
                  label={t('contact2.label_email')}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  lang={lang}
                />
                <FormInput
                  label={t('contact2.label_phone')}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  lang={lang}
                />
                <div className="sm:col-span-2 text-base sm:text-1.5xl">
                  <FormInput
                    label={t('contact2.label_details')}
                    type="textarea"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    lang={lang}
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="
                    bg-transparent text-black font-semibold
                    py-6 sm:py-7 lg:py-8
                    px-4 tracking-wider
                    text-base sm:text-lg lg:text-1.5xl
                    underline underline-offset-4
                    hover:text-gray-600
                    focus:outline-none focus:text-gray-600
                    transition-all duration-300
                  "
                >
                  {t('contact2.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </FadeUp>
  );
}

function Call() {
  const [prefillType, setPrefillType] = React.useState(null);
  const searchParams = useSearchParams();
  const reason = searchParams.get('reason');

  React.useEffect(() => {
    if (reason) setPrefillType(reason);
  }, [reason]);

  const handleScheduleClick = (type) => setPrefillType(type);

  return (
    <div>
      <Contact onScheduleClick={handleScheduleClick} />
      <ContactForm prefillType={prefillType} />
    </div>
  );
}
