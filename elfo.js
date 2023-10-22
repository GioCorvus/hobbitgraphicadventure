import {Personaje} from "./personaje.js";

export class Elfo extends Personaje{

    #origen=null

    constructor(nombre, clase,inventario, origen=null)
    {
        super(nombre,clase,inventario)
        this.#origen = origen
    }
}