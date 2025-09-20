// app/components/ProgressProvider.jsx
'use client';
import { createContext, useContext, useMemo, useState, useCallback } from 'react';

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [items, setItems] = useState({}); // start empty

  // Seed the exact keys we expect for this page load (idempotent)
  const setExpected = useCallback((keys) => {
    setItems((prev) => {
      // keep any already-true values if they exist
      const next = {};
      keys.forEach((k) => { next[k] = prev[k] ?? false; });
      return next;
    });
  }, []);

  const reportAsLoaded = useCallback((key) => {
    setItems((prev) => ({ ...prev, [key]: true }));
  }, []);

  const progress = useMemo(() => {
    const total = Object.keys(items).length || 1;   // avoid div-by-0
    const loaded = Object.values(items).filter(Boolean).length;
    return Math.round((loaded / total) * 100);
  }, [items]);

  return (
    <ProgressContext.Provider value={{ reportAsLoaded, setExpected, progress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('ProgressProvider is missing');
  return ctx;
}
