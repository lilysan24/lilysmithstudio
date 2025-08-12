// components/Navigation.tsx
'use client'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')

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

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-inter">
          <div className="text-sm font-extrabold tracking-wider">LILY SMITH</div>
          <div className="text-sm font-normal tracking-wider">STUDIO</div>
        </div>
        <div className="flex space-x-8">
          <a href="#artist" className={navLinkClass('artist')}>artist</a>
          <a href="#designer" className={navLinkClass('designer')}>designer</a>
          <a href="#storyteller" className={navLinkClass('storyteller')}>storyteller</a>
          <a href="#about" className={navLinkClass('about')}>about</a>
          <a href="#connect" className={navLinkClass('connect')}>connect</a>
        </div>
      </div>
    </nav>
  )
}