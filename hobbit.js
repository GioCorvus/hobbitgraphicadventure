import {Personaje} from "./personaje.js";

export class Hobbit extends Personaje{

    #pelo= null

    constructor(nombre,clase,inventario, pelo =null){
      super(nombre,clase,inventario)
      this.#pelo= pelo
    }
}