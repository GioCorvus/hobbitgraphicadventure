export class Item {
  #nombre = null;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }
}