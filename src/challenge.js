

const add = (numero1, numero2) => {
    return numero1 + numero2
}

const user = {
    firstname = '',
    age = 10
}

class Pessoa {
    name = ''
    isTech
}

const iteratable = (array) => {
    array.forEach(element => {
        console.log(element)
    });
}

const hash = () => {
    let hashmap = new Map(
        [
          [1, "first"],
          [2, "second"],
          [3, "third"]
        ]
      )
      
      hashmap.forEach((Element, id)=> {
          console.log(id, Element)
      })
}

