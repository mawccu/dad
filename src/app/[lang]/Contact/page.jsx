// Contact/page.jsx
'use client';
import React, { Suspense } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import { useT } from '../i18n/client';
import FadeUp from '../../components/FadeUp';
import { sendContactMessage } from '../../../lib/firebase'; // <-- optional, safe if not configured

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
      <div className="py-16 sm:py-24 md:py-40 lg:py-40" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
          <h1 className={`font-bold text-center mb-6 sm:mb-8 ${lang === 'ar' ? 'text-2xl sm:text-3xl lg:text-3xl 2xl:text-4xl' : 'text-2xl sm:text-3xl lg:text-3xl 2xl:text-4xl'}`}>
            {t('contact2.page_title')}
          </h1>
          <p className={`max-w-6xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl font-300 text-center mb-10 sm:mb-16 ${lang === 'ar' ? 'text-lg sm:text-xl lg:text-xl 2xl:text-2xl' : 'text-base sm:text-lg lg:text-xl 2xl:text-2xl'}`}>
            {t('contact2.page_intro')}
          </p>
        </div>

        {/* phone + consultations */}
        <div className="container mx-auto px-4 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 lg:gap-32">
            <div className="text-center">
              <h4 className="font-semibold text-lg sm:text-xl lg:text-1.5xl mb-2 sm:mb-4">{t('contact2.location_city')}</h4>
              <p><a href="tel:+962795637354" className="hover:underline" dir={'ltr'}>+962 79 5637354</a></p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg sm:text-xl lg:text-1.5xl mb-2 sm:mb-4">{t('contact2.location_city2')}</h4>
              <p><a href="tel:+966595687465" className="hover:underline" dir={'ltr'}>+966 59 5687465</a></p>
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
                <a href="mailto:info@newlookjo.com" className="hover:underline">info@newlookjo.com</a>
              </p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <h2 className="font-semibold text-xl sm:text-2xl">{t('contact2.emails_careers')}</h2>
              <p className="text-base sm:text-lg lg:text-2xl font-300">
                <a href="mailto:careers@newlookjo.com" className="hover:underline">careers@newlookjo.com</a>
              </p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <h2 className="font-semibold text-xl sm:text-2xl">{t('contact2.emails_pr')}</h2>
              <p className="text-base sm:text-lg lg:text-2xl font-300">
                <a href="mailto:pr@newlookjo.com" className="hover:underline">pr@newlookjo.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

