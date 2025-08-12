// components/StorytellerSection.tsx
import Image from 'next/image'

export default function StorytellerSection() {
  return (
    <section id="storyteller" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-8 py-20 w-full">
        {/* Title with line */}
        <div className="flex items-center mb-12">
          <h2 className="text-5xl font-light pr-8">Storyteller</h2>
          <div className="flex-1 h-[1px] bg-black"></div>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Website Screenshot */}
          <div className="relative aspect-[4/3] bg-gray-100 shadow-lg">
            <Image 
              src="/images/storyteller-nine-human-needs.png" 
              alt="Nine Human Needs website" 
              fill 
              className="object-cover"
            />
          </div>
          
          {/* Right: Text Content */}
          <div className="pt-8">
            <h3 className="text-lg mb-6">01/01</h3>
            <h4 className="text-2xl mb-8 font-light tracking-wide">WRITER | CONTRIBUTOR</h4>
            <p className="text-gray-700 leading-relaxed text-lg">
              As a contributing writer for NHN, I share<br/>
              reflections, resources, and stories that support<br/>
              mindful, sustainable living. My interest in<br/>
              sustainability spans many years, rooted in a belief<br/>
              that the choices we make every day—what we use, how<br/>
              we live, and what we create—shape both our lives and<br/>
              our world.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}