// components/DesignerSection.tsx
import Image from 'next/image'

export default function DesignerSection() {
  return (
    <section id="designer" className="min-h-screen flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 w-full">
        {/* Title with line */}
        <div className="flex items-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light pr-4 sm:pr-6 md:pr-8">Designer</h2>
          <div className="flex-1 h-[1px] bg-black"></div>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <div className="relative aspect-[4/3]">
            <Image 
              src="/images/designer-jewelry.png" 
              alt="Handmade jewelry with portrait" 
              fill 
              className="object-cover"
            />
          </div>
          
          {/* Right: Text Content */}
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
    </section>
  )
}