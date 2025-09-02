// app/projects/expeditors/page.jsx
import Image from "next/image";
import MasonryGrid from './mansory';
import MasonryGrid2 from './mansory copy'
import ContactCTA from '../../Contact/contactCTA';

export default function Expeditors() {

  return (
    <main className="w-full overflow-hidden py-10">
      <section className="px-6 pt-40 pb-4">
        <h1 className="text-4xl font-450">Wadi-Abdoun Bridge Project</h1>
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

This project at the Wadi Abdoun Bridge involved the full application of anti-carbonation coating systems across the bridge structure, the specialized waterproofing of pylons using cementitious systems, and the protective painting of scaffolding metallic systems. In total, more than <span className="font-semibold text-gray-700"> 45,000 m² </span> of surfaces were treated, ensuring long-term durability and safeguarding one of Amman’s most iconic engineering landmarks. 
       </p>
      
      </section>

      <MasonryGrid />

      <section className="px-6 pt-20 pb-15 ml-auto text-left max-w-5xl">
        {/** This project involves the development of a comprehensive logistics
    solution for Expeditors, aimed at optimizing their supply chain
    operations. */}
        <h2 className="text-2xl pb-4 font-medium">Leadership & Recognition</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

        At the time, the works were carried out under SIPES, where <a target= "_blank" href="../../About/RamiHamad" rel="noopener noreferrer"><span className="font-semibold text-blue-700 hover:text-blue-400">Engineer Rami Hamad (Founder) </span></a> served as Project Manager. Through his leadership, he proved himself capable of managing a project of national significance. His performance was formally acknowledged by <a target= "_blank" href="https://www.larsentoubro.com/" rel="noopener noreferrer"><span className="font-semibold text-blue-700 hover:text-blue-400">Larsen & Toubro</span></a>, one of the world’s largest multinational engineering and construction firms, who issued a signed <span className="font-semibold text-gray-700">Letter of Recommendation</span> confirming his role as Project Manager and commending his skill and professionalism. This recognition stands as a milestone achievement and continues to reflect the expertise and credibility that define our company today.
      </p>
      <p className="text-sm text-gray-400 mt-4 italic">
          A copy of the signed Letter of Recommendation from Larsen & Toubro is available upon request.
      </p>
      </section>
      
      <MasonryGrid2 />

      <section className="px-6 pt-20 pb-15 ml-auto text-left max-w-5xl">
        {/** This project involves the development of a comprehensive logistics
    solution for Expeditors, aimed at optimizing their supply chain
    operations. */}
        <h2 className="text-2xl pb-4 font-medium">Materials & Execution</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

        The works were executed under Jordan Sipes Paint Co., in collaboration with Larsen & Toubro (L&T), using advanced SIPES × Küster systems. These materials were selected for their international-grade performance in infrastructure projects, combining high resistance to carbonation, superior adhesion, and long-term waterproofing protection. Application included detailed surface preparation, precision in coating layers, and careful treatment of critical areas such as pylons and scaffolding to guarantee complete structural integrity.      </p>
      </section>

      <ContactCTA />
      
    </main>
  );
}
