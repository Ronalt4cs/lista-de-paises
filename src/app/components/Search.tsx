'use client'
import { Search as SearchIcon } from 'lucide-react'
import { ChangeEvent } from 'react'

export default function Search() {
  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()

    const searchValue = e.target.value
    return console.log(searchValue)
  }

  return (
    <div className="flex w-80 rounded-sm gap-2 text-gray-400 p-2 bg-gray-700">
      <SearchIcon />
      <input
        type="text"
        placeholder="Procure pelo país ..."
        className="text-gray-200 bg-gray-700 focus:outline-none"
        onChange={handleSearch}
      />
    </div>
  )
}
