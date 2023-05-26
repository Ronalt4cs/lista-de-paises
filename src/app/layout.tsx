import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './components/Header'

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
        <Header />
        {children}
      </body>
    </html>
  )
}
