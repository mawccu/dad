//Services/CustomFlooring/bro.jsx
<div className="py-32">
  <div className="max-w-6xl mx-auto px-4 py-8 text-center">
    <div>
      <h2 className="text-4xl text-gray-1000 font-semibold mb-12">Selected Surface Finishing Projects</h2>
      <p className="text-2xl text-gray-900">Explore more of our carefully curated projects and experience our distinctive and bespoke approach</p>
    </div>
  </div>

  {/* Remove the max-width container for images and use full width */}
  <div className="flex gap-6 mb-16 px-12">
    <div className="relative flex-1 h-[260px] overflow-hidden cursor-pointer" 
      onMouseEnter={() => {
        setIsHovered(true)
        gsap.to(imageRef3.current, {
          scale: 1.1,
          duration: 0.6,
          ease: 'power2.out',
        })
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        gsap.to(imageRef3.current, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        })
      }}
      onClick={() => router.push('/Projects/AbdounBridge')}
    >
      <Image
        src="/medias/placeholder.png"
        fill={true}
        alt="Project Preview"
        ref={imageRef3}
        className="object-cover"
      />
      <div className="absolute inset-0 flex p-4 items-center justify-between flex-col text-white">
        <p className="text-2xl font-bold text-shadow-md">Abdoun Bridge Project</p>
        <p className="text-xl font-semibold text-shadow-md">Legacy-Project: Thorough Surface Coatings</p>
      </div>
    </div>

    <div className="relative flex-1 h-[260px] overflow-hidden cursor-pointer" 
      onMouseEnter={() => {
        setIsHovered(true);
        gsap.to(imageRef4.current, {
          scale: 1.1,
          duration: 0.6,
          ease: 'power2.out',
        })
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        gsap.to(imageRef4.current, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        })
      }}
      onClick={() => router.push('/Projects/Movenpick')}
    >
      <Image
        src="/medias/placeholder.png"
        fill={true}
        alt="Project Preview"
        ref={imageRef4}
        className="object-cover"
      />
      <div className="absolute p-4 inset-0 flex items-center justify-between flex-col text-white">
        <p className="text-2xl font-bold text-shadow-md">Mövenpick Hotels & Resorts</p>
        <p className="text-xl text-shadow-md font-semibold">Interior Kitchen Flooring</p>
      </div>
    </div>
    
    <div className="relative flex-1 h-[260px] overflow-hidden cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        gsap.to(imageRef5.current, {
          scale: 1.1,
          duration: 0.6,
          ease: 'power2.out',
        })
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        gsap.to(imageRef5.current, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        })
      }}
      onClick={() => router.push('/Projects/Villa-01')}
    >
      <Image
        src="/medias/placeholder.png"
        fill={true}
        alt="Project Preview"
        ref={imageRef5}
        className="object-cover"
      />
      <div className="absolute p-4 inset-0 flex items-center justify-between flex-col text-white">
        <p className="text-2xl font-bold text-shadow-md">Luxury Villa 01</p>
        <p className="text-xl text-shadow-md font-semibold">Interior Surface Coating</p>
      </div>
    </div>
  </div>
</div>