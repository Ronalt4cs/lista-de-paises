'use client'

import { api } from '@/api/api'
import { Country } from '@/interfaces/Country'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Search from './Search'
import { ChevronDown } from 'lucide-react'

export function CountriesContainer() {
  const [countries, setCountries] = useState([])
  const [isShowFilter, setIsShowFilters] = useState(false)
  const filter = localStorage.getItem('filter')

  function setFilter(value: string) {
    localStorage.setItem('filter', value)
    setIsShowFilters(false)
  }

  async function getCountries() {
    if (!filter) {
      setFilter('america')
    }
    const response = await api(`/region/${filter}`)

    setCountries(response.data.slice(0, 8))
  }

  useEffect(() => {
    getCountries()
    // eslint-disable-next-line
  }, [isShowFilter])

  if (countries) {
    return (
      <div className="flex flex-col items-center w-full px-56 gap-8">
        <div className="flex justify-between w-[900px] px-2">
          <Search />
          <div className="relative">
            <div className="flex items-center w-40 rounded-sm gap-2 text-gray-400 p-2 bg-gray-700">
              <span>Filtrar região</span>
              <ChevronDown
                className="hover:text-gray-100"
                onClick={() => setIsShowFilters(!isShowFilter)}
              />
            </div>
            {isShowFilter && (
              <div className="absolute flex flex-col w-40 mt-1 p-2 gap-1 rounded-sm  text-gray-400 bg-gray-700">
                <span
                  className="text-sm leading-tight cursor-pointer text-gray-300 hover:text-gray-200"
                  onClick={() => setFilter('africa')}
                >
                  África
                </span>
                <span
                  className="text-sm leading-tight cursor-pointer text-gray-300 hover:text-gray-200"
                  onClick={() => setFilter('america')}
                >
                  América
                </span>
                <span
                  className="text-sm leading-tight cursor-pointer text-gray-300 hover:text-gray-200"
                  onClick={() => setFilter('asia')}
                >
                  Ásia
                </span>
                <span
                  className="text-sm leading-tight cursor-pointer text-gray-300 hover:text-gray-200"
                  onClick={() => setFilter('europe')}
                >
                  Europa
                </span>
                <span
                  className="text-sm leading-tight cursor-pointer text-gray-300 hover:text-gray-200"
                  onClick={() => setFilter('oceania')}
                >
                  Oceania
                </span>
              </div>
            )}
          </div>
        </div>
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
                      <span className="text-gray-400 pl-1">
                        {country.region}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  } else {
    return <h1>loading</h1>
  }
}
