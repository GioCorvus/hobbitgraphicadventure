import{Objeto} from "./objetos.js"
  
  /////crea la clase, clase siempre en mayus
  export class Personaje{
    #nombre = null    //con # son atributos privados
    #raza= null
    #clase= null
    #inventario = null

    constructor(nombre,raza,clase = null){
      this.#nombre= nombre
      this.#raza = raza
      this.#clase = clase
      this.#inventario= new Set()
    }
   
    nombrar(personaje)
    {
        return " "+this.#nombre+", "
    }
    
    hablar(texto)
    {
        //console.log(texto)
        //let textoV2 = `<br><strong>Gandalf</strong>: "${texto}"`
        let textoV2=this.#nombre+": "+texto+"<br>"
        document.getElementById("historia").innerHTML += textoV2
    }
  
    coger(objeto){
        this.#inventario.add(objeto)
    }

    pasar(objeto,personaje)
    {
        if(!(objeto instanceof Objeto))
            throw"Objeto invalido"
        if(!(personaje instanceof Personaje))
            throw "Personaje invalido"
        this.#inventario.delete(objeto)
        personaje.coger(objeto)
    }
}   