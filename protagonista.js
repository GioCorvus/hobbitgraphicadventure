import { Hobbit } from "./hobbit.js";
import { fondos } from "./content.js";

export class Protagonista extends Hobbit {
  static vida=8

  constructor(nombre, clase, inventario, pelo) {
    super(nombre, clase, inventario, pelo);
  }

  static conteoVidas(danio) {
    if (danio === -1 ) {
      Protagonista.vida -= 1;
      document.getElementById("dialog-text").innerHTML += "<br><b style='color:red'>Has sufrido " + danio + " de daño</b> <i>Vida actual de Bilbo: " + Protagonista.vida + "</i><br>";
    }else if (danio === 1 ) {
      Protagonista.vida += 1;
      document.getElementById("dialog-text").innerHTML += "<br><b style='color:green'>Has ganado " + danio + " de vida</b> <i>Vida actual de Bilbo: " + Protagonista.vida + "</i><br>";
    }else{    /////caso del daño del gigante
      Protagonista.vida -= danio;
      document.getElementById("dialog-text").innerHTML += "<br><b style='color:red'>Has sufrido " + danio + " de daño</b> <i>Vida actual de Bilbo: " + Protagonista.vida + "</i><br>";
    }
    //document.getElementById("dialog-text").innerHTML += "<br><b style='color:red'>Has sufrido " + danio + " de daño</b> <i>Vida actual de Bilbo: " + Protagonista.vida + "</i><br>";
  }

comprobarDerrota(botonDerecha, botonIzquierda, botonReset) {
  if (Protagonista.vida<1) {
    document.body.style.backgroundImage = `url(${fondos.fondo9})`;
    document.getElementById("dialog-text").innerHTML="Has perdido demasiadas vidas. Aquí acaba tu aventura."
    botonDerecha.style.display = 'none';
    botonIzquierda.style.display = 'none';
    botonReset.style.display = 'block';
  }
}

}


