'use client'
import { Search as SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

export default function Search() {
  const [countrySearch, setCountrySearch] = useState<string>('')
  const router = useRouter()

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setCountrySearch(e.target.value)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!countrySearch) {
      return
    }
    router.replace(`/country/${countrySearch}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-80 rounded-sm gap-2 p-2 max-sm:w-72 border shadow-md dark:bg-gray-700 dark:text-gray-400 dark:border-none"
    >
      <button type="submit" onClick={() => handleSubmit}>
        <SearchIcon className="dark:hover:text-gray-100" />
      </button>
      <input
        type="text"
        placeholder="Procure pelo nome do país ..."
        className="dark:text-gray-200 dark:bg-gray-700 focus:outline-none"
        onChange={handleSearch}
      />
    </form>
  )
}
