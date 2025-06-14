'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

const cities = [
  "Manali", "Shimla", "Ooty", "Coorg", "Munnar", "Pahalgam", "Gulmarg", "Srinagar", "Shillong",
  "Cherrapunji", "Darjeeling", "Gangtok", "Tawang", "Mount Abu", "Kodaikanal", "Lonavala", "Mahabaleshwar",
  "Puducherry", "Goa", "Udaipur", "Jaipur", "Jaisalmer", "Rishikesh", "Haridwar", "Varanasi", "Agra",
  "Delhi", "Amritsar", "Dalhousie", "Mussoorie", "Nainital", "Leh", "Kargil", "Spiti", "Auli", "Meghalaya",
  "Kolkata", "Bangalore", "Mumbai", "Chennai", "Hyderabad", "Lucknow", "Bhopal", "Ahmedabad", "Indore",
  "Ranchi", "Raipur", "Bhubaneswar", "Guwahati", "Imphal", "Itanagar", "Dispur", "Panaji",
]

type Weather = {
  city: string
  temp: number
  description: string
}

export default function HeroSection() {
  const [weather, setWeather] = useState<Weather | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const getWeatherImage = (temp: number) => {
    if (temp <= 10) return '/cap&bell.png'
    if (temp <= 20) return '/20.jpg'
    if (temp <= 30) return '/11.png'
    return '/sun.png'
  }

  useEffect(() => {
    const fetchWeather = async () => {
      const city = cities[Math.floor(Math.random() * cities.length)]
      const apiKey = '144cfb56ad924de9d9f8787cf197408f'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )},IN&units=metric&appid=${apiKey}`

      try {
        const res = await axios.get(url)
        const data = res.data
        setWeather({
          city: data.name,
          temp: Math.round(data.main.temp),
          description: data.weather[0].description,
        })
        setError(null)
      } catch {
        setError('Failed to fetch weather. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  return (
    <section className="w-full min-h-screen pt-16 flex items-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {loading ? (
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid mb-6 sm:mb-8" />
          ) : error ? (
            <p className="text-red-500 text-base sm:text-lg mb-6 sm:mb-8">{error}</p>
          ) : weather && (
            <>
              <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8 gap-4 sm:gap-6">
                <Image
                  src={getWeatherImage(weather.temp)}
                  alt="Weather Icon"
                  width={120}
                  height={120}
                  className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
                />
                <div className="flex items-baseline">
                  <span className="text-5xl sm:text-6xl lg:text-8xl font-bold">
                    {weather.temp}
                  </span>
                  <span className="text-lg sm:text-xl lg:text-2xl align-top">°</span>
                  <span className="text-lg sm:text-xl lg:text-3xl ml-2 sm:ml-3">
                    in {weather.city}
                  </span>
                </div>
              </div>
              <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 capitalize">
                {weather.description}
              </p>
            </>
          )}

          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xs sm:max-w-md lg:max-w-lg">
            Explore your favorite destination with us
          </p>

          <Link
            href="/NewPage"
            className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-medium rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Download Now
          </Link>
        </div>
      </div>
    </section>
  )
}
