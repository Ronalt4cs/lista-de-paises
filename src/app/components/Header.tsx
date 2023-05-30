'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Header() {
  const [theme, setTheme] = useState('dark')

  const getTheme = (): string => {
    if (
      localStorage.getItem('theme') &&
      localStorage.getItem('theme') === 'white'
    ) {
      return 'white'
    }
    return 'dark'
  }

  const toogleTheme = () => {
    const currentTheme = getTheme()
    if (currentTheme === 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'white')
      setTheme('white')
      return
    }
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    setTheme('dark')
  }

  useEffect(() => {
    const currentTheme = getTheme()
    if (currentTheme === 'white') {
      document.documentElement.classList.remove('dark')
    }
    setTheme(currentTheme)
  }, [theme])

  return (
    <header className="w-full flex items-center justify-between p-4 border-b shadow-sm dark:bg-gray-700 dark:border-none">
      <h1 className="text-xl font-bold leading-tight max-lg:text-sm">
        {' '}
        Onde no mundo?
      </h1>
      {theme === 'white' ? (
        <div className="flex items-center gap-1 max-lg:text-sm">
          <Sun onClick={toogleTheme} className="cursor-pointer" /> Modo claro
        </div>
      ) : (
        <div className="flex items-center gap-1 max-lg:text-sm">
          <Moon onClick={toogleTheme} className="cursor-pointer" /> Modo escuro
        </div>
      )}
    </header>
  )
}
