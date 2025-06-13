import Image from "next/image";
import Link from "next/link";

export default function JoinCommunity() {
  return (
    <div id="community" className="w-full min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Join the
              <span className="bg-blue-600 text-white px-3 py-1 ml-2 rounded-md shadow-md">EarthGo</span> Community!
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-md">
              Connect with a vibrant community of travelers, share adventures, and explore the world together!
            </p>
            <Link
              href="#"
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
            >
              Download Now
            </Link>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-6 relative">
            <div className="group">
              <Image
                src="/1.jpeg?height=200&width=200"
                alt="Hiking adventure"
                width={200}
                height={200}
                className="rounded-2xl object-cover shadow-lg transform group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 border border-blue-100"
              />
            </div>
            <div className="group mt-10">
              <Image
                src="/2.jpeg?height=200&width=200"
                alt="Skydiving adventure"
                width={200}
                height={200}
                className="rounded-2xl object-cover shadow-lg transform group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 border border-blue-100"
              />
            </div>
            <div className="group col-span-2 mt-6 mx-auto">
              <Image
                src="/jungle.jpeg?height=200&width=200"
                alt="Diving adventure"
                width={320}
                height={200}
                className="rounded-2xl object-cover shadow-lg transform group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 border border-blue-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}