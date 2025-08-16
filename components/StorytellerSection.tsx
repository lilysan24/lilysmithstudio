import Image from 'next/image'

export default function StorytellerSection() {
  return (
    <section id="storyteller" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 w-full">
        {/* Title with line */}
        <div className="flex items-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light pr-4 sm:pr-6 md:pr-8">Storyteller</h2>
          <div className="flex-1 h-[1px] bg-black"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
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
          <div className="pt-4 sm:pt-6 lg:pt-8">
            <h3 className="text-lg mb-6">01/01</h3>
            <h4 className="text-2xl mb-8 font-light tracking-wide">WRITER | CONTRIBUTOR</h4>

            {/* natural flowing paragraph; width + hyphenation for mobile */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed md:leading-8 max-w-prose sm:max-w-[60ch] hyphens-auto break-words text-balance">
              As a contributing writer for NHN, I share reflections, resources, and stories that support mindful, sustainable
              living. My interest in sustainability spans many years, rooted in a belief that the choices we make every
              day—what we use, how we live, and what we create—shape both our lives and our world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
