export interface Country {
  name: {
    common: string
    official: string
  }
  population: number
  capital: string[]
  region: string
  subregion: string
  languages: {
    [name: string]: string
  }
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  flags: {
    png: string
    alt: string
  }
  maps: {
    googleMaps: string
  }
}
