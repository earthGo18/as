import Image from "next/image"
import Link from "next/link"

export default function SoloTravelers() {
  return (
    <div className="w-full h-full flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Heaven for <span className="bg-blue-500 text-white px-2 py-1">SOLO Travelers</span>
          </h2>
          <p className="text-gray-600 mt-2">Solo Travelers' Paradise!</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
          <div className="relative">
            <div className=" rounded-lg p-1">
              <Image
                src="/placeholder.svg?height=250&width=200"
                alt="Solo traveler"
                width={200}
                height={250}
                className="rounded-lg"
              />
            </div>
            <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-2xl font-bold">Connect</div>
          </div>

          <div className="relative">
            <svg viewBox="0 0 100 50" className="w-32 h-16 absolute -top-10 left-1/2 transform -translate-x-1/2">
              <path d="M10,25 Q50,0 90,25" fill="none" stroke="#888" strokeWidth="2" strokeDasharray="5,5" />
              <text x="45" y="10" className="text-sm">
                with
              </text>
            </svg>

            <div className=" rounded-lg p-1">
              <Image
                src="/placeholder.svg?height=250&width=300"
                alt="Group of travelers"
                width={300}
                height={250}
                className="rounded-lg"
              />
            </div>
            <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 text-2xl font-bold">Community</div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="#" className="px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
            Download Now
          </Link>
        </div>
      </div>
    </div>
  )
}
