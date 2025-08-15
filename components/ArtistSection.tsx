// components/ArtistSection.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import CarouselArrow from './CarouselArrow'

export default function ArtistSection() {
  const [currentPage, setCurrentPage] = useState(0)

  const handleNext = () => {
    if (currentPage < 2) setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1)
  }

  return (
    <section id="artist" className="min-h-screen flex items-center bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 w-full">
        {/* Title with line - stays fixed */}
        <div className="flex items-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light pr-4 sm:pr-6 md:pr-8">Artist</h2>
          <div className="flex-1 h-[1px] bg-black"></div>
        </div>
        
        {/* Carousel Container with overflow hidden */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {/* Page 1 - Original */}
            <div className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                <div>
                  <div className="relative aspect-square bg-gray-100">
                    <Image 
                      src="/images/artist-portrait.png" 
                      alt="Ink Wash on Paper artwork" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-500 mt-4 text-sm">Ink Wash</p>
                </div>
                
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

            {/* Page 2 - Two Portraits */}
            <div className="w-full flex-shrink-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-8 items-start">
                <div className="lg:col-span-2">
                <div className="flex gap-4 items-end h-[400px]"> {/* Fixed height container */}
                    <div className="h-full">
                    <Image 
                        src="/images/artist-portrait-2.png" 
                        alt="Oil on Canvas - Portrait 1" 
                        width={500}
                        height={600}
                        className="h-full w-auto"
                    />
                    </div>
                    <div className="h-full">
                    <Image 
                        src="/images/artist-portrait-3.png" 
                        alt="Oil on Canvas - Portrait 2" 
                        width={500}
                        height={600}
                        className="h-full w-auto"
                    />
                    </div>
                </div>
                <p className="text-gray-500 mt-4 text-sm">Oil on Canvas</p>
                </div>
                
                <div className="pt-4 sm:pt-6 lg:pt-8">
                <h3 className="text-lg mb-6">02/03</h3>
                <h4 className="text-xl sm:text-xl mb-6 font-light tracking-wide">OIL ON CANVAS</h4>
                <p className="text-gray-700 leading-relaxed text-base">
                    Expressive portraits capturing the essence of subjects
                    through bold brushwork and vibrant color palettes.
                </p>
                </div>
            </div>
            </div>
            {/* Page 3 - Pears Series */}
            <div className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="flex gap-2">
                    <div className="relative flex-1 aspect-square bg-gray-100">
                      <Image 
                        src="/images/artist-pear-1.png" 
                        alt="Pairs Series - Pear 1" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="relative flex-1 aspect-square bg-gray-100">
                      <Image 
                        src="/images/artist-pear-2.png" 
                        alt="Pairs Series - Pear 2" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="relative flex-1 aspect-square bg-gray-100">
                      <Image 
                        src="/images/artist-pear-3.png" 
                        alt="Pairs Series - Pear 3" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-gray-500 mt-4 text-sm">Oil on Canvas | &quot;Pairs&quot; Series</p>
                </div>
                
                <div className="pt-4 sm:pt-6 lg:pt-8">
                  <h3 className="text-lg mb-6">03/03</h3>
                  <h4 className="text-xl sm:text-xl mb-6 font-light tracking-wide">&quot;PAIRS&quot; SERIES</h4>
                  <p className="text-gray-700 leading-relaxed text-base">
                    A study in form and light, exploring the simple beauty
                    of paired objects and their interplay with shadow and
                    reflection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <CarouselArrow 
        direction="left" 
        onClick={handlePrev}
        disabled={currentPage === 0}
      />
      <CarouselArrow 
        direction="right" 
        onClick={handleNext}
        disabled={currentPage === 2}
      />
    </section>
  )
}