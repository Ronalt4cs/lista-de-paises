'use client'

import { api } from '@/api/api'
import { Country } from '@/interfaces/Country'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function CountriesContainer() {
  const [countries, setCountries] = useState([])

  async function getCountries() {
    const response = await api('/subregion/south america')
    setCountries(response.data.slice(0, 8))
  }

  useEffect(() => {
    getCountries()
  })

  if (countries) {
    return (
      <div className="grid grid-cols-4 gap-4">
        {countries.map((country: Country) => {
          return (
            <Link
              key={country.population}
              href={`/country/${country.name.common}`}
              className="flex flex-col w-52 rounded-lg bg-gray-700"
            >
              <Image
                src={country.flags.png}
                alt={country.flags.alt}
                width={320}
                height={277}
                className="rounded-t-lg h-32"
              />
              <div className="flex flex-col gap-1 p-3">
                <h1 className="text-lg">{country.name.common}</h1>

                <div className="flex flex-col gap-1 text-sm font-extralight leading-tight">
                  <p className="text-gray-100">
                    População:
                    <span className="text-gray-400 pl-1">
                      {country.population
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    </span>
                  </p>
                  <p className="text-gray-100">
                    Capital:
                    <span className="text-gray-400 pl-1">
                      {country.capital[0]}
                    </span>
                  </p>
                  <p className="text-gray-100">
                    Região:
                    <span className="text-gray-400 pl-1">{country.region}</span>
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    )
  } else {
    return <h1>loading</h1>
  }
}
