// components/ArtistSection.tsx
import Image from 'next/image'

export default function ArtistSection() {
  return (
    <section id="artist" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-8 py-20 w-full">
        {/* Title with line */}
        <div className="flex items-center mb-12">
          <h2 className="text-5xl font-light pr-8">Artist</h2>
          <div className="flex-1 h-[1px] bg-black"></div>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
          <div className="pt-8">
            <h3 className="text-lg mb-6">01/03</h3>
            <h4 className="text-2xl mb-8 font-light tracking-wide">INK WASH ON PAPER</h4>
            <p className="text-gray-700 leading-relaxed text-lg">
              Works in oil, acrylic, and mixed media—grounded<br/>
              in emotional geometry, memory, and light.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              Available for commissioned pieces.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}