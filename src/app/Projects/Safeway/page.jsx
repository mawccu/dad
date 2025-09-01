// app/projects/expeditors/page.jsx
import Image from "next/image";
import MasonryGrid from './mansory';
import ContactCTA from '../../Contact/contactCTA';

export default function Safeway() {

  return (
    <main className="w-full overflow-hidden py-10">
      <section className="px-6 pt-40 pb-4">
        <h1 className="text-4xl font-450">Safeway Project</h1>
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
        <h2 className="text-2xl pb-4 font-medium">Epoxy Flooring & Renovation Works</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

This project at Safeway’s head office covered approximately 6,000 m² of epoxy flooring systems, supplied and applied to meet the operational demands of a high-traffic retail environment. The scope also extended to renovation and maintenance works across several Safeway branches, ensuring consistency in flooring performance and finish. The epoxy systems were selected for their durability, resistance to wear, and ease of maintenance, making them well-suited for both back-of-house facilities and customer-facing areas.    
      </p>
      </section>

      <MasonryGrid />

      <section className="px-6 pt-20 pb-15 ml-auto text-left max-w-5xl">
        {/** This project involves the development of a comprehensive logistics
    solution for Expeditors, aimed at optimizing their supply chain
    operations. */}
        <h2 className="text-2xl pb-4 font-medium">On-Site Process</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

The works began with full substrate preparation, including grinding, cleaning, and joint treatment, followed by the application of a multi-layer epoxy system consisting of a primer, high-build body coat, and protective topcoat. This process created a seamless, non-porous surface with high resistance to wear, chemicals, and daily cleaning, making it ideal for Safeway’s heavy-traffic retail operations. Curing schedules were carefully managed and much of the application was carried out during off-hours to minimize disruption. Renovation and maintenance across additional branches applied the same technical standards, ensuring consistent performance, safety, and appearance throughout all Safeway facilities.      </p>
      </section>
      
      <ContactCTA />
      
    </main>
  );
}
