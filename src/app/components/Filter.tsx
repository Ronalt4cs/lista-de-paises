import { ChevronDown } from 'lucide-react'

export default function Filter() {
  return (
    <div className="flex items-center w-40 rounded-sm gap-2 text-gray-400 p-2 bg-gray-700">
      <span>Filtrar região</span>
      <ChevronDown className="hover:text-gray-100" />
    </div>
  )
}
