// app/masonry/page.jsx
import Image from "next/image";

export default function MasonryGrid() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      {/* Mobile: Single column stack */}
      <div className="grid grid-cols-1 gap-4 h-auto sm:hidden">
        {/* Large-Scale Warehouse Image */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/safeway/2.png"
            alt="Large-Scale Epoxy Flooring - Warehouse"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Process/Application Image */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/safeway/21.png"
            alt="Epoxy Application Process"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Tablet: 1x2 horizontal layout */}
      <div className="hidden sm:grid lg:hidden grid-cols-2 gap-3 h-[50vh]">
        {/* Large-Scale Warehouse Image */}
        <div className="relative">
          <Image
            src="/medias/safeway/2.png"
            alt="Large-Scale Epoxy Flooring - Warehouse"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Process/Application Image */}
        <div className="relative">
          <Image
            src="/medias/safeway/21.png"
            alt="Epoxy Application Process"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Desktop: Original 2-image grid (UNCHANGED) */}
      <div className="hidden lg:grid grid-cols-12 gap-2 h-[50vh]">
        {/* Large-Scale Warehouse - wider */}
        <div className="col-span-7 relative">
          <Image
            src="/medias/safeway/2.png"
            alt="Large-Scale Epoxy Flooring - Warehouse"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Process/Application - narrower */}
        <div className="col-span-5 relative">
          <Image
            src="/medias/safeway/21.png"
            alt="Epoxy Application Process"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
