// components/AboutSection.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import CarouselArrow from './CarouselArrow'

export default function AboutSection() {
  const [currentPage, setCurrentPage] = useState(0)

  const handleNext = () => {
    if (currentPage < 2) setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1)
  }

  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 w-full">
        {/* Title with line */}
        <div className="flex items-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light pr-4 sm:pr-6 md:pr-8">About</h2>
          <div className="flex-1 h-[1px] bg-black"></div>
        </div>
        
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {/* Page 1 - Original Quote */}
            <div className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                <div>
                  <div className="relative aspect-[3/4] bg-gray-100 max-w-sm">
                    <Image 
                      src="/images/about-branch.png" 
                      alt="Graphite on Paper - Branch artwork" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-500 mt-4 text-sm">Graphite on Paper</p>
                </div>
                
                <div className="pt-4 sm:pt-6 lg:pt-8">
                  <h3 className="text-lg mb-8">01/03</h3>
                  
                  <blockquote className="text-gray-600 text-xl leading-relaxed italic">
                      &quot;Lily&apos;s expressive paintings
                      and works on paper capture
                      the essence of her subjects
                      in every stroke – whether in
                      portraits, landscapes, or
                      abstract forms.&quot;
                  </blockquote>
                  
                  <p className="text-gray-700 mt-8 text-lg">
                    – <a 
                        href="https://www.terrafineart.com/lisa-wagner/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline decoration-1 underline-offset-2 hover:opacity-70 transition-opacity"
                      >
                        Lisa Wagner
                      </a> | Artist & art scholar
                  </p>
                </div>
              </div>
            </div>

            {/* Page 2 - Fashion Sketches */}
            <div className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="flex gap-4 items-end h-[500px]">
                    <div className="h-full">
                      <Image 
                        src="/images/about-fashion-1.png" 
                        alt="Fashion sketch - geometric dress" 
                        width={300}
                        height={450}
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="h-full">
                      <Image 
                        src="/images/about-fashion-2.png" 
                        alt="Fashion sketch - layered dress" 
                        width={300}
                        height={450}
                        className="h-full w-auto"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 sm:pt-6 lg:pt-8">
                  <h3 className="text-lg mb-6">02/03</h3>
                  <h4 className="text-xl sm:text-xl mb-6 font-light tracking-wide">MULTIDISCIPLINARY ARTIST</h4>
                  <p className="text-gray-700 leading-relaxed text-base">
                    I am a multidisciplinary artist working in painting, fashion / 
                    jewelry design, and narrative. I have painted throughout 
                    my life, alongside a career in brand storytelling and 
                    creative direction. That dual practice has given me 
                    decades of experience in observation, composition, and 
                    the shaping of emotional meaning.
                  </p>
                </div>
              </div>
            </div>

            {/* Page 3 - Portrait */}
            <div className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                <div>
                  <div className="relative aspect-[3/4] bg-gray-100 max-w-sm">
                    <Image 
                      src="/images/about-portrait.png" 
                      alt="Oil painting portrait" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="pt-4 sm:pt-6 lg:pt-8">
                  <h3 className="text-lg mb-6">03/03</h3>
                  <h4 className="text-xl sm:text-xl mb-6 font-light tracking-wide">MULTIDISCIPLINARY ARTIST</h4>
                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                    My paintings—often still lifes and landscapes that shift 
                    toward portraiture—are intuitive and contemplative, 
                    revealing traces of presence that go beyond appearance. 
                    My custom-made jewelry pieces are crafted to hold 
                    personal meaning and are often designed through close 
                    collaboration with the wearer. I also create commissioned 
                    artworks, developing each with a deep attention to the 
                    subject&apos;s essence.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base">
                    I believe the role of art is not to reflect the outward 
                    appearance of things, but to reveal what lies beneath.
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