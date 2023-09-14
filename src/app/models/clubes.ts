export interface Clubes {

  transferencia: {
  position:string,
  temporada: string,
  origem: {
    name:string,
    country:string,
    img:string
  }[],
  destino: {
    name:string,
    country:string,
    img:string
  }[]
  }[]

}
