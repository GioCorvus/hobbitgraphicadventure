import {Personaje} from "./personaje.js";

export class Humano extends Personaje{

    #rango=null

    constructor(nombre, clase=null,inventario, rango=null)
    {
        super(nombre,clase,inventario)
        this.#rango = rango
    }
}