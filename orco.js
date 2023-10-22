import {Personaje} from "./personaje.js";

export class Orco extends Personaje{
     #fealdad = null 
     constructor(nombre,clase = null,inventario,fealdad){
        super(nombre,clase,inventario)
        this.#fealdad= fealdad
      }
      
}