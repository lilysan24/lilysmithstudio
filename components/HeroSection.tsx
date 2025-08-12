// components/HeroSection.tsx
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center">
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
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-light tracking-[0.2em]">
          <span className="text-white">ARTIST</span>
          <span className="text-white mx-6">|</span>
          <span className="text-white">DESIGNER</span>
          <span className="text-white mx-6">|</span>
          <span className="text-[#4B4B4B]">STORYTELLER</span>
        </h1>
      </div>
    </section>
  )
}