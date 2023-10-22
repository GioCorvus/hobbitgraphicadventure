import {Personaje} from "./personaje.js";

export class Orco extends Personaje{
    #daño= null


     constructor(nombre,clase = null, daño){
        super(nombre,clase)
        this.#daño = daño
      }
      
}