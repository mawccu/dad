// app/projects/expeditors/page.jsx
'use client'
import Image from "next/image";
import MasonryGrid from './mansory';
import ContactCTA from '../../Contact/contactCTA';

export default function NCC() {

  return (
    <main className="w-full overflow-hidden py-10">
      <section className="px-6 pt-40 pb-4">
        <h1 className="text-4xl font-450">North Cement HQ</h1>
      </section>

      <section className="relative w-full h-[100vh]">
        <Image
          src="/medias/placeholder.png"
          alt="Expeditors bathroom project hero"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </section>

      <section className="px-6 pt-40 pb-15 ml-auto text-left max-w-5xl">
        {/** This project involves the development of a comprehensive logistics
    solution for Expeditors, aimed at optimizing their supply chain
    operations. */}
        <h2 className="text-2xl pb-4 font-medium">Comprehensive Waterproofing and Protective Coatings</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

This project at NCC’s headquarters covered a total of 7,000 m², including 1,500 m² of roofing, 2,000 m² of interior areas, and 3,000 m² of exterior 
facades. The works featured torch-applied waterproofing membranes for the roofs, advanced flooring systems, and specialized protective coatings.
 Using the same principles, systems and materials applied on the <a href="./AbdounBridge"><span className="font-bold text-blue-600 hover:text-blue-900 cursor-pointer"> Abdoun Bridge Project</span></a>, ensuring a proven
  level of durability and long-term structural protection. Materials were supplied by leading brands such as LAMA, guaranteeing the 
  highest performance standards.        
  </p>
      </section>

      <MasonryGrid />

      <section className="px-6 pt-20 pb-15 ml-auto text-left max-w-5xl">
        {/** This project involves the development of a comprehensive logistics
        solution for Expeditors, aimed at optimizing their supply chain
        operations. */}
        <h2 className="text-2xl pb-4 font-medium">On-Site Process</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

Our team executed waterproofing and coating works with close attention to technical details such as splice links in the membranes, ensuring watertight roofing performance. The interior surfaces were treated with protective flooring and coating systems designed to withstand wear, humidity, and daily use. For the exterior, anti-carbonation coatings were carefully applied to prevent environmental damage and extend the building’s service life. The project combined quality materials, precision application, and proven systems to deliver reliable and long-lasting results.      </p>
      </section>
      
      <ContactCTA />
      
    </main>
  );
}
