import{Item} from "./item.js"

export class Personaje {
  #nombre = null;
  #clase = null;
  #inventario = null;

  constructor(nombre, clase = null) {
    this.#nombre = nombre;
    this.#clase = clase;
    this.#inventario = new Set();
  }

  hablar(texto) {
    let textoV2 = "<b><br>" + this.#nombre + "</b>: " + texto + "<br>";
    document.getElementById("dialog-text").innerHTML += textoV2;
  }

  agregarAlInventario(item) {
    this.#inventario.add(item);
    let itemName = item instanceof Item ? item.getNombre() : item;
    let textoV2 = `<b><br>${this.#nombre} ha añadido el objeto ${itemName} a su inventario.</b><br>`;
    document.getElementById("dialog-text").innerHTML += textoV2;
  }

  

}
