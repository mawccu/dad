// server component — no "use client"
// src/app/page.js
import { permanentRedirect } from 'next/navigation';

export default function Root() {
  // pick your default; later you can add Accept-Language middleware
  permanentRedirect('/en');
}
