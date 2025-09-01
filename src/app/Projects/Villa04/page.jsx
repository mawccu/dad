// app/projects/expeditors/page.jsx
import Image from "next/image";
import MasonryGrid from './mansory';
import ContactCTA from '../../Contact/contactCTA';

export default function Villa04() {

  return (
    <main className="w-full overflow-hidden py-10">
      <section className="px-6 pt-40 pb-4">
        <h1 className="text-4xl font-450">Prestigious Villa-04 Project</h1>
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
        <h2 className="text-2xl pb-4 font-medium">Interior Painting Works</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

This project involved the application of high-quality emulsion paint finishes across 2,500 m² in a newly built, four-floor luxury villa. While the scope focused solely on interior painting works, the scale and prestige of the property demanded precise execution, flawless finishes, and strict attention to detail to complement the villa’s high-end design        </p>
      </section>

      <MasonryGrid />

      <ContactCTA />
      
    </main>
  );
}
