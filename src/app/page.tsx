import { Header } from './components/Header'
import { CountriesContainer } from './components/CountriesContainer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen min-w-screen flex flex-col gap-8 items-center mt-10">
        <CountriesContainer />
      </main>
    </>
  )
}
