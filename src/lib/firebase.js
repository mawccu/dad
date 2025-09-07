// /lib/firebase.js
// Optional: only used if you set env vars. Safe to import even if unset.

import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

let app;
export function getFirebaseApp() {
  if (typeof window === 'undefined') return null; // client only for this simple use
  if (getApps().length) return getApps()[0];
  const cfg = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
  if (!cfg.apiKey || !cfg.projectId) return null; // not configured
  app = initializeApp(cfg);
  return app;
}

export async function sendContactMessage(data) {
  const app = getFirebaseApp();
  if (!app) {
    // Not configured yet — safe fallback
    console.warn('[Firebase] Not configured. Payload:', data);
    return { ok: true, offline: true };
  }
  const db = getFirestore(app);
  await addDoc(collection(db, 'contact_messages'), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return { ok: true, offline: false };
}
