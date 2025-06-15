import Image from "next/image";
import Link from "next/link";

export default function SoloTravelers() {
  return (
    <div className="w-full min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Heaven for <span style={{ backgroundColor: "#538ab4" }} className=" text-white px-3 py-1 rounded-md shadow-md">SOLO Travelers</span>
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover a world of adventure and connection tailored for solo explorers!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative">
          <div className="relative group">
            <div className="rounded-xl p-2 bg-white shadow-lg transform group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/jungle.jpeg?height=250&width=200"
                alt="Solo traveler in jungle"
                width={200}
                height={250}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="text-center mt-4 text-2xl font-bold text-blue-600">
              Connect
            </div>
          </div>

          <div className="relative group">
            <div className="rounded-xl p-2 bg-white shadow-lg transform group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/WhatsApp Image 2025-06-14 at 4.33.47 PM (1).jpeg?height=250&width=300"
                alt="Group of travelers"
                width={300}
                height={250}
                className="rounded-xl object-cover"
              />
            </div>
            <div style={{ color: "#538ab4" }} className="text-center mt-4 text-2xl font-bold ">
              Community
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="#" style={{ backgroundColor: "#538ab4" }}
            className="px-8 py-4  text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
          >
            Download Now
          </Link>
        </div>
      </div>
    </div>
  );
}