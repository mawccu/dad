// app/projects/expeditors/page.jsx
import Image from "next/image";
import MasonryGrid from './mansory';
import ContactCTA from '../../Contact/contactCTA';

export default function TAG() {

  return (
    <main className="w-full overflow-hidden py-10">
      <section className="px-6 pt-40 pb-4">
        <h1 className="text-4xl font-450">Talal Abu-Gazaleh Group Project</h1>
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
        <h2 className="text-2xl pb-4 font-medium">Comprehensive Waterproofing & Renovation Works</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

This project at the Talal Abu-Gazaleh Group (TAG) Head Office and academic facilities in Amman encompassed more than 2,500 m² of waterproofing and interior renovation works. At the Shmeisani head office, over 550 m² of roof surfaces were treated with advanced polyurethane waterproofing systems to ensure long-term durability and weather resistance. In addition, torch-applied membranes were installed across approximately 700 m² of roofs at the TAG academic buildings on Mecca Street, delivering watertight performance under challenging environmental conditions. The works also included interior renovations across 1,000 m² within TAG buildings, where high-quality painting systems were applied to restore and refresh office environments.
      </p>
      </section>

      <MasonryGrid />

      <section className="px-6 pt-20 pb-15 ml-auto text-left max-w-5xl">
        {/** This project involves the development of a comprehensive logistics
    solution for Expeditors, aimed at optimizing their supply chain
    operations. */}
        <h2 className="text-2xl pb-4 font-medium">On-Site Process</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

Execution combined large-scale waterproofing with detailed interior finishing. On the head office roofs, substrates were prepared and coated with high-performance polyurethane systems, providing superior elasticity and resistance to UV exposure. At the academic facilities, torch-applied membranes were installed with strict attention to splice joints and detailing around penetrations, ensuring complete watertightness. Interior renovation works involved surface preparation and multi-layer paint application across offices and common areas, enhancing both aesthetics and protection. The project’s scale and mix of techniques demonstrated the team’s ability to deliver reliable, high-quality solutions across diverse building types within the TAG portfolio.   
      </p>
   </section>
      
      <ContactCTA />
      
    </main>
  );
}
