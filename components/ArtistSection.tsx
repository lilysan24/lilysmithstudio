// components/ArtistSection.tsx
import Image from 'next/image'

export default function ArtistSection() {
  return (
    <section id="artist" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 w-full">
        {/* Title with line */}
        <div className="flex items-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light pr-4 sm:pr-6 md:pr-8">Artist</h2>
          <div className="flex-1 h-[1px] bg-black"></div>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <div>
            <div className="relative aspect-square bg-gray-100">
              <Image 
                src="/images/artist-portrait.png" 
                alt="Graphite on Paper artwork" 
                fill 
                className="object-cover"
              />
            </div>
            <p className="text-gray-500 mt-4 text-sm">Graphite on Paper</p>
          </div>
          
          {/* Right: Text Content */}
          <div className="pt-4 sm:pt-6 lg:pt-8">
            <h3 className="text-lg mb-6">01/03</h3>
            <h4 className="text-xl sm:text-2xl mb-6 sm:mb-8 font-light tracking-wide">INK WASH ON PAPER</h4>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Works in oil, acrylic, and mixed media—grounded
              in emotional geometry, memory, and light.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg mt-4 sm:mt-6">
              Available for commissioned pieces.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}