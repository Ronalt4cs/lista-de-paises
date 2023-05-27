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
  flags: {
    png: string
    alt: string
  }
}
