import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

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
    <html lang="en" className="dark">
      <body
        className={`overflow-hidden max-xl:overflow-y-scroll bg-slate-50 text-zinc-900 dark:bg-gray-800 dark:text-gray-100 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  )
}
