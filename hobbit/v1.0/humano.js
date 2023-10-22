import {Personaje} from "./personaje.js";

export class Humano extends Personaje{

    #rango=null

    constructor(nombre, clase=null, rango=null)
    {
        super(nombre,clase)
        this.#rango = rango
    }
}