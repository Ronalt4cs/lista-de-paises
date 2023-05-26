'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Filter() {
  const [isShowFilter, setIsShowFilters] = useState(false)

  return (
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
          <span className="text-sm leading-tight text-gray-300">África</span>
          <span className="text-sm leading-tight text-gray-300">América</span>
          <span className="text-sm leading-tight text-gray-300">Ásia</span>
          <span className="text-sm leading-tight text-gray-300">Europa</span>
          <span className="text-sm leading-tight text-gray-300">Oceania</span>
        </div>
      )}
    </div>
  )
}
