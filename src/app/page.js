'use client';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import { useProgress } from './components/ProgressProvider';
import Mask from './components/Mask';
import Navbar from './components/Navbar'
import Image from 'next/image';
import Testimonials from './components/Testimonials'
import StickyFooter from './components/StickyFooter';

function MaskLoad(){
  const { reportAsLoaded } = useProgress()

  useEffect(() => {
    reportAsLoaded('mask')
  }, [])
  return <Mask />
}

function ImageLoad(){
  const { reportAsLoaded } = useProgress();

  useEffect(() => {
    reportAsLoaded('heroImage')
  },[])
  return <div></div>
}

function HeavyComponent() {
  const { reportAsLoaded } = useProgress();

  useEffect(() => {
    setTimeout(() => {
      reportAsLoaded('heavyComponent');
    }, 1500);
  }, []);

  return <div></div>;
}

function APIComponent() {
  const { reportAsLoaded } = useProgress();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://worldtimeapi.org/api/timezone/Asia/Amman')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        reportAsLoaded('api'); //report back to the context
      })
      .catch(() => reportAsLoaded('api')); //report back to the context
  }, []);

  return <div></div>;
}

export default function Home() {
  return (
    <>
      <Loader />
      <MaskLoad />
      <HeavyComponent />
      <APIComponent />
      <ImageLoad />
      <Navbar />
      <div className="h-[calc(100vh-80px)] w-full relative">
        <Image
          src="/medias/img1.jpg"
          fill={true}
          alt="Hero Image"
          className="object-cover"
          priority={true} 
        />
      </div>
      <Testimonials />
      <StickyFooter />
      
    </>
  );
}
