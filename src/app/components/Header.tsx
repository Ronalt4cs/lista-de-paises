import { Moon } from 'lucide-react'

export function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-gray-700">
      <h1 className="text-xl font-bold leading-tight"> Onde no mundo?</h1>
      <div className="flex items-center gap-1">
        <Moon /> Modo escuro
      </div>
    </header>
  )
}
