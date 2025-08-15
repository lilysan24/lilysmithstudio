// components/Navigation.tsx
'use client'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const sections = ['artist', 'designer', 'storyteller', 'about', 'connect']
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const navLinkClass = (section: string) => 
    `text-sm tracking-wider hover:opacity-70 transition-all duration-200 ${
      activeSection === section 
        ? 'font-bold text-black' 
        : 'font-semibold text-black'
    }`

  const mobileNavLinkClass = (section: string) => 
    `block py-3 text-lg tracking-wider hover:opacity-70 transition-all duration-200 ${
      activeSection === section 
        ? 'font-bold text-black' 
        : 'font-semibold text-black'
    }`

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-4 sm:px-8 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo — matches Figma exactly */}
        <div className="leading-none font-helvetica-neue">
        {/* LILY SMITH — Helvetica Neue Bold 38px, 0% letter-spacing */}
        <div className="text-[38px] font-bold tracking-[0]">LILY SMITH</div>

        {/* STUDIO — Helvetica Neue 45 Light 40px, 25% letter-spacing */}
        <div className="text-[40px] font-light tracking-[0.25em]">STUDIO</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <a href="#artist" className={navLinkClass('artist')}>artist</a>
          <a href="#designer" className={navLinkClass('designer')}>designer</a>
          <a href="#storyteller" className={navLinkClass('storyteller')}>storyteller</a>
          <a href="#about" className={navLinkClass('about')}>about</a>
          <a href="#connect" className={navLinkClass('connect')}>connect</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-t border-gray-200 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-4 py-6">
          <a href="#artist" className={mobileNavLinkClass('artist')} onClick={handleMobileNavClick}>artist</a>
          <a href="#designer" className={mobileNavLinkClass('designer')} onClick={handleMobileNavClick}>designer</a>
          <a href="#storyteller" className={mobileNavLinkClass('storyteller')} onClick={handleMobileNavClick}>storyteller</a>
          <a href="#about" className={mobileNavLinkClass('about')} onClick={handleMobileNavClick}>about</a>
          <a href="#connect" className={mobileNavLinkClass('connect')} onClick={handleMobileNavClick}>connect</a>
        </div>
      </div>
    </nav>
  )
}