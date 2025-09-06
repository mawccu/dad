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
            src="/medias/abdounbridge/dd.jpg"
            alt="Image 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/abdounbridge/4.png"
            alt="Image 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/abdounbridge/2.png"
            alt="Image 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 4 */}
        <div className="relative h-[250px]">
          <Image
            src="/medias/abdounbridge/1111.png"
            alt="Image 4"
            fill
            className="object-cover rounded-lg object-top"
          />
        </div>
      </div>

      {/* Tablet: 2x2 grid */}
      <div className="hidden sm:grid lg:hidden grid-cols-2 gap-3 h-[70vh]">
        {/* Image 1 */}
        <div className="relative">
          <Image
            src="/medias/abdounbridge/dd.jpg"
            alt="Image 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="relative">
          <Image
            src="/medias/abdounbridge/4.png"
            alt="Image 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="relative">
          <Image
            src="/medias/abdounbridge/2.png"
            alt="Image 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 4 */}
        <div className="relative">
          <Image
            src="/medias/abdounbridge/1111.png"
            alt="Image 4"
            fill
            className="object-cover rounded-lg object-top"
          />
        </div>
      </div>

      {/* Desktop: Original complex grid */}
      <div className="hidden lg:grid grid-cols-12 grid-rows-2 gap-2 h-[100vh]">
        {/* Image 1 - wider */}
        <div className="col-span-2 row-span-1 relative">
          <Image
            src="/medias/abdounbridge/dd.jpg"
            alt="Image 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="col-span-7 row-span-1 relative">
          <Image
            src="/medias/abdounbridge/4.png"
            alt="Image 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 3 - spans both rows */}
        <div className="col-span-3 row-span-2 relative">
          <Image
            src="/medias/abdounbridge/2.png"
            alt="Image 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 4 - second row, right of image 3 */}
        <div className="col-span-9 row-start-2 col-start-1 relative">
          <Image
            src="/medias/abdounbridge/1111.png"
            alt="Image 4"
            fill
            className="object-cover rounded-lg object-top"
          />
        </div>
      </div>
    </main>
  );
}