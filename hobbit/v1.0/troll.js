import {Personaje} from "./personaje.js";

export class Troll extends Personaje{

     constructor(nombre,clase = null, daño){
        super(nombre,clase)
      }

     ataqueTroll()
     {  
        dañoMax=5
        return Math.floor(Math.random() * dañoMax)
     }
}