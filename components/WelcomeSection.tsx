// components/WelcomeSection.tsx
export default function WelcomeSection() {
  return (
    <section id="welcome" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-8 py-20 w-full">
        {/* Title with line - matching other sections */}
        <div className="flex items-center mb-12">
          <h2 className="text-5xl font-light pr-8">Welcome</h2>
          <div className="flex-1 h-[1px] bg-black"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-4xl">
          <p className="text-gray-700 leading-relaxed text-lg font-pt-mono">
            I am a multidisciplinary artist creating in paint, metal, and narrative form. My work moves between 
            canvas, handmade jewelry, and writing—contributing to lived focused on sustainable living with reflections, 
            observations, and stories inspired by nature and shaped by experience.
          </p>
        </div>
      </div>
    </section>
  )
}