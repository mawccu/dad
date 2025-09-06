// app/masonry/page.jsx
import Image from "next/image";

export default function MasonryGrid() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      {/* Mobile: Single column stack */}
      <div className="grid grid-cols-1 gap-4 h-auto sm:hidden">
        {/* Kitchen Epoxy Image */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/movenpick/1.png"
            alt="Kitchen Epoxy Flooring"
            fill
            className="object-cover rounded-lg object-top"
          />
        </div>

        {/* Solarium Epoxy Image */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/movenpick/2.png"
            alt="Solarium Epoxy Coating"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Rooftop Membrane Image */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/movenpick/3.png"
            alt="Rooftop Waterproofing"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Plant Containers Image */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/movenpick/4.png"
            alt="Waterproofed Plant Containers"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Tablet: 2x2 grid */}
      <div className="hidden sm:grid lg:hidden grid-cols-2 gap-3 h-[70vh]">
        {/* Kitchen Epoxy Image */}
        <div className="relative">
          <Image
            src="/medias/movenpick/1.png"
            alt="Kitchen Epoxy Flooring"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Solarium Epoxy Image */}
        <div className="relative">
          <Image
            src="/medias/movenpick/2.png"
            alt="Solarium Epoxy Coating"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Rooftop Membrane Image */}
        <div className="relative">
          <Image
            src="/medias/movenpick/3.png"
            alt="Rooftop Waterproofing"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Plant Containers Image */}
        <div className="relative">
          <Image
            src="/medias/movenpick/4.png"
            alt="Waterproofed Plant Containers"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Desktop: Original complex grid (UNCHANGED) */}
      <div className="hidden lg:grid grid-cols-12 gap-2 h-[100vh]">
        {/* Kitchen Epoxy - wider */}
        <div className="col-span-5 relative">
          <Image
            src="/medias/movenpick/1.png"
            alt="Kitchen Epoxy Flooring"
            fill
            className="object-cover rounded-lg object-bottom"
          />
        </div>

        {/* Solarium Epoxy */}
        <div className="col-span-7 relative">
          <Image
            src="/medias/movenpick/2.png"
            alt="Solarium Epoxy Coating"
            fill
            className="object-cover rounded-lg object-bottom"
          />
        </div>

        {/* Rooftop Membrane */}
        <div className="col-span-7 relative">
          <Image
            src="/medias/movenpick/3.png"
            alt="Rooftop Waterproofing"
            fill
            className="object-cover rounded-lg object-bottom"
          />
        </div>

        {/* Plant Containers - takes the rest */}
        <div className="col-span-5 relative">
          <Image
            src="/medias/movenpick/4.png"
            alt="Waterproofed Plant Containers"
            fill
            className="object-cover rounded-lg object-bottom"
          />
        </div>
      </div>
    </main>
  );
}
