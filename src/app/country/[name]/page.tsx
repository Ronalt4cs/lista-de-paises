import { api } from '@/api/api'
import { Header } from '@/app/components/Header'
import { Country } from '@/interfaces/Country'
import { ArrowLeft, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function CountryDetail({
  params,
}: {
  params: { name: string }
}) {
  const { data } = await api.get(`/name/${params.name}`)
  const country: Country = data[0]
  const currency = Object.keys(country.currencies)[0]
  const languagesNames = Object.values(country.languages)

  return (
    <>
      <Header />
      <main className="w-full h-full flex flex-col justify-center gap-10 p-10">
        <Link
          href="/"
          className="flex items-center justify-center rounded-sm w-20 gap-2 p-2 
        shadow-md hover:bg-slate-200dark: dark: dark:shadow-gray-900 dark:bg-gray-700 dark:hover:bg-gray-900"
        >
          <ArrowLeft />
          Voltar
        </Link>
        <div className="flex gap-6 max-md:flex-col max-md:items-center">
          <Image
            src={country.flags.png}
            alt={country.flags.alt}
            width={320}
            height={277}
          />
          <div className="flex flex-col justify-between max-sm:gap-4">
            <h1 className="text-2xl font-bold">{country.name.common}</h1>
            <div className="columns-2 max-sm:flex max-sm:flex-col">
              <p>
                Nome oficial:
                <span className="dark:text-gray-400 pl-1">
                  {country.name.official}
                </span>
              </p>
              <p className="dark:text-gray-100">
                População:
                <span className="text-gray-500 dark:text-gray-400 pl-1">
                  {country.population
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </span>
              </p>
              <p className="dark:text-gray-100">
                Região:{' '}
                <span className="text-gray-500 dark:text-gray-400">
                  {country.region}
                </span>
              </p>
              <p className="text-gray-500 dark:text-gray-100">
                Sub Região:
                <span className="text-gray-500 dark:text-gray-400 pl-1">
                  {country.subregion}
                </span>
              </p>
              <p className="dark:text-gray-100">
                Capital:{' '}
                <span className="text-gray-500 dark:text-gray-400">
                  {country.capital}
                </span>
              </p>
              <p className="dark:text-gray-100">
                Moeda:{' '}
                <span className="mr-1 text-gray-500 dark:text-gray-400">
                  {country.currencies[currency].name}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {`(${country.currencies[currency].symbol})`}
                </span>
              </p>
              <p className="dark:text-gray-100">
                Idiomas:{' '}
                <span className="text-gray-500 dark:text-gray-400">
                  {languagesNames.join(', ')}
                </span>
              </p>
            </div>
            <a
              href={country.maps.googleMaps}
              target="_blank"
              className="flex gap-1 underline hover:text-blue-800 dark:text-gray-100 dark:hover:text-blue-200"
              rel="noreferrer"
            >
              <MapPin />
              Abrir google maps
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
