// components/AboutSection.tsx
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-20 w-full">
        {/* Title with line */}
        <div className="flex items-center mb-12">
          <h2 className="text-5xl font-light pr-8">About</h2>
          <div className="flex-1 h-[1px] bg-black"></div>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <div>
            <div className="relative aspect-[3/4] bg-gray-100">
              <Image 
                src="/images/about-branch.png" 
                alt="Graphite on Paper - Branch artwork" 
                fill 
                className="object-cover"
              />
            </div>
            <p className="text-gray-500 mt-4 text-sm">Graphite on Paper</p>
          </div>
          
          {/* Right: Testimonial */}
          <div className="pt-8">
            <h3 className="text-lg mb-8">01/03</h3>
            
            <blockquote className="text-gray-600 text-xl leading-relaxed italic">
                &quot;Lily&apos;s expressive paintings<br/>
                and works on paper capture<br/>
                the essence of her subjects<br/>
                in every stroke – whether in<br/>
                portraits, landscapes, or<br/>
                abstract forms.&quot;
            </blockquote>
            
            <p className="text-gray-700 mt-8 text-lg">
              – Lisa Wagner | Artist & art scholar
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}