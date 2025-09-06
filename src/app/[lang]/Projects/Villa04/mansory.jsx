// app/masonry/page.jsx
import Image from "next/image";

export default function MasonryGrid() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      {/* Mobile: Single column stack */}
      <div className="grid grid-cols-1 gap-4 h-auto sm:hidden">
        {/* Image 1 */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/villa/3.png"
            alt="Image 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/villa/111.png"
            alt="Image 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Tablet: 2x1 grid (since only 2 images) */}
      <div className="hidden sm:grid lg:hidden grid-cols-2 gap-3 h-[50vh]">
        {/* Image 1 */}
        <div className="relative">
          <Image
            src="/medias/villa/3.png"
            alt="Image 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="relative">
          <Image
            src="/medias/villa/111.png"
            alt="Image 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Desktop: Original complex grid (UNCHANGED) */}
      <div className="hidden lg:grid grid-cols-12 gap-2 h-[50vh]">
        {/* Image 1 - wider */}
        <div className="col-span-5 relative">
          <Image
            src="/medias/villa/3.png"
            alt="Image 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="col-span-7 relative">
          <Image
            src="/medias/villa/111.png"
            alt="Image 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
