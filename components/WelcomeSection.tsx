// components/WelcomeSection.tsx
export default function WelcomeSection() {
  return (
    <section id="welcome" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 w-full">
        {/* Title with line - matching other sections */}
        <div className="flex items-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light pr-4 sm:pr-6 md:pr-8">Welcome</h2>
          <div className="flex-1 h-[1px] bg-black"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-4xl">
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-pt-mono">
            I am a multidisciplinary artist creating in paint, metal, and narrative form. My work moves between 
            canvas, handmade jewelry, and writing—contributing to lived focused on sustainable living with reflections, 
            observations, and stories inspired by nature and shaped by experience.
          </p>
        </div>
      </div>
    </section>
  )
}