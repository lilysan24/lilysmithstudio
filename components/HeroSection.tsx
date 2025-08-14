// components/HeroSection.tsx
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 sm:px-8">
      {/* Background Image */}
      <Image
        src="/images/hero-background.png"
        alt="Artist studio background"
        fill
        className="object-cover"
        priority
        quality={100}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-light tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.18em] xl:tracking-[0.2em]">
          {/* Mobile only: Stack vertically */}
          <div className="flex flex-col md:hidden space-y-2">
            <span className="text-white">ARTIST</span>
            <span className="text-white">DESIGNER</span>
            <span className="text-[#4B4B4B]">STORYTELLER</span>
          </div>
          
          {/* Tablet and Desktop: Horizontal layout */}
          <div className="hidden md:block whitespace-nowrap">
            <span className="text-white">ARTIST</span>
            <span className="text-white mx-2 lg:mx-3 xl:mx-4 2xl:mx-6">|</span>
            <span className="text-white">DESIGNER</span>
            <span className="text-white mx-2 lg:mx-3 xl:mx-4 2xl:mx-6">|</span>
            <span className="text-[#4B4B4B]">STORYTELLER</span>
          </div>
        </h1>
      </div>
    </section>
  )
}