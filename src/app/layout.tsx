import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Moon } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Países',
  description: 'App de listagem de países',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-800 text-gray-100 ${inter.className}`}>
        <header className="w-full flex items-center justify-between p-4 bg-gray-700">
          <h1 className="text-xl font-bold leading-tight"> Onde no mundo?</h1>
          <div className="flex items-center gap-1">
            <Moon /> Modo escuro
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
