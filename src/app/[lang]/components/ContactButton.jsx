'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

export default function ContactButton({ show }) {
  const { lang } = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(16); // px
  const rafRef = useRef(null);

  // Auto-open popup 5s after home mounts (e.g., /en or /ar)
  useEffect(() => {
    if (pathname === `/${lang}` && show) {
      const t = setTimeout(() => setOpen(true), 10000);
      return () => clearTimeout(t);
    }
  }, [pathname, show, lang]);

  // Compute how much the footer overlaps the viewport and push the button up by that amount.
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const compute = () => {
      const r = footer.getBoundingClientRect();
      // pixels of the footer intruding into the viewport (>= 0)
      const overlap = Math.max(0, window.innerHeight - Math.max(r.top, 0));
      // base gap 16px + overlap
      setBottomOffset(16 + overlap);
    };

    // run once
    compute();

    // rAF-coalesced scroll/resize updates
    const schedule = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        compute();
      });
    };

    const onScroll = () => schedule();
    const onResize = () => schedule();

    // IntersectionObserver just to know when to recompute aggressively
    const io = new IntersectionObserver(() => schedule(), { threshold: 0 });
    io.observe(footer);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      io.disconnect();
    };
  }, []);

  // Position per language
  const sideClass = lang === 'ar' ? 'left-4 sm:left-6 md:left-6 lg:left-5' : 'right-4 sm:right-6 md:right-6 lg:right-5';

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`fixed z-[9999] ${sideClass}`}
          style={{ bottom: bottomOffset }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating circle button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center text-white shadow-lg overflow-hidden" // Added overflow-hidden
            aria-label={open ? 'Close contact popup' : 'Open contact popup'}
            >
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                // The key is crucial! It tells AnimatePresence that this is a new component.
                key={open ? 'x-icon' : 'message-icon'}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                {open ? <X size={20} /> : <MessageSquare size={20} />}
                </motion.div>
            </AnimatePresence>
           </button>

          {/* Popup panel */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                // anchor to the inside edge of the button container
                className={`absolute bottom-20 w-[24rem] max-w-[100vw] rounded-xl shadow-xl bg-white overflow-hidden
                  ${lang === 'ar' ? 'left-0' : 'right-0'}`}
              >
                <div className="text-center bg-[#2b2b2b] p-8 w-full">
                    <h1 className="text-white font-semibold text-2xl pb-2">New Look</h1>
                    <p className="text-gray-400">
                        {`${lang === 'ar' ? 'هل لديك مشروع في ذهنك؟ احجز ' : 'Have a project in mind? Book a '}`}
                        <span className="text-green-400 font-semibold">{`${lang === 'ar' ? 'استشارة أولية مجانية' : 'free initial Consultation'}`}</span>
                        {`${lang === 'ar' ? ' و اكتشف كيف يمكننا مواءمة خدماتنا مع أهدافك.' : ' and explore how we can align our services with your goals.'}`}</p>
                </div>

                <div className="p-4 flex flex-col gap-4">
                  <p className="text-gray-700">
                    {` ${lang === 'ar' ? 'انقر أدناه لجدولة مكالمة مع فريقنا.' : 'Click below to schedule a call with our team.'}`}
                  </p>
                  <div className="flex justify-center">
                  <button
                    onClick={() => router.push(`/${lang}/Contact`)}
                    className="px-8 py-2 rounded-full bg-[#2b2b2b] text-white hover:bg-green-500 transition-all duration-300"
                  >
                    {`${lang === 'ar' ? 'طلب استشارة' : 'Request a Consultation'}`}
                  </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
