// app/masonry/page.jsx
import Image from "next/image";

export default function MasonryGrid2() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      {/* Mobile: Single column stack */}
      <div className="grid grid-cols-1 gap-4 h-auto sm:hidden">
        {/* Image 1 */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/tower/5.png"
            alt="Image 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/tower/6.png"
            alt="Image 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Tablet: Single column stack */}
      <div className="hidden sm:grid lg:hidden grid-cols-1 gap-4 h-auto">
        {/* Image 1 */}
        <div className="relative h-[300px]">
          <Image
            src="/medias/tower/5.png"
            alt="Image 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="relative h-[300px]">
          <Image
            src="/medias/tower/6.png"
            alt="Image 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Desktop: Original layout */}
      <div className="hidden lg:grid grid-cols-12 gap-2 h-[50vh]">       
        {/* Image 1 */}
        <div className="col-span-6 relative">
          <Image
            src="/medias/tower/5.png"
            alt="Image 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="col-span-6 relative">
          <Image
            src="/medias/tower/6.png"
            alt="Image 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}