import {Personaje} from "./personaje.js";

export class Elfo extends Personaje{

    #origen=null

    constructor(nombre, clase, origen=null)
    {
        super(nombre,clase)
        this.#origen = origen
    }
}