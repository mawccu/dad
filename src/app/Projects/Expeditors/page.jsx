// app/projects/expeditors/page.jsx
import Image from "next/image";

export default function Expeditors() {
  // If your navbar is fixed, set this to its height to push content below it.
  const NAV_HEIGHT = 80; // px

  return (
    <main className="w-full">
      <div style={{ height: NAV_HEIGHT }} aria-hidden />

      <section className="px-6 pt-32 pb-4">
        <h1 className="text-4xl font-400">Expeditors Project</h1>
      </section>

      <section className="relative w-full h-[90vh]">
        <Image
          src="/medias/placeholder.png"
          alt="Expeditors bathroom project hero"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </section>

      <section className="px-6 py-40 ml-auto text-left max-w-5xl">
        {/** This project involves the development of a comprehensive logistics
    solution for Expeditors, aimed at optimizing their supply chain
    operations. */}
        <h2 className="text-2xl pb-4 font-medium">Comprehensive Surface Coatings and Maintenance for Expeditors Facilities</h2>
        <p className="text-lg font-light leading-relaxed ">
          
          In this renovation of a detached house, we completely redesigned and fitted out 4 bathrooms. The bathroom furniture and fittings are from the Italian design brand Antonio Lupi and high-quality marble or XXL ceramic wall tiles were laid in all rooms. We carried out everything from a single source, from the ripping out to the plastering and screed work to the laying of the natural stone and tiles. We developed the concept together with the customer and selected the matching materials in our showroom.
        </p>
      </section>
    </main>
  );
}
