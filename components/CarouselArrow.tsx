// components/CarouselArrow.tsx
interface CarouselArrowProps {
  direction: 'left' | 'right'
  onClick: () => void
  disabled?: boolean
}

export default function CarouselArrow({ direction, onClick, disabled = false }: CarouselArrowProps) {
  if (disabled) return null
  
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-all duration-300 group ${
        direction === 'left' ? 'left-8' : 'right-8'
      }`}
      aria-label={`Navigate ${direction}`}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        className={`text-gray-700 transition-transform ${
          direction === 'left' 
            ? 'group-hover:-translate-x-0.5 rotate-180' 
            : 'group-hover:translate-x-0.5'
        }`}
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  )
}