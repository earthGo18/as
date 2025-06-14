"use client"

import Image from "next/image"

export default function EarthGoPartnerPage() {
  const handleTravelPartnerClick = () => {
    window.open("https://forms.gle/WewJEgNc8VwgNnTS8/", "_blank")
  }

  const handleStayPartnerClick = () => {
    window.open("https://forms.gle/xdSKWFxgLHzNV6zG8/", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">Partner with</h1>
          <div className="inline-block bg-blue-600 text-white px-8 py-3 text-2xl md:text-3xl font-bold rounded-md shadow-md">
            EarthGo
          </div>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Join us to offer unique travel experiences or stays across India.
          </p>
        </div>

        {/* Partner Options */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Travel Partner Card */}
          <div
            onClick={handleTravelPartnerClick}
            className="group bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all cursor-pointer border border-gray-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 relative rounded-full bg-blue-50 flex items-center justify-center ring-2 ring-blue-600">
                <Image
                  src="/bus.png"
                  alt="Travel Partner"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Travel Partner</h2>
              <p className="text-sm text-gray-500">
                Are you a tour operator or local trip planner? Join EarthGo to reach travelers and grow your bookings.
              </p>
            </div>
          </div>

          {/* Stay Partner Card */}
          <div
            onClick={handleStayPartnerClick}
            className="group bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all cursor-pointer border border-gray-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 relative rounded-full bg-green-50 flex items-center justify-center ring-2 ring-green-600">
                <Image
                  src="/home.png"
                  alt="Stay Partner"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Stay Partner</h2>
              <p className="text-sm text-gray-500">
                Hotels, homestays, or resorts – list with us to start receiving curated travel bookings.
              </p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            EarthGo connects passionate travel providers with a wide network of explorers across India. Whether you plan adventures or host them, we make it easier for you to grow — with zero upfront cost.
          </p>
        </div>
      </div>
    </div>
  )
}
