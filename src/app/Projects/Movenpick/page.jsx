// app/projects/expeditors/page.jsx
import Image from "next/image";
import MasonryGrid from './mansory';
import ContactCTA from '../../Contact/contactCTA';

export default function Expeditors() {

  return (
    <main className="w-full overflow-hidden py-10">
      <section className="px-6 pt-40 pb-4">
        <h1 className="text-4xl font-450">Mövenpick Project</h1>
      </section>

      <section className="relative w-full h-[100vh]">
        <Image
          src="/medias/movenpick.png"
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
        <h2 className="text-2xl pb-4 font-medium">Specialized Decorative Epoxy & Waterproofing Systems</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">
 
This project at Mövenpick Dead Sea required a combination of specialized flooring and waterproofing systems tailored to the unique demands of hospitality operations. Works included the application of self-leveling epoxy flooring systems in the hotel kitchens, where seamless and hygienic surfaces are critical for food safety, and epoxy coating systems in the solarium areas, designed for durability under constant moisture and heavy use. On the roofs, torch-applied waterproofing membranes were installed to seal and protect a series of plant containers, ensuring reliable water retention without compromising the structural integrity of the rooftop landscape. Though smaller in scope compared to other projects, it was among the most specialized and detail-oriented works, demanding precision in both planning and execution.   
</p>
   </section>

      <MasonryGrid />

      <section className="px-6 pt-20 pb-15 ml-auto text-left max-w-5xl">
        {/** This project involves the development of a comprehensive logistics
    solution for Expeditors, aimed at optimizing their supply chain
    operations. */}
        <h2 className="text-2xl pb-4 font-medium">On-Site Process</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

The works required a highly meticulous approach. In the kitchens, substrates were prepared to a fine tolerance before applying multi-layer self-leveling epoxy, resulting in a smooth, non-porous finish that meets hygiene and cleaning standards. In the solarium, epoxy coating systems were chosen for their resistance to UV exposure, humidity, and continuous foot traffic. The waterproofing of rooftop plant containers demanded careful torch application around irregular geometries, with strict attention to splice joints and terminations to ensure watertightness. As one of the most intricate projects in the portfolio, it highlighted the team’s ability to deliver precise, high-performance solutions in sensitive hospitality environments.     
</p>
 </section>
      
      <ContactCTA />
      
    </main>
  );
}
