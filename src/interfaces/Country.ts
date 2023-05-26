export interface Country {
  name: {
    common: string
    official: string
  }
  population: number
  capital: string[]
  region: string
  subregion: string
  currencies: {
    acronym: {
      name: string
      symbol: string
    }
  }
  borders: string[]
  languages: {
    name: string
  }
  flags: {
    png: string
    alt: string
  }
}
