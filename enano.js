import {Personaje} from "./personaje.js";

export class Enano extends Personaje{

    #colorBarba=null

    constructor(nombre, clase,inventario, colorBarba= null)
    {
        super(nombre,clase,inventario)
        this.#colorBarba = colorBarba
    }
}