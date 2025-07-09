'use client';
import Image from 'next/image';
import { useProgress } from './ProgressProvider';

export default function HeroImage() {
  const { reportAsLoaded } = useProgress();

  return (
    <Image
      src="https://via.placeholder.com/1200x600"
      alt="hero"
      width={1200}
      height={600}
      onLoad={() => reportAsLoaded('heroImage')}
      onError={() => reportAsLoaded('heroImage')}
      className="w-full h-auto"
    />
  );
}
