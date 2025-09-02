// app/projects/expeditors/page.jsx
import Image from "next/image";
import MasonryGrid from './mansory';
import MasonryGrid2 from './mansory copy'
import ContactCTA from '../../Contact/contactCTA';

export default function BusinessParkTower() {

  return (
    <main className="w-full overflow-hidden py-10">
      <section className="px-6 pt-40 pb-4">
        <h1 className="text-4xl font-450">Business Park Tower - Jeddah, Saudi Arabia</h1>
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
        <h2 className="text-2xl pb-4 font-medium">Scope of Works</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

        The Business Park Tower in Jeddah, Saudi Arabia is a landmark high-rise development, delivering state-of-the-art business facilities and commercial space in one of the Kingdom’s most important urban centers. The works carried out during this phase of construction included comprehensive concrete repair, the installation of protective epoxy flooring systems, and waterproofing and fireproofing treatments for the gas, fire, and water tanks, all essential elements for the safety and long-term performance of the tower.       </p>
      
      </section>

      <MasonryGrid />

      <section className="px-6 pt-20 pb-15 ml-auto text-left max-w-5xl">
        {/** This project involves the development of a comprehensive logistics
    solution for Expeditors, aimed at optimizing their supply chain
    operations. */}
        <h2 className="text-2xl pb-4 font-medium">Leadership & Role</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

        At the time, <a target= "_blank" rel="noopener noreferrer" href="../../About/RamiHamad"><span className="font-semibold text-blue-700 hover:text-blue-400">Engineer Rami Hamad (Founder) </span></a> served as acting Project Manager with <a target="_blank" href="sak.com.sa" rel="noopener noreferrer"><span className="text-blue-700 font-semibold hover:text-blue-400">Saad H. Abukhadra & Co.</span></a> His responsibilities included supervising the execution of repair and protection systems, coordinating subcontractors on site, and ensuring compliance with both engineering standards and safety requirements. Although his assignment was temporary and limited to the mid-phase of construction, it reflected his ability to step into leadership on a major Gulf project and maintain operational continuity.
      </p>
     
      </section>
      
      <MasonryGrid2 />

      <section className="px-6 pt-20 pb-15 ml-auto text-left max-w-5xl">
        {/** This project involves the development of a comprehensive logistics
    solution for Expeditors, aimed at optimizing their supply chain
    operations. */}
        <h2 className="text-2xl pb-4 font-medium">Materials & System</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

      The interventions combined structural repair systems for damaged concrete, high-performance epoxy flooring solutions designed for heavy-use commercial environments, and specialized waterproofing/fireproofing applications for critical utility tanks. These systems were applied in line with Gulf construction standards, providing durability, safety, and long-term asset protection.   
         </p>
      </section>
      
      <section className="px-6 pt-20 pb-20 ml-auto text-left max-w-5xl">
        {/** This project involves the development of a comprehensive logistics
    solution for Expeditors, aimed at optimizing their supply chain
    operations. */}
        <h2 className="text-2xl pb-4 font-medium">Notes</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

          This legacy project was undertaken in 2013 under <a target="_blank" rel="noopener noreferrer" href="sak.com.sa"><span className="text-blue-700 font-semibold hover:text-blue-400">Saad H. Abukhadra & Co.</span></a> While <a target= "_blank" rel="noopener noreferrer" href="../../About/RamiHamad"><span className="font-semibold text-blue-700 hover:text-blue-400">Engineer Rami Hamad's </span></a> role as acting Project Manager was limited in time and scope, it remains an important milestone in his career, showcasing adaptability, technical oversight, and leadership experience within the Saudi market.         </p>
        </section>

      <ContactCTA />
      
    </main>
  );
}
