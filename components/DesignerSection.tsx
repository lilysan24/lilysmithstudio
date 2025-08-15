// components/DesignerSection.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import CarouselArrow from './CarouselArrow'

export default function DesignerSection() {
  const [currentPage, setCurrentPage] = useState(0)

  const handleNext = () => {
    if (currentPage < 2) setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1)
  }

  return (
    <section id="designer" className="min-h-screen flex items-center bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 w-full">
        {/* Title with line */}
        <div className="flex items-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light pr-4 sm:pr-6 md:pr-8">Designer</h2>
          <div className="flex-1 h-[1px] bg-black"></div>
        </div>
        
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {/* Page 1 - Original Jewelry */}
            <div className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                <div className="relative aspect-[4/3]">
                  <Image 
                    src="/images/designer-jewelry.png" 
                    alt="Handmade jewelry with portrait" 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <div className="pt-4 sm:pt-6 lg:pt-8">
                  <h3 className="text-lg mb-6">01/03</h3>
                  <h4 className="text-2xl mb-8 font-light tracking-wide">HANDMADE JEWELRY</h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Custom and limited-edition jewelry—designed for form,<br/>
                    story, and wearability. Commissioned pieces accepted.
                  </p>
                </div>
              </div>
            </div>

            {/* Page 2 - Bracelet Photos */}
            <div className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="flex gap-4">
                    <div className="relative flex-1 aspect-[3/4] bg-gray-100">
                      <Image 
                        src="/images/designer-bracelet-1.png" 
                        alt="Handmade bracelet worn" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="relative flex-1 aspect-[3/4] bg-gray-100">
                      <Image 
                        src="/images/designer-bracelet-2.png" 
                        alt="Handmade bracelet detail" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 sm:pt-6 lg:pt-8">
                  <h3 className="text-lg mb-6">02/03</h3>
                  <h4 className="text-xl sm:text-xl mb-6 font-light tracking-wide">STATEMENT PIECES</h4>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Bold, architectural designs that blend traditional
                    metalworking with contemporary aesthetics.
                  </p>
                </div>
              </div>
            </div>

            {/* Page 3 - Geometric Necklaces */}
            <div className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="flex gap-4">
                    <div className="relative flex-1 aspect-[3/4] bg-gray-100">
                      <Image 
                        src="/images/designer-necklace-1.png" 
                        alt="Geometric necklace design 1" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="relative flex-1 aspect-[3/4] bg-gray-100">
                      <Image 
                        src="/images/designer-necklace-2.png" 
                        alt="Geometric necklace design 2" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 sm:pt-6 lg:pt-8">
                  <h3 className="text-lg mb-6">03/03</h3>
                  <h4 className="text-xl sm:text-xl mb-6 font-light tracking-wide">GEOMETRIC SERIES</h4>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Sculptural pieces inspired by natural forms and
                    mathematical patterns, crafted in sterling silver.
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