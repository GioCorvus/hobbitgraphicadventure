import { Hobbit } from "./hobbit.js";

export class Protagonista extends Hobbit {
  #vida = null;

  constructor(nombre, clase, pelo = null) {
    super(nombre, clase, pelo);
    this.#vida = 10;
  }
}





