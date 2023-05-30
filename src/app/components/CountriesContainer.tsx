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
  const [filter, setFilter] = useState('america')

  function setNewFilter(value: string) {
    setFilter(value)
    setIsShowFilters(false)
  }

  async function getCountries() {
    const response = await api(`/region/${filter}`)
    setCountries(response.data.slice(0, 8))
  }

  useEffect(() => {
    getCountries()
    // eslint-disable-next-line
  }, [filter])

  if (countries) {
    return (
      <div className="flex flex-col items-center w-full px-56 gap-8">
        <div className="flex justify-between w-[900px] px-2 max-lg:flex-col max-lg:items-center max-lg:gap-2">
          <Search />
          <div className="relative">
            <div className="flex items-center w-40 rounded-sm gap-2 p-2 border shadow-md dark:text-gray-400 dark:bg-gray-700 dark:border-none">
              <span>Filtrar região</span>
              <ChevronDown
                className="dark:hover:text-gray-100"
                onClick={() => setIsShowFilters(!isShowFilter)}
              />
            </div>
            {isShowFilter && (
              <div className="absolute flex flex-col w-40 mt-1 p-2 gap-1 rounded-sm border shadow-sm bg-slate-50 text-zinc-900 dark:text-gray-400 dark:bg-gray-700 dark:border-none">
                <span
                  className="text-sm leading-tight cursor-pointer dark:hover:text-gray-200"
                  onClick={() => setNewFilter('africa')}
                >
                  África
                </span>
                <span
                  className="text-sm leading-tight cursor-pointer dark:hover:text-gray-200"
                  onClick={() => setNewFilter('america')}
                >
                  América
                </span>
                <span
                  className="text-sm leading-tight cursor-pointer dark:hover:text-gray-200"
                  onClick={() => setNewFilter('asia')}
                >
                  Ásia
                </span>
                <span
                  className="text-sm leading-tight cursor-pointer dark:hover:text-gray-200"
                  onClick={() => setNewFilter('europe')}
                >
                  Europa
                </span>
                <span
                  className="text-sm leading-tight cursor-pointer dark:hover:text-gray-200"
                  onClick={() => setNewFilter('oceania')}
                >
                  Oceania
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:flex max-md:flex-wrap">
          {countries.map((country: Country) => {
            return (
              <Link
                key={country.population}
                href={`/country/${country.name.common}`}
                className="flex flex-col w-52 rounded-lg border shadow-md dark:border-none dark:bg-gray-700"
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
                    <p className="dark:text-gray-100">
                      População:
                      <span className="dark:text-gray-400 pl-1">
                        {country.population
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                      </span>
                    </p>
                    <p className="dark:text-gray-100">
                      Capital:
                      <span className="dark:text-gray-400 pl-1">
                        {country.capital[0]}
                      </span>
                    </p>
                    <p className="dark:text-gray-100">
                      Região:
                      <span className="dark:text-gray-400 pl-1">
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
