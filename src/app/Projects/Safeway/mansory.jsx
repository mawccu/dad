// app/masonry/page.jsx
import Image from "next/image";

export default function MasonryGrid() {
  return (
    <main className="px-8 py-10">
      <div className="grid grid-cols-12 gap-2 h-[100vh]">
        {/* Image 1 - wider */}
        <div className="col-span-5 relative">
          <Image
            src="/medias/img1.jpg"
            alt="Image 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="col-span-7 relative">
          <Image
            src="/medias/img2.jpg"
            alt="Image 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="col-span-8 relative">
          <Image
            src="/medias/img3.jpg"
            alt="Image 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Image 4 - takes the rest */}
        <div className="col-span-4 relative">
          <Image
            src="/medias/img4.jpg"
            alt="Image 4"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