const FormInput = ({
  label,
  type = 'text',
  value,
  onChange,
  name,
  lang,
  placeholder,
  error,
  onBlur,
}) => {
  const errorStyles = error ? 'border-red-500 text-red-600 placeholder:text-red-400' : 'border-gray-400 text-gray-300';
  const focusStyles = error ? 'focus:border-red-500 focus:text-red-700' : 'focus:border-black focus:text-gray-700';

  return (
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
        <div className="w-full">
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={`
              w-full flex-grow bg-transparent border-b ${errorStyles}
              focus:outline-none ${focusStyles} transition-colors resize-none
              overflow-hidden
              ${lang === 'ar' ? 'text-right text-base sm:text-lg sm:mr-2' : 'text-left text-base sm:text-base'}
            `}
            rows={1}
            style={{ resize: 'none' }}
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      ) : (
        <div className="w-full">
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={`
              w-full flex-grow bg-transparent border-b ${errorStyles}
              focus:outline-none ${focusStyles} transition-colors
              ${lang === 'ar' ? 'text-right text-base sm:text-lg sm:mr-2' : 'text-left text-base sm:text-base'}
            `}
          />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      )}
    </div>
  );
};

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

  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

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

  const validate = (values) => {
    const e = {};
    const requiredMsg = lang === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';

    if (!values.name.trim()) e.name = requiredMsg;

    if (!values.email.trim()) {
      e.email = requiredMsg;
    } else {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
      if (!ok) e.email = lang === 'ar' ? 'البريد الإلكتروني غير صالح' : 'Invalid email address';
    }

    if (!values.phone.trim()) {
      e.phone = requiredMsg;
    } else {
      const phoneOk = /^[0-9+()\-\s]{6,}$/.test(values.phone);
      if (!phoneOk) e.phone = lang === 'ar' ? 'رقم هاتف غير صالح' : 'Invalid phone number';
    }

    if (!values.location.trim()) e.location = requiredMsg;

    if (!values.details.trim()) {
      e.details = requiredMsg;
    } else if (values.details.trim().length < 10) {
      e.details = lang === 'ar' ? 'الرسالة قصيرة جداً' : 'Please provide a bit more detail';
    }

    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      // live-validate touched fields
      const nextErrors = validate({ ...formData, [name]: value });
      setErrors(nextErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const nextErrors = validate(formData);
    setErrors(nextErrors);
  };

  const scrollToFirstError = (errObj) => {
    const first = Object.keys(errObj)[0];
    if (!first) return;
    const el = document.getElementById(first);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    setTouched({
      name: true, email: true, phone: true, location: true, details: true,
    });

    if (Object.keys(nextErrors).length) {
      scrollToFirstError(nextErrors);
      return;
    }

    try {
      setSubmitting(true);
      const res = await sendContactMessage({
        ...formData,
        lang,
        source: 'contact_page',
      });
      setSubmitted(true);
      if (res?.offline) {
        // Firebase not configured; still show success (we kept payload client-side).
        console.info('[Contact] Submitted locally (Firebase not configured).');
      }
      // Optionally reset form
      setFormData({ name: '', email: '', details: '', location: '', phone: '' });
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error(err);
      // Surface a gentle error banner
      alert(lang === 'ar' ? 'حصل خطأ أثناء الإرسال. حاول مرة أخرى.' : 'Something went wrong while sending. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
      <div className="py-20 min-h-screen">
        <div className="container mx-auto px-4 lg:px-10 xl:px-12 2xl:px-16">
          {/* Headings above form */}
          <div className="flex items-center justify-center flex-col mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-center mb-6 sm:mb-8 font-500">
              {lang === 'ar' ? 'بانتظارك متى ما شئت.' : 'Ready when you are.'}
            </h1>
          </div>

          <div className="flex items-center justify-center">
            <div id="contact-form" className="w-full max-w-5xl py-8 sm:py-12 lg:py-16 bg-white">
              {/* Success banner */}
              {submitted && (
                <div className="mx-4 sm:mx-8 mb-6 rounded-md bg-green-50 border border-green-200 p-4 text-green-800">
                  {lang === 'ar' ? 'تم إرسال رسالتك بنجاح! سنعاود التواصل قريبًا.' : 'Your message has been sent! We’ll get back to you soon.'}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {/* 1 col (mobile) → 2 cols (sm+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-6 sm:gap-x-8 lg:gap-x-12 mb-12 sm:mb-16 text-base sm:text-1.5xl font-400">
                  <FormInput
                    label={t('contact2.label_name')}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    lang={lang}
                    placeholder={lang === 'ar' ? 'الاسم الكامل' : 'John Doe'}
                    error={touched.name && errors.name}
                  />
                  <FormInput
                    label={t('contact2.label_location')}
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    lang={lang}
                    placeholder={lang === 'ar' ? 'الموقع' : 'Jordan, Amman'}
                    error={touched.location && errors.location}
                  />
                  <FormInput
                    label={t('contact2.label_email')}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    lang={lang}
                    placeholder={lang === 'ar' ? 'البريد الإلكتروني' : 'john.doe@example.com'}
                    error={touched.email && errors.email}
                  />
                  <FormInput
                    label={t('contact2.label_phone')}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    lang={lang}
                    placeholder={lang === 'ar' ? 'رقم الهاتف' : '+962 79 1234567'}
                    error={touched.phone && errors.phone}
                  />
                  <div className="sm:col-span-2 text-base sm:text-1.5xl">
                    <FormInput
                      label={t('contact2.label_details')}
                      type="textarea"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      lang={lang}
                      placeholder={lang === 'ar' ? 'اكتب رسالتك هنا...' : 'Type your message here...'}
                      error={touched.details && errors.details}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`
                      bg-transparent text-black font-semibold
                      py-6 sm:py-7 lg:py-8
                      px-4 tracking-wider
                      text-base sm:text-lg lg:text-1.5xl
                      underline underline-offset-4
                      hover:text-gray-600
                      focus:outline-none focus:text-gray-600
                      transition-all duration-300
                      ${submitting ? 'opacity-60 cursor-not-allowed' : ''}
                    `}
                  >
                    {submitting ? (lang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...') : t('contact2.submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
