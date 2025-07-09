'use client';
import HeroImage from './components/HeroImage';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import { useProgress } from './components/ProgressProvider';

function HeavyComponent() {
  const { reportAsLoaded } = useProgress();

  useEffect(() => {
    setTimeout(() => {
      reportAsLoaded('heavyComponent');
    }, 1500);
  }, []);

  return <div className="p-4 bg-gray-200">Heavy Component Loaded</div>;
}

function APIComponent() {
  const { reportAsLoaded } = useProgress();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://worldtimeapi.org/api/timezone/Asia/Amman')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        reportAsLoaded('api');
      })
      .catch(() => reportAsLoaded('api'));
  }, []);

  return <div className="text-sm mt-2">API Done: {data?.datetime}</div>;
}

export default function Home() {
  return (
    <>
      <Loader />
      <main className="p-10">
        <h1 className="text-4xl font-bold">Obys-Style Page</h1>
        <HeroImage />
        <HeavyComponent />
        <APIComponent />
      </main>
    </>
  );
}
