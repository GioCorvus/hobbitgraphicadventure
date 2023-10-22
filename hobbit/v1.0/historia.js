console.log('Tu historia comienza.')

import {Enano} from "./enano.js"
import {Elfo} from "./elfo.js"
import {Hobbit} from "./hobbit.js"
import {Orco} from "./orco.js"
import {Humano} from "./humano.js"
import {Protagonista} from "./protagonista.js"
import {Troll} from "./troll.js"
import {Escena} from "./escena.js"
import {especializacion,dialogos,tiposelfo,localizaciones} from "./content.js"


let botonderecha = document.getElementById('right')
botonderecha.onclick=dereita
let botonizquierda = document.getElementById("left")
botonizquierda.onclick=esquerda


function dereita(){
    console.log("pulsaste derecha")
}

function esquerda()
{
    console.log("soy la izquierda")
}


if(dereita.onclick){
    escena22.iniciarEscena()
}
else if(esquerda.onclick){
    escena23.iniciarEscena()
}


// import {especializacion,localizaciones,tiposelfo,dialogos } from "./content.js"

// Ha fallado la carga del módulo con origen "http://localhost/proyecto%20hobbit/hobbit/v1.0/recursos". v1.0:16:37

// console.log('Script cargado')

// let button = document.getElementById('btnCargar')
// console.log(button)
// button.onclick = atenderBotonCargar

// let iPregunta2 = document.getElementById('iPregunta2')
// iPregunta2.onblur = comprobarPregunta2 //evento que se dispara al perder el foco

// function atenderBotonCargar(){
//     console.log('Evento pillado')
//     let divExamen=document.getElementById('divExamen')
//     divExamen.style.display='block'

//     let cargarExamen=document.getElementById('divCargador')
//     divCargador.style.display='none'
// }

// function  comprobarPregunta2(){
//     let valor = iPregunta2.ariaValue
//     if(valor !== 5)
//         alert('Eres un zote')
// }

let escena1 = new Escena(localizaciones[0],dialogos.escena1)
console.log(escena1)

let bilbo = new Protagonista("Bilbo",especializacion[3],"Peludito")
console.log(bilbo)
bilbo.hablar("Hola, soy Bilbo")

let gandalf = new Humano("Gandalf",especializacion[0],"Ambulante") 
console.log(gandalf)

let thorin = new Enano("Thorin",especializacion[1],"Moreno") 
console.log(thorin)

let dwalin = new Humano("Dwalin",especializacion[1],"Moreno")
console.log(dwalin)

let fili = new Humano("Fili",especializacion[2],"Rubia")
console.log(fili)

let kili = new Humano("Kili",especializacion[1],"Morena")
console.log(kili)

let balin = new Enano("Balin",especializacion[3],"Blanca")
console.log(balin)

let azog = new Orco("Azog el Profanador",especializacion[1],5)
console.log(azog)

let elrond = new Elfo("Elrond",especializacion[1],tiposelfo[0])
console.log(elrond)

let galadriel = new Elfo ("Galadriel",especializacion[0],tiposelfo[2])
console.log(galadriel)