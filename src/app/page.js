// server component — no "use client"
import { redirect } from 'next/navigation';

export default function Root() {
  // pick your default; later you can add Accept-Language middleware
  redirect('/en');
}
