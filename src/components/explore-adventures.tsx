import Image from "next/image"
import Link from "next/link"

export default function ExploreAdventures() {
  return (
    <div id='about' className="w-full h-full flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div>
              <span className="text-4xl md:text-5xl font-bold">
                <span className="bg-blue-500 text-white px-2 py-1 rounded">Explore</span> and
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">find Adventures Trips</h2>
            <p className="text-gray-600 mb-8 max-w-md">Discover, Connect, and Experience with EarthGo!</p>

            <Link href="#" className="px-8 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Download Now
            </Link>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Mountain sunset"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Mountain view"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Adventure traveler"
              width={200}
              height={200}
              className="rounded-lg col-span-2 mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
