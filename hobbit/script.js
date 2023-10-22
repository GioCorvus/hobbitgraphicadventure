console.log('Script cargado correctamente.')
import {Enano} from "./enano.js"
import{Personaje} from "./personaje.js"
import{Objeto} from "./objetos.js"
import {claseMago,claseClerigo,claseGuerrero,claseSaqueador,razaHumano,razaElfo,razaEnano,razaHobbit} from "./claseRaza.js"


let imagenIntro = document.createElement("img");
imagenIntro.src = "img/intro.jpeg";

// document.getElementById("historia").innerHTML += imagenIntro.outerHTML;

// if (confirm("¿Quieres cargar la imagen del anillo unico?")) {
//     document.getElementById("historia").innerHTML += imagenIntro.outerHTML;
// } else {
//   prompt("No era esa opcion")
// }

let bilbo = new Personaje("Bilbo Bolson",razaHobbit)     //objetos del tipo personajes

let gandalf = new Personaje("Gandalf El Gris",razaHumano,claseMago)

let aladar =  new Personaje("Aladar el azul",razaHumano,claseMago)

let thorin = new Personaje("Throin Escudo de Roble",claseGuerrero)
let kili = new Personaje("Kili")
let fili = new Personaje("Fili")
let dwalin = new Personaje("Dwalin")

let lampara= new Objeto("Lampaza azul")
let reloj = new Objeto("Reloj del abuelo")

console.log(bilbo,gandalf)

gandalf.hablar("Ya están aquí! Bienvenidos a la casa de Bilbo")
document.getElementById("historia").innerHTML+="de pronto aparecieron..."+thorin.nombrar()+kili.nombrar()+fili.nombrar()+dwalin.nombrar() //tienen que salir el listado de los enanos

document.getElementById("historia").innerHTML+="de pronto aparecieron..."



kili.coger(lampara)
gandalf.hablar("Deja eso en su sitio")
kili.hablar("Cogelo Fili")
kili.pasar(lampara,fili)
fili.hablar("Ya lo tengo")
fili.coger(reloj)
console.log(fili)

console.log(kili)

//fili.pasar("Zapato","Bob Esponja")  //esto genera un error y lanzamos la excepcion
gandalf.hablar("Buenos dias mi viejo amigo")
bilbo.hablar("Gandalf! Me alegro de verte")
dwalin.hablar("Viva nuestro rey "+Enano.rey)