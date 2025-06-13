
'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"

const cities = [
  "Manali", "Shimla", "Ooty", "Coorg", "Munnar", "Pahalgam", "Gulmarg", "Srinagar", "Shillong",
  "Cherrapunji", "Darjeeling", "Gangtok", "Tawang", "Mount Abu", "Kodaikanal", "Lonavala", "Mahabaleshwar",
  "Puducherry", "Goa", "Udaipur", "Jaipur", "Jaisalmer", "Rishikesh", "Haridwar", "Varanasi", "Agra",
  "Delhi", "Amritsar", "Dalhousie", "Mussoorie", "Nainital", "Leh", "Kargil", "Spiti", "Auli", "Meghalaya",
  "Kolkata", "Bangalore", "Mumbai", "Chennai", "Hyderabad", "Lucknow", "Bhopal", "Ahmedabad", "Indore",
  "Ranchi", "Raipur", "Bhubaneswar", "Guwahati", "Imphal", "Itanagar", "Dispur", "Panaji",
]

export default function HeroSection() {
  const [weather, setWeather] = useState({
    city: "Sample City",
    temp: 0,
    description: "clear sky",
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const randomCity = cities[Math.floor(Math.random() * cities.length)]
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY // Use environment variable
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${randomCity},IN&units=metric&appid=${apiKey}`

      try {
        const res = await axios.get(url)
        const data = res.data

        setWeather({
          city: data.name,
          temp: Math.round(data.main.temp),
          description: data.weather[0].description,
        })
        setError(null)
      } catch (err) {
        setError("Failed to fetch weather. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  return (
    <section className="w-full h-screen pt-20 flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {loading ? (
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid mb-8" />
          ) : error ? (
            <p className="text-red-500 mb-8">{error}</p>
          ) : weather && (
            <>
              <div className="flex items-center justify-center mb-8">
                <Image
                  src="/cap&bell.png" // Fixed placeholder image
                  alt="Weather Icon"
                  width={180}
                  height={180}
                  className="mr-2"
                />
                <div className="flex items-baseline">
                  <span className="text-8xl font-bold">{weather.temp}</span>
                  <span className="text-2xl align-top">°</span>
                  <span className="text-3xl ml-2">in {weather.city}</span>
                </div>
              </div>
              <p className="text-xl mb-2 capitalize">{weather.description}</p>
            </>
          )}

          <p className="text-xl mb-8 max-w-md">Explore your favorite destination with us</p>

          <Link href="/NewPage" className="px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
            Download Now
          </Link>
        </div>
      </div>
    </section>
  )
}