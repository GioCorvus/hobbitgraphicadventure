import {Personaje} from "./personaje.js";

export class Enano extends Personaje{

    #colorBarba=null

    constructor(nombre, clase, colorBarba= null)
    {
        super(nombre,clase)
        this.#colorBarba = colorBarba
    }
}