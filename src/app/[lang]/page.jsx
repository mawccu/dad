//[lang]/page.jsx
'use client';
import Loader from '../components/Loader';
import { useEffect, useState } from 'react';
import { useProgress } from '../components/ProgressProvider';
import Mask from '../components/Mask';
import Navbar from '../components/Navbar'
import Image from 'next/image';
import Hero from './Hero/page.jsx'
import StickyFooter from './components/StickyFooter';
import Header from './components/Header'
import { useT } from './i18n/client';

function MaskLoad({ onComplete }) {
  const { reportAsLoaded } = useProgress()

  useEffect(() => {
    reportAsLoaded('mask')
  }, [])
  
  return <Mask onComplete={onComplete} />
}

function ImageLoad(){
  const { reportAsLoaded } = useProgress();

  useEffect(() => {
    reportAsLoaded('heroImage')
  },[])
  return null; // Don't render anything initially
}

function HeavyComponent() {
  const { reportAsLoaded } = useProgress();

  useEffect(() => {
    setTimeout(() => {
      reportAsLoaded('heavyComponent');
    }, 1500);
  }, []);

  return null; // Don't render anything initially
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

  return null; // Don't render anything initially
}

export default function Home() {
    const [maskDone, setMaskDone] = useState(false);
    const { progress } = useProgress(); // Get progress to control content visibility
    const { t } = useT('common'); // translations available


  // Debug logging
  useEffect(() => {
    // console.log('🔍 HOME DEBUG: maskDone state changed to:', maskDone);
  }, [maskDone]);

  return (
    <>
      {/* <Loader /> */}
      <MaskLoad onComplete={() => {
        // console.log('🔍 HOME DEBUG: Mask animation completed, setting maskDone to true');
        setMaskDone(true);
      }} />
      <HeavyComponent />
      <APIComponent />
      <ImageLoad />
      
      {/* Debug: Always show navbar for testing */}
      {/* {console.log('🔍 HOME DEBUG: Rendering navbar check, maskDone:', maskDone)} */}
      
      {maskDone && (
        <div style={{ position: 'relative', zIndex: 99999 }}>
        {/* {console.log('🔍 RENDERING HEADER NOW!')} ADD THIS LINE */}
        <Header />
    </div>
      )}
      
      {/* Only show content after loader completes */}
      {progress === 100 && (
        <>
          <div className="h-[100vh] w-full relative">
            <Image
              src="/medias/img5.jpg"
              fill={true}
              alt="Hero Image"
              className="object-cover"
              priority={true} 
            />
          </div>
           <Hero /> 
        </>
      )}
    </>
  );
}