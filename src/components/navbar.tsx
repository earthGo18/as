"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Bell } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo@1.png?height=160&width=160"
            alt="LOGO"
            width={160}
            height={160}
            className="mr-2"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-12">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-800 hover:text-gray-600"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('trips')}
            className="text-gray-800 hover:text-gray-600"
          >
            Trips
          </button>
          <button 
            onClick={() => scrollToSection('ai')}
            className="text-gray-800 hover:text-gray-600"
          >
            AI
          </button>
          <button 
            onClick={() => scrollToSection('community')}
            className="text-gray-800 hover:text-gray-600"
          >
            Community
          </button>
        </nav>

        <div className="flex items-center space-x-4" style={{ visibility: 'hidden' }}>
          <button aria-label="Search">
            <Search className="h-5 w-5 text-gray-800" />
          </button>
          <button aria-label="Notifications">
            <Bell className="h-5 w-5 text-gray-800" />
          </button>
        </div>
      </div>
    </header>
  )
}