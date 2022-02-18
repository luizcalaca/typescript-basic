function teste(valor:string):void {
    console.log(valor.toUpperCase())
}

//teste("olá")
//teste(2)
//
const retornaMediaOk= (valor1: number, valor2: number, sujeito: string) => {}

const retornaMediaImplement = (valor1: number, valor2: number, sujeito: string):string => {
    const media:number = (valor1 + valor2) / 2;
    return `a media de ${sujeito} é ${media}`;
}

export{retornaMediaOk}