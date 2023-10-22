import {Personaje} from "./personaje.js";

export class Hobbit extends Personaje{

    #pelo= null

    constructor(nombre,clase, pelo =null){
      super(nombre,clase)
      this.#pelo= pelo
    }
}