// components/ForwardArrow.tsx
export default function ForwardArrow({ nextSection }: { nextSection: string }) {
  return (
    <a 
      href={`#${nextSection}`}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-all duration-300 group"
      aria-label={`Go to ${nextSection} section`}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        className="text-gray-700 group-hover:translate-x-0.5 transition-transform"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </a>
  )
}