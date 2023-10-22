export class Escena{

    #localizacion = null
    #dialogo = null
    #fondo = null

    constructor(localizacion=null, dialogo=null, fondo=null)
    {
        this.#localizacion = localizacion
        this.#dialogo= dialogo
        this.#fondo= fondo
    }

    iniciarEscena()       
    {
        /*
        imagen = document.createElement("img");
        imagen.src = "imagenes/esc2.png";*/

        document.body.style.backgroundImage = `url(${this.#fondo})`;

        // document.getElementById("dialog-text").innerHTML += imagenfondo.outerHTML;
        document.getElementById("dialog-text").innerHTML=this.#dialogo

        //cambiar imagen de fondo?
        // imagen = document.body;
        // imagen.style.backgroundImage = fondo;
    }

}