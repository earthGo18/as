import Image from "next/image";
import Link from "next/link";

export default function ExploreAdventures() {
  return (
    <div id="about" className="w-full min-h-screen flex items-center bg-white pt-16 md:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="space-y-4">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span  style={{ backgroundColor: "#538ab4" }} className=" text-white px-2 py-1 rounded">Explore</span> and
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Find Adventure Trips</h2>
            </div>
            <p className="text-gray-600 mt-4 mb-6 max-w-md text-base sm:text-lg">
              Discover, Connect, and Experience with EarthGo!
            </p>
            <Link
              href="#"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm sm:text-base font-medium"
            >
              Download Now
            </Link>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="col-span-2">
                <Image
                  src="/grpofpeople.jpeg?height=300&width=400"
                  alt="Main adventure scene"
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto object-cover shadow-lg"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/1.jpeg?height=150&width=150"
                  alt="Mountain sunset"
                  width={150}
                  height={150}
                  className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/2.jpeg?height=150&width=150"
                  alt="Mountain view"
                  width={150}
                  height={150}
                  className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/3.jpeg?height=150&width=150"
                  alt="Adventure traveler"
                  width={150}
                  height={150}
                  className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/1.jpeg?height=150&width=150"
                  alt="Nature exploration"
                  width={150}
                  height={150}
                  className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}