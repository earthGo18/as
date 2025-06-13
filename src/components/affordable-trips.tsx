import Image from "next/image"
import Link from "next/link"

export default function AffordableTrips() {
  const trips = [
    {
      id: 1,
      name: "Manali",
      image: "/mananli.jpeg?height=200&width=200",
      price: "Starting from INR - 5999",
    },
    {
      id: 2,
      name: "Goa",
      image: "/Goa.jpeg?height=200&width=200",
      price: "Starting from INR - 5999",
    },
    {
      id: 3,
      name: "Kashmir",
      image: "/kashmir.jpeg?height=200&width=200",
      price: "Starting from INR - 10,000",
    },
    {
      id: 4,
      name: "Jungle Safari",
      image: "/jungle.jpeg?height=200&width=200",
      price: "Starting from INR - 10,000",
    },
  ]

  return (
    <div id= "trips" className="w-full h-full flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-4xl font-bold">
            Book your <span className="bg-green-400 text-white px-2 py-1">Affordable Trips</span>
          </h2>
          <Link href="#" className="text-sm">
            See all &gt;
          </Link>
        </div>

        <p className="text-gray-600 mb-8">Book your budget-friendly trips and travel without limits</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <div key={trip.id} className="rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image src={trip.image || "/placeholder.svg"} alt={trip.name} fill className="object-cover" />
              </div>
              <div className="p-2">
                <h3 className="font-bold text-lg">{trip.name}</h3>
                <p className="text-sm text-gray-600">{trip.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
