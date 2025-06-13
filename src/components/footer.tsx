import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer id="ai" className="bg-white ">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="relative h-10 w-32">
              <div className="font-bold text-2xl">
                Earth<span className="font-normal">Go</span> 🌎
              </div>
              <div className="text-xs text-gray-500">Explore. Connect. Experience.</div>
            </div>
          </div>

          <nav className="flex space-x-8 mb-4 md:mb-0">
            <Link href="#" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link href="#trips" className="text-gray-800 hover:text-gray-600">
              Trips
            </Link>
            <Link href="#community" className="text-gray-800 hover:text-gray-600">
              Community
            </Link>
          </nav>

          <div className="flex space-x-4">
            <Link href="#" className="text-gray-800 hover:text-gray-600">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-600">
          <p>© 2024. All Rights Reserved.</p>
          <p className="text-xs">Terms & Condition</p>
        </div>
      </div>
    </footer>
  )
}
