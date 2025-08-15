// components/ConnectSection.tsx
import Image from 'next/image'

export default function ConnectSection() {
  return (
    <section id="connect" className="bg-gray-200 py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Title with line */}
        <div className="flex items-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light pr-4 sm:pr-6 md:pr-8">Connect</h2>
          <div className="flex-1 h-[1px] bg-black"></div>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <div className="max-w-2xl">
            <p className="text-lg mb-4">
              <span className="font-semibold">Let&apos;s Connect:</span> Whether you&apos;re seeking a commissioned work, a design collaboration, or a narrative guide, I&apos;d love to hear from you.
            </p>
            <p className="text-lg mt-8">
              lily@lilysmithstudio.com
            </p>
          </div>
          
          {/* Right: Instagram */}
          <div>
            <p className="text-lg mb-6">
              <span className="font-semibold">Stay in touch:</span> follow me on Instagram.
            </p>
            <a 
              href="https://www.instagram.com/lilystudio_ny/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image 
                src="/instagram.svg" 
                alt="Instagram" 
                width={60} 
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}