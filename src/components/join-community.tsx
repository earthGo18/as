import Image from "next/image"
import Link from "next/link"

export default function JoinCommunity() {
  return (
    <div id = "community" className="w-full h-full flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-32 mb-4">
                <div className="font-bold text-2xl">
                  Earth<span className="font-normal">Go</span> 🌎
                </div>
                <div className="text-xs text-gray-500">Explore. Connect. Experience.</div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Join the
              <span className="bg-green-400 text-white px-2 py-1 ml-2">EarthGo</span> Community!
            </h2>

            <p className="text-gray-600 mb-8 max-w-md">
              Join a vibrant community of travelers connect, share, and explore the world together!
            </p>

            <Link href="#" className="px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
              Download Now
            </Link>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4 relative">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Hiking adventure"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Skydiving adventure"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Diving adventure"
              width={200}
              height={200}
              className="rounded-lg col-span-2 mt-4 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
