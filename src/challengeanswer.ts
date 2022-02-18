

const add = (numero1:number, numero2:number):number => {
    return numero1 + numero2
}

const add2 = (numero1:number, numero2:number):void => {
    console.log(numero1 + numero2)
}

class Pessoa {
    name:string = ''
    isTech:boolean = true
}

const iteratable = (array:any) => {
    array.forEach((element:any) => {console.log(element)})
}


interface Data {
    id:number,
    type:string
}

const hash = ():void => {
    let hashmap = new Map(
        [
          [1, "first"],
          [2, "second"],
          [3, "third"]
        ]
      )
      
      hashmap.forEach((Element:string, id:number)=> {
          console.log(id, Element)
      })
}
