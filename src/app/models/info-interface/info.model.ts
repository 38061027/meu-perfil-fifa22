export interface Informacao{

      nome:string,
     idade: number,
      posicao:string,
      time: string,
      nacionalidade: string,
      altura:number,
      valor: number,
      foto: string

}


export interface Titulos{

  img:string;
  imgliga: string;
  name: string;
  quantidade: number;
  temporadas: Titulos[];
  artilharias:string[]

}
