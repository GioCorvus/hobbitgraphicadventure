import { razaEnano as raza } from "./claseRaza.js";
import { Personaje } from "./personaje.js";

export class Enano extends Personaje{

    static rey = "Thorin escudo de roble"
    static alabarAlRey()
    {
        return "Viva" + Enano.rey
    }


    static listaEnanos()
    {
        let lista=this.nombre
    }

    #colorBarba=null

    constructor(nombre,clase = null, colorBarba= "Blanca")
    {
        this.#colorBarba = colorBarba
        super(nombre,raza,clase)
    }

}