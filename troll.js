import {Personaje} from "./personaje.js";

export class Troll extends Personaje{

     constructor(nombre,clase = null,inventario){
        super(nombre,clase,inventario)
      }

     ataqueTroll()
     {  
        dañoMax=5
        return Math.floor(Math.random() * dañoMax)
     }
}