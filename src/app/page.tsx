import { api } from '@/api/api'
import { Moon } from 'lucide-react'
import Image from 'next/image'
import Search from './components/Search'
import Filter from './components/Filter'

interface Country {
  name: {
    common: string
    official: string
  }
  population: number
  capital: string[]
  region: string
  flags: {
    png: string
    alt: string
  }
}

export default async function Home() {
  const response = await api('/all')
  const countries = response.data.slice(0, 8)

  return (
    <div className="min-h-screen min-w-screen flex flex-col gap-8 items-center">
      <header className="w-full flex items-center justify-between p-4 bg-gray-700">
        <h1 className="text-xl font-bold leading-tight"> Onde no mundo?</h1>
        <div className="flex items-center gap-1">
          <Moon /> Modo escuro
        </div>
      </header>

      <main className="flex flex-col items-center w-full px-56 gap-8">
        <div className="flex justify-between w-[900px] px-2">
          <Search />
          <Filter />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {countries.map((country: Country) => {
            return (
              <div
                key={country.population}
                className="flex flex-col w-52 rounded-lg bg-gray-700"
              >
                <Image
                  src={country.flags.png}
                  alt={country.flags.alt}
                  width={208}
                  height={280}
                  className="rounded-t-lg h-32"
                />
                <div className="flex flex-col gap-1 p-3">
                  <h1 className="text-lg">{country.name.common}</h1>

                  <div className="flex flex-col gap-1 text-sm font-extralight leading-tight">
                    <p className="text-gray-100">
                      População:{' '}
                      <span className="text-gray-400">
                        {country.population
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                      </span>
                    </p>
                    <p className="text-gray-100">
                      Capital:{' '}
                      <span className="text-gray-400">
                        {country.capital[0]}
                      </span>
                    </p>
                    <p className="text-gray-100">
                      Região:{' '}
                      <span className="text-gray-400">{country.region}</span>
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
