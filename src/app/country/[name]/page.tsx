import { api } from '@/api/api'
import { Country } from '@/interfaces/Country'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function CountryDetail({ params }: any) {
  const { data } = await api.get(`/name/${params.name}`)
  const country: Country = data[0]

  return (
    <div className="w-full h-full flex flex-col justify-center gap-10 p-10">
      <Link
        href="/"
        className="flex items-center justify-center rounded-sm w-20 gap-2 p-2 bg-gray-700"
      >
        <ArrowLeft />
        Voltar
      </Link>
      <div className="flex justify-between">
        <Image
          src={country.flags.png}
          alt={country.flags.alt}
          width={420}
          height={420}
        />
        <span>{country.name.common}</span>
      </div>
    </div>
  )
}
