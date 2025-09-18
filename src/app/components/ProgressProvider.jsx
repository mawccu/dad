// app/components/ProgressProvider.jsx
'use client';
import { createContext, useContext, useMemo, useState } from 'react';

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [items, setItems] = useState({
    heroImage: false,
    heavyComponent: false
  });

  const reportAsLoaded = (key) => {
    setItems((prev) => ({ ...prev, [key]: true }));
  };

  const progress = useMemo(() => { // so it saves the calculated data and doesn't calculate again on each re-render
    const total = Object.keys(items).length;
    const loaded = Object.values(items).filter(Boolean).length; // filters for truthy values
    return Math.round((loaded / total) * 100);
  }, [items]);

  return (
    <ProgressContext.Provider value={{ reportAsLoaded, progress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('ProgressProvider is missing');
  return context;
}
