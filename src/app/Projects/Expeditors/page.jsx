// app/projects/expeditors/page.jsx
import Image from "next/image";
import MasonryGrid from './mansory';
import ContactCTA from '../../Contact/contactCTA';

export default function Expeditors() {

  return (
    <main className="w-full overflow-hidden py-10">
      <section className="px-6 pt-40 pb-4">
        <h1 className="text-4xl font-450">Expeditors Project</h1>
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
        <h2 className="text-2xl pb-4 font-medium">Comprehensive Surface Coatings and Maintenance</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

        This project took place at the Expeditors head office factories in Sahab, covering more than 2,900 m². The scope included flooring traffic lining coatings, solo coatings, renovation and maintenance. Each step was carried out after a thorough inspection to ensure the solutions could withstand the factory's weather conditions and humidity levels. All work was completed with minimal disruption to the client's operations.
        </p>
      </section>

      <MasonryGrid />

      <section className="px-6 pt-20 pb-15 ml-auto text-left max-w-5xl">
        {/** This project involves the development of a comprehensive logistics
    solution for Expeditors, aimed at optimizing their supply chain
    operations. */}
        <h2 className="text-2xl pb-4 font-medium">On-Site Process</h2>
        <p className="text-lg font-400 leading-relaxed text-gray-500">

        This project involved the development of a comprehensive logistics solution for Expeditors, aimed at optimizing their supply chain operations. To ensure durability under constant industrial use, we prepared the substrates meticulously and selected coating systems that could withstand humidity and temperature fluctuations. Joints and lining paths were aligned precisely to maintain consistency across the factory floor, delivering both long-term performance and a clean, uniform finish.
      </p>
      </section>
      
      <ContactCTA />
      
    </main>
  );
}
