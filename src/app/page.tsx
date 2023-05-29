// import { api } from '@/api/api'
// import Image from 'next/image'
import Search from './components/Search'
import Filter from './components/Filter'
// import Link from 'next/link'
// import { Country } from '@/interfaces/Country'
import { Header } from './components/Header'
import { CountriesContainer } from './components/CountriesContainer'

export default function Home() {
  // const response = await api('/subregion/south america')
  // const countries = response.data.slice(0, 8)

  return (
    <>
      <Header />
      <main className="min-h-screen min-w-screen flex flex-col gap-8 items-center mt-10">
        <div className="flex flex-col items-center w-full px-56 gap-8">
          <div className="flex justify-between w-[900px] px-2">
            <Search />
            <Filter />
          </div>
          <CountriesContainer />
        </div>
      </main>
    </>
  )
}
