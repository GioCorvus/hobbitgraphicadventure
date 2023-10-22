import { dialogos } from "./recursos"

export class Escena{

    #localizacion = null
    #dialogo = null
    //#fondo = null

    constructor(localizacion=null, dialogo=null /*fondo=null*/)
    {
        this.#localizacion = localizacion
        this.#dialogo= dialogo
        /*this.#fondo= fondo*/
    }

    iniciarEscena()       
    {
        let imagenfondo = document.createElement("img");
        imagenfondo.src = "imagenes/escena1.jpg";

        // document.getElementById("dialog-text").innerHTML += imagenfondo.outerHTML;
        document.getElementById("dialog-text").innerHTML+=dialogos.escena1

        //cambiar imagen de fondo?
        let body = document.body;
        body.style.backgroundImage = "url('imagen/escena1.jpg')";
    }
}