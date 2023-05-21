import { api } from '@/api/api'
import { ChevronDown, Moon, Search } from 'lucide-react'
import Image from 'next/image'

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
        <div className="flex justify-between w-full">
          <div className="flex w-80 rounded-sm gap-2 text-gray-400 p-2 bg-gray-700">
            <Search />
            <input
              type="text"
              placeholder="Procure pelo país ..."
              className="text-gray-200 bg-gray-700 focus:outline-none"
            />
          </div>

          <div className="flex items-center w-40 rounded-sm gap-2 text-gray-400 p-2 bg-gray-700">
            <span>Filtrar região</span>
            <ChevronDown className="hover:text-gray-100" />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
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
                  className="rounded-t-lg"
                />
                <div className="flex flex-col gap-1 p-3">
                  <h1 className="text-lg">{country.name.common}</h1>

                  <div className="flex flex-col gap-1 text-sm font-extralight leading-tight">
                    <p>População: {country.population}</p>
                    <p>Capital: {country.capital[0]}</p>
                    <p>Região: {country.region}</p>
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
