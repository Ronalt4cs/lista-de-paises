import { Moon } from 'lucide-react'

export function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-gray-700">
      <h1 className="text-xl font-bold leading-tight max-lg:text-sm">
        {' '}
        Onde no mundo?
      </h1>
      <div className="flex items-center gap-1 max-lg:text-sm">
        <Moon /> Modo escuro
      </div>
    </header>
  )
}
