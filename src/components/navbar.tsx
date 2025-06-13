"use client"
import Image from "next/image"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Bell } from "lucide-react"


export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-blue-200 z-50 transition-transform duration-300 ${
        isVisible || isHovering ? "translate-y-0" : "-translate-y-full"
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between  items-center">
        <div className="flex items-center">
            <Image src="/logo@1.png?height=160&width=160" 
            alt="LOGO"
             width={160} height={160} className="mr-2" />
        </div>

        <nav className="hidden md:flex items-auto space-x-12">
          <Link href="#about" className="text-gray-800 hover:text-gray-600">
          About
          </Link>
          <Link href="#trips" className="text-gray-800 hover:text-gray-600">
            Trips
          </Link>
          <Link href="#ai" className="text-gray-800 hover:text-gray-600">
            AI
          </Link>
          <Link href="#community" className="text-gray-800 hover:text-gray-600">
            Community
          </Link>
        </nav>

        <div className="flex items-center space-x-4 " style = {{ visibility: 'hidden' }}>
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
