console.log('Tu historia comienza.')

import {Enano} from "./enano.js"
import {Elfo} from "./elfo.js"
import {Hobbit} from "./hobbit.js"
import {Orco} from "./orco.js"
import {Humano} from "./humano.js"
import {Protagonista} from "./protagonista.js"
import {Troll} from "./troll.js"
import {Escena} from "./escena.js"
import {Item} from "./item.js"
import {especializacion,dialogos,tiposelfo,localizaciones,fondos} from "./content.js"

//NOS TRAEMOS LOS BOTONES DEL HTML

let botonReset = document.getElementById("reset")
let botonmid = document.getElementById('mid')

botonmid.onclick=iniciarJuego
botonReset.onclick=acabarPartida

let botonderecha = document.getElementById('right')
let botonizquierda = document.getElementById("left")

const colorRed = "color: red;"; //se puede poner tal cual pero practicamos con consts 


//ESCENAS
let escena1 = new Escena(localizaciones[0],dialogos.escena1,fondos.fondo1)
let escena11 = new Escena(localizaciones[0],dialogos.escena11,fondos.fondo1)
let escena12 = new Escena(localizaciones[0],dialogos.escena12,fondos.fondo1)
let escena2 = new Escena(localizaciones[1],dialogos.escena2,fondos.fondo2)
let escena21 = new Escena(localizaciones[1],dialogos.escena21,fondos.fondo2)
let escena22 = new Escena(localizaciones[1],dialogos.escena22,fondos.fondo2)
let escena3 = new Escena(localizaciones[2],dialogos.escena3,fondos.fondo3)
let escena31 = new Escena(localizaciones[3],dialogos.escena31,fondos.fondo4)
let escena32 = new Escena(localizaciones[3],dialogos.escena32,fondos.fondo4)
let escena4 = new Escena(localizaciones[4],dialogos.escena4,fondos.fondo5)
let escena41 = new Escena(localizaciones[4],dialogos.escena41,fondos.fondo5)
let escena42 = new Escena(localizaciones[4],dialogos.escena42,fondos.fondo5)
let escena5 = new Escena(localizaciones[5],dialogos.escena5,fondos.fondo6)
let escena6 = new Escena(localizaciones[6],dialogos.escena6,fondos.fondo7)
let escena61 = new Escena(localizaciones[6],dialogos.escena61,fondos.fondo7)
let escena62 = new Escena(localizaciones[6],dialogos.escena62,fondos.fondo7)
let escena63 = new Escena(localizaciones[6],dialogos.escena63,fondos.fondo7)
let escena7 = new Escena (localizaciones[7],dialogos.escena7,fondos.fondo8)
let ending = new Escena(localizaciones[7],dialogos.ending,fondos.fondo10)

//PERSONAJES
let gandalf = new Humano("Gandalf",especializacion[0],"Ambulante")
let thorin = new Enano("Thorin",especializacion[1],null,"Moreno")
let dwalin = new Humano("Dwalin",especializacion[1],"Moreno")
let fili = new Humano("Fili",especializacion[2],"Rubia")
let kili = new Humano("Kili",especializacion[1],"Morena")
let balin = new Enano("Balin",especializacion[3],"Blanca")
let azog = new Orco("Azog el Profanador",especializacion[1],"Bastante guapo para ser un orco")
let elrond = new Elfo("Elrond",especializacion[1],tiposelfo[0])
let galadriel = new Elfo ("Galadriel",especializacion[0],tiposelfo[2])
let gollum = new Hobbit ("Gollum",especializacion[3],"Lampiño")
let tom = new Troll ("Tom",especializacion[3])
let berto = new Troll ("Berto",especializacion[3])
let guille = new Troll ("Guille",especializacion[3])
let bilbo = new Protagonista("Bilbo",especializacion[3],null,"Peludito")
let hobbit1=new Hobbit("Alfredo",null,"Frondoso")
let orco1=new Orco("Rompedientes",especializacion[1],"Muy feo")



/////Items
const espadaBilbo = new Item("Dardo")
const panLembas = new Item("Pan de Lembas")
const anilloUnico = new Item("El anillo único")
const espadaThorin = new Item("Orcrist")

//numero de veces que podemos intentar resistir el asalto orco (no es recomendable)
let intentos=6

function iniciarJuego(){
    botonmid.style.display='none'
    botonderecha.style.display='block'
    botonizquierda.style.display='block'
    historia()
}

function acabarPartida(){
    botonderecha.style.display='none'
    botonizquierda.style.display='none'
    botonReset.style.display='block'
}

function dañoGigante(){
    const daño = Math.floor(Math.random() * 6) + 2;
    Protagonista.conteoVidas(daño);
    // bilbo.recibirFijo(daño) // restar vida a bilbo según el daño generado
  
    /*let textoV2 = `<b style="${colorRed}"><br>Bilbo ha recibido ${daño} de daño. Vida actual: ${bilbo.vida}</b><br>`
    document.getElementById("dialog-text").innerHTML += textoV2*/
  }

function historia() {
    escena1.iniciarEscena()
    console.log(thorin)
    gandalf.hablar("Qué te parece Bilbo, ¿estás dispuesto a unirte a la compañía?")
    thorin.hablar("Es cierto que necesitamos a alguien silencioso...")
    dwalin.hablar("No te falta razón, dwalin...")
    kili.hablar("Y a mí me cae bien.")
    fili.hablar("¡A mí también!")
    balin.hablar("Y parece buena persona, Thorin.")
    bilbo.hablar("No estoy seguro... ¿Qué debería de hacer?<br><br><b>Opción A: Rechazar</b> o <b>Opción B: Aceptar</b>")

    botonizquierda.onclick = function () {
        escena11.iniciarEscena();
        acabarPartida(); //BUCLE 1
    }

    botonderecha.onclick = function () {
        escena12.iniciarEscena()
        gandalf.hablar("¡Esupendo, mi querido amigo Bilbo! ¡Ésta misión sería muchísimo más difícil si tú no estuvieses en ella!")
        thorin.hablar("Hm... Bienvenido a la compañía, Bilbo... -dice Thorin, todavía no demasiado convencido de todo aquello-.");
        fili.hablar("¡Wohoo! ¡Kili, jamás esperaría que un hobbit se uniese a vosotros! -codeó Fili a Kili. Se acercó, y susurró: -. Y mucho menos un amigo cercano de Gandalf... ")
        hobbit1.hablar("Vaya... -dice Alfredo, el primo de Bilbo, mirando tras la ventana-. En cuanto se vaya, nos quedamos con su casa...")
        botonizquierda.style.display = 'none';

        botonderecha.onclick = function () { // te unes a la compañia y solo ha de haber un botón

            //////////////////////////////////////////trolls
            escena2.iniciarEscena()
            botonizquierda.style.display = 'block'
            tom.hablar("Yo tener haaaambre. Y enano parecer rellenito de carne y músculo. ¡Favorito de Tooom!")
            berto.hablar("Comida. Proteína -Gruñe y balbucea. Es difícil endenterle-.")
            guille.hablar("Os estáis precipitando, queridos hermanos míos. Sois tan tontos que tenéis la incapacidad de ver que la carne todavía no está hecha, y comer carne cruda nos dará dolor de estómago -dice Guille, ajustándose la barba. pinchando a Thorin con el índice-. Les falta calle. Y programación.")
            dwalin.hablar("¡En cuanto me soltéis, voy a haceros picadillo! ¡Desgraciados! -se retuerce, pero eso tan solo logra que se le quemen las cejas.<br><b>Opción A: Tirar una piedra a Guille.  Opción B: Entretener a los trolls.</b>")
            botonizquierda.onclick = function () { // decides enfrentarte a los troles

                escena21.iniciarEscena(); /////bilbo tiene que perder una vida
                Protagonista.conteoVidas(-1)
                botonizquierda.style.display = 'none'
                botonderecha.onclick = function () {
                    segundaParte()
                }

            }

            // aqui no te enfrentas a los troles, y no pierdes vida
            botonderecha.onclick = function(){
                escena22.iniciarEscena(); 
                botonizquierda.style.display = 'none';

                botonderecha.onclick = function () {
                    segundaParte();

                }
            }
        }

    }
}

function segundaParte(){
    escena3.iniciarEscena();
    gandalf.hablar("Son... Cadáveres elfos. Lo que tenéis en vuestras manos es acero élfico, una de las más pulidas artes que hay en cuanto a la forja se refiere.")
    dwalin.hablar("Nada que envidiar a la herrería enana, Gandalf -gruñe el enano lampiño-.")
    thorin.hablar("Dwalin tiene razón. Pero... Éstas tienen algo especial -dice, tomando una espada de una hoja con la diestra, admirándola-. La llamaré Orcrist.")
    thorin.agregarAlInventario(espadaThorin)
    bilbo.hablar("Hm... -traga saliva-.")
    gandalf.hablar("Ten, mi querido amigo -dice el mago, ofreciendo a Bilbo una daga élfica, que para su tamaño, serviría como espada-. Tú puedes llamarla... Dardo")
    bilbo.hablar("Dardo... Me gusta. -dice, aceptando el arma-.")
    bilbo.agregarAlInventario(espadaBilbo)
    gandalf.hablar("Tenemos un problema... -susurra Gandalf, sin quitar el ojo de Dardo. La espada había comenzado a brillar con un mágico azul-. Se acercan orcos.")
    thorin.hablar("Orcos... -dice el enano, cerrando el puño-. Tenemos que matarles.")
    dwalin.hablar("Sí. No podemos escapar. Los orcos de éstas zonas cabalgan huargos. ¡A luchar!")
    balin.hablar("¡Es imposible que les plantemos cara! ¡Debemos de huir!<br><br> <b>Opción A: Luchar contra los orcos. Opción B: Escapar</b>")
    console.log(thorin)
    console.log(bilbo)
    botonizquierda.style.display = 'block'

    botonizquierda.onclick = function () { // opcion mala en bucle, orcos en lobo
        escena31.iniciarEscena()
        orco1.hablar("¡RODEADLES! -dice el que parece ser el cabecilla, un horrendo orco negro a lomos de un lobo sin ojo.")
        Protagonista.conteoVidas(-1)

        botonizquierda.onclick = function () { //seguir resistiendo
            intentos--;
            if (intentos === 0)
                acabarPartida();  /////////////PARA MIGUEL: AQUI ESTA EL BUCLE////////////////////////////////
            else
                escena31.iniciarEscena();
                Protagonista.conteoVidas(-1);
                document.getElementById("dialog-text").innerHTML += "<br>Intentos restantes:"+intentos

        }

        botonderecha.onclick = function () { //huir de los orcos
            escena32.iniciarEscena();
            botonizquierda.style.display = 'none';

            botonderecha.onclick = function () {
                escena4.iniciarEscena();
                botonizquierda.style.display = 'block';
                elrond.hablar("Bienvenidos a Rivendell, queridos amigos. Sentíos como en casa.")
                thorin.hablar("Ojalá éste sitio fuese como nuestra casa -gruñe, frunciendo el ceño-.")
                gandalf.hablar("Venga ya, Thorin. No seas así. ¡Estoy seguro de que no es tan malo como parece! -sonríe, y en ese momento, se da media vuelta, sintiendo una presencia a su espalda-.")
                galadriel.hablar("-no habla. al menos, a ojos de los enanos y de Bilbo, no pronuncia palabra alguna. Pero parece entenderse con tan solo mirarse, ella, Elrond y Gandalf-.")
                gandalf.hablar("Amigos... He de hablar con Elrond y Galadriel. Nos veremos pronto -dice el mago, antes de retirarse con la mujer. ")
                elrond.hablar("Os hemos preparado un banquete. Espero que lo disfruteis -dice antes de marchar con los otros dos-.")
                thorin.hablar("Ni hablar. No pienso tocar la comida élfica. Ni siquiera tengo tanta hambre -dice, dejando que su estómago gruñese-.<br><br> <b>Opción A: Unirse a comer plantas y zanahorias. Opción B: Rechazar la invitación</b>")

                botonizquierda.onclick = function () {
                    escena41.iniciarEscena(); // te curas una vida, ganas un bocadillo en el inventario
                    Protagonista.conteoVidas(1);
                    bilbo.agregarAlInventario(panLembas)
                    botonizquierda.style.display = 'none';

                    botonderecha.onclick = function () {
                        parteFinal();
                    }
                }

                botonderecha.onclick = function () {
                    escena42.iniciarEscena(); // no te curas
                    botonizquierda.style.display = 'none'

                    botonderecha.onclick = function () {
                        parteFinal()
                    }
                }

            }
        }
    }
    botonderecha.onclick = function(){//huir de los orcos
            
            escena32.iniciarEscena();
            botonizquierda.style.display = 'none';

            botonderecha.onclick = function () {
                escena4.iniciarEscena();
                botonizquierda.style.display = 'block';
                elrond.hablar("Bienvenidos a Rivendell, queridos amigos. Sentíos como en casa.")
                thorin.hablar("Ojalá éste sitio fuese como nuestra casa -gruñe, frunciendo el ceño-.")
                gandalf.hablar("Venga ya, Thorin. No seas así. ¡Estoy seguro de que no es tan malo como parece! -sonríe, y en ese momento, se da media vuelta, sintiendo una presencia a su espalda-.")
                galadriel.hablar("-no habla. al menos, a ojos de los enanos y de Bilbo, no pronuncia palabra alguna. Pero parece entenderse con tan solo mirarse, ella, Elrond y Gandalf-.")
                gandalf.hablar("Amigos... He de hablar con Elrond y Galadriel. Nos veremos pronto -dice el mago, antes de retirarse con la mujer. ")
                elrond.hablar("Os hemos preparado un banquete. Espero que lo disfruteis -dice antes de marchar con los otros dos-.")
                thorin.hablar("Ni hablar. No pienso tocar la comida élfica. Ni siquiera tengo tanta hambre -dice, dejando que su estómago gruñese-.<br><br> <b>Opción A: Unirse a comer plantas y zanahorias. Opción B: Rechazar la invitación</b>")

                botonizquierda.onclick = function () {
                    escena41.iniciarEscena(); // te curas una vida, ganas un bocadillo en el inventario
                    Protagonista.conteoVidas(1);
                    bilbo.agregarAlInventario(panLembas)
                    botonizquierda.style.display = 'none';

                    botonderecha.onclick = function () {
                        parteFinal();
                    }
                }

                botonderecha.onclick = function () {
                    escena42.iniciarEscena(); // no te curas
                    botonizquierda.style.display = 'none'

                    botonderecha.onclick = function () {
                        parteFinal()
                    }
                }

            }
    }
}

function parteFinal(){
    escena5.iniciarEscena()
    dañoGigante()
    bilbo.comprobarDerrota(botonderecha, botonizquierda, botonReset)

    botonderecha.onclick = function () {
        escena6.iniciarEscena() // empiezan los acertijos
        bilbo.agregarAlInventario(anilloUnico)
        botonizquierda.style.display = 'block';
        gollum.hablar("¡GOLLUM! ¡GOLLUM! ¡NOSOTROS PERDER EL ANILLO! -dice, tirándose del inexistente pelo de su cabeza-.")
        bilbo.hablar("¡Amigo mío! ¡No te preocupes, seguro que podemos hacer algo!")
        gollum.hablar("¡No! ¡No! ¡Tú robar! ¡Para yo creer, tú tener que responder a mi pregunta! -te mira con recelo, y formula su pregunta-.")
        gollum.hablar("Cantar sin tener voz, poder volar sin alas, sin tener dientes morder y sin boca poder hablar.<br><br> <b>Botón A: El viento.</b> o <b>Botón B: La vida.</b>" )
        botonizquierda.onclick = function () { // respuesta correcta
            escena61.iniciarEscena();
            gollum.hablar("¡Maldito hediondo, yo preguntar otra vez!")
            gollum.hablar("Las raíces no se ver. Ser más alto que un árbol. Arriba y arriba subir. Sin embargo, no crecer. ¿Qué ser? <br><br><b>Opción A: El cielo. Opción B: La montaña.</b>")

            botonizquierda.onclick = function () {
                // pierdes 1 vida
                escena62.iniciarEscena();
                Protagonista.conteoVidas(-1);
                // bilbo.restarVida();
                gollum.hablar("¡WRAAAAA! ¡NO, NO, NO! ¡YO PREGUNTAR OTRA VEZ! ¡ UNA MÁS, UNA MÁS!")
                gollum.hablar("Devorar todas las cosas. Las aves, bestias, plantas y flores. Roer el hierro, morder el acero. Pulverizar la peña compacta. Matar reyes, arruinar ciudades y derriba las altas montañas. ¿Qué ser? <br><br> <b>Opción A: El tiempo. Opción B: La enfermedad.")
                bilbo.comprobarDerrota(botonderecha, botonizquierda, botonReset)

                botonizquierda.onclick = function () { // respuesta correcta
                    
                    escena63.iniciarEscena();
                    botonizquierda.style.display = 'none';
                    botonderecha.onclick = function () { 
                        bilbo.comprobarDerrota(botonderecha, botonizquierda, botonReset)
                        escena7.iniciarEscena();
                        azog.hablar("¡THORIN! ¡COBARDE! ¡ENFRÉNTATE A MÍ! ¡MALDITAS RATAS! -gritaba el orco albino, liderando la carga a lomos del lobo gigante.")
                        balin.hablar("¡No le hagas caso, querido amigo! -jadeaba el pobre Balin al correr-. ¡No mires atrás!")
                        thorin.hablar("¡Lo sé! ¡No es... el momento!")
                        gandalf.hablar("¡Arriba! <br><br> Correis, correis y correis... Y veis a vuestro salvador: Gandalf acude a vuestro rescate a lomos de un águila gigante. Cuando os subís, vuestro corazón no deja de latir con fuerza. Estáis a salvo, pero vuestro corazón no deja de latir con fuerza conforme os alejáis del lugar.")
                        console.log(escena7);


                        botonderecha.onclick = function () { // respuesta correcta
                            ending.iniciarEscena();
                            acabarPartida()
                        }
                    }
                }

                botonderecha.onclick = function () { // respuesta incorrecta
                    escena63.iniciarEscena();
                    Protagonista.conteoVidas(-1);
                    // bilbo.restarVida();
                    bilbo.comprobarDerrota(botonderecha, botonizquierda, botonReset)
                    botonizquierda.style.display = 'none';

                    botonderecha.onclick = function () {
                        escena7.iniciarEscena();
                        azog.hablar("¡THORIN! ¡COBARDE! ¡ENFRÉNTATE A MÍ! ¡MALDITAS RATAS! -gritaba el orco albino, liderando la carga a lomos del lobo gigante.")
                        balin.hablar("¡No le hagas caso, querido amigo! -jadeaba el pobre Balin al correr-. ¡No mires atrás!")
                        thorin.hablar("¡Lo sé! ¡No es... el momento!")
                        gandalf.hablar("¡Arriba! <br><br> Correis, correis y correis... Y veis a vuestro salvador: Gandalf acude a vuestro rescate a lomos de un águila gigante. Cuando os subís, vuestro corazón no deja de latir con fuerza. Estáis a salvo, pero vuestro corazón no deja de latir con fuerza conforme os alejáis del lugar.")
                        botonderecha.onclick = function () {
                            ending.iniciarEscena();
                            acabarPartida()
                        }
                    }
                }
            }

            botonderecha.onclick = function () { // respuesta correcta
                escena62.iniciarEscena();
                gollum.hablar("¡WRAAAAA! ¡NO, NO, NO! ¡YO PREGUNTAR OTRA VEZ! ¡ UNA MÁS, UNA MÁS!")
                gollum.hablar("Devorar todas las cosas. Las aves, bestias, plantas y flores. Roer el hierro, morder el acero. Pulverizar la peña compacta. Matar reyes, arruinar ciudades y derriba las altas montañas. ¿Qué ser? <br><br> <b>Opción A: El tiempo. Opción B: La enfermedad.")

                botonizquierda.onclick = function () { // respuesta correcta
                    escena63.iniciarEscena();
                    botonizquierda.style.display = 'none';

                    botonderecha.onclick = function () {
                        escena7.iniciarEscena();
                        azog.hablar("¡THORIN! ¡COBARDE! ¡ENFRÉNTATE A MÍ! ¡MALDITAS RATAS! -gritaba el orco albino, liderando la carga a lomos del lobo gigante.")
                        balin.hablar("¡No le hagas caso, querido amigo! -jadeaba el pobre Balin al correr-. ¡No mires atrás!")
                        thorin.hablar("¡Lo sé! ¡No es... el momento!")
                        gandalf.hablar("¡Arriba! <br><br> Correis, correis y correis... Y veis a vuestro salvador: Gandalf acude a vuestro rescate a lomos de un águila gigante. Cuando os subís, vuestro corazón no deja de latir con fuerza. Estáis a salvo, pero vuestro corazón no deja de latir con fuerza conforme os alejáis del lugar.")
                        botonderecha.onclick = function () {
                            ending.iniciarEscena();
                            acabarPartida()
                        }
                    }
                }

                botonderecha.onclick = function () { // respuesta incorrecta
                    escena63.iniciarEscena();
                    Protagonista.conteoVidas(-1);
                    bilbo.comprobarDerrota(botonderecha, botonizquierda, botonReset)
                    botonizquierda.style.display = 'none';

                    botonderecha.onclick = function () { // respuesta correcta
                        escena7.iniciarEscena();
                        azog.hablar("¡THORIN! ¡COBARDE! ¡ENFRÉNTATE A MÍ! ¡MALDITAS RATAS! -gritaba el orco albino, liderando la carga a lomos del lobo gigante.")
                        balin.hablar("¡No le hagas caso, querido amigo! -jadeaba el pobre Balin al correr-. ¡No mires atrás!")
                        thorin.hablar("¡Lo sé! ¡No es... el momento!")
                        gandalf.hablar("¡Arriba! <br><br> Correis, correis y correis... Y veis a vuestro salvador: Gandalf acude a vuestro rescate a lomos de un águila gigante. Cuando os subís, vuestro corazón no deja de latir con fuerza. Estáis a salvo, pero vuestro corazón no deja de latir con fuerza conforme os alejáis del lugar.")
                        botonderecha.onclick = function () {
                            ending.iniciarEscena();
                            acabarPartida()
                        }
                    }
                }
            }

        }

        botonderecha.onclick = function () { // respuesta incorrecta
            escena61.iniciarEscena();
            Protagonista.conteoVidas(-1);
            gollum.hablar("¡Maldito hediondo, yo preguntar otra vez!")
            gollum.hablar("Las raíces no se ver. Ser más alto que un árbol. Arriba y arriba subir. Sin embargo, no crecer. ¿Qué ser? <br><br><b>Opción A: El cielo. Opción B: La montaña.</b>")

            botonizquierda.onclick = function () { // respuesta incorrecta
                escena62.iniciarEscena();
                Protagonista.conteoVidas(-1);
                gollum.hablar("¡WRAAAAA! ¡NO, NO, NO! ¡YO PREGUNTAR OTRA VEZ! ¡ UNA MÁS, UNA MÁS!")
                gollum.hablar("Devorar todas las cosas. Las aves, bestias, plantas y flores. Roer el hierro, morder el acero. Pulverizar la peña compacta. Matar reyes, arruinar ciudades y derriba las altas montañas. ¿Qué ser? <br><br> <b>Opción A: El tiempo. Opción B: La enfermedad.")
                bilbo.comprobarDerrota(botonderecha, botonizquierda, botonReset)

                botonizquierda.onclick = function () { // respuesta correcta
                    escena63.iniciarEscena();
                    
                    botonizquierda.style.display = 'none';

                    botonderecha.onclick = function () { // respuesta correcta
                        escena7.iniciarEscena();
                        azog.hablar("¡THORIN! ¡COBARDE! ¡ENFRÉNTATE A MÍ! ¡MALDITAS RATAS! -gritaba el orco albino, liderando la carga a lomos del lobo gigante.")
                        balin.hablar("¡No le hagas caso, querido amigo! -jadeaba el pobre Balin al correr-. ¡No mires atrás!")
                        thorin.hablar("¡Lo sé! ¡No es... el momento!")
                        gandalf.hablar("¡Arriba! <br><br> Correis, correis y correis... Y veis a vuestro salvador: Gandalf acude a vuestro rescate a lomos de un águila gigante. Cuando os subís, vuestro corazón no deja de latir con fuerza. Estáis a salvo, pero vuestro corazón no deja de latir con fuerza conforme os alejáis del lugar.")
                        botonderecha.onclick = function () {
                            ending.iniciarEscena();
                            acabarPartida()
                        }
                    }
                }

                botonderecha.onclick = function () { // respuesta incorrecta
                    escena63.iniciarEscena();
                    Protagonista.conteoVidas(-1);
                    bilbo.comprobarDerrota(botonderecha, botonizquierda, botonReset)
                    botonizquierda.style.display = 'none';

                    botonderecha.onclick = function () { // respuesta correcta
                        escena7.iniciarEscena();
                        azog.hablar("¡THORIN! ¡COBARDE! ¡ENFRÉNTATE A MÍ! ¡MALDITAS RATAS! -gritaba el orco albino, liderando la carga a lomos del lobo gigante.")
                        balin.hablar("¡No le hagas caso, querido amigo! -jadeaba el pobre Balin al correr-. ¡No mires atrás!")
                        thorin.hablar("¡Lo sé! ¡No es... el momento!")
                        gandalf.hablar("¡Arriba! <br><br> Correis, correis y correis... Y veis a vuestro salvador: Gandalf acude a vuestro rescate a lomos de un águila gigante. Cuando os subís, vuestro corazón no deja de latir con fuerza. Estáis a salvo, pero vuestro corazón no deja de latir con fuerza conforme os alejáis del lugar.")
                        botonderecha.onclick = function () {
                            ending.iniciarEscena();
                            acabarPartida()
                        }
                    }
                }
            }

            botonderecha.onclick = function () { // respuesta correcta
                escena62.iniciarEscena();
                gollum.hablar("¡WRAAAAA! ¡NO, NO, NO! ¡YO PREGUNTAR OTRA VEZ! ¡ UNA MÁS, UNA MÁS!")
                gollum.hablar("Devorar todas las cosas. Las aves, bestias, plantas y flores. Roer el hierro, morder el acero. Pulverizar la peña compacta. Matar reyes, arruinar ciudades y derriba las altas montañas. ¿Qué ser? <br><br> <b>Opción A: El tiempo. Opción B: La enfermedad.")

                botonizquierda.onclick = function () { // correcta
                    escena63.iniciarEscena();
                    botonizquierda.style.display = 'none';

                    botonderecha.onclick = function () {
                        escena7.iniciarEscena();
                        azog.hablar("¡THORIN! ¡COBARDE! ¡ENFRÉNTATE A MÍ! ¡MALDITAS RATAS! -gritaba el orco albino, liderando la carga a lomos del lobo gigante.")
                        balin.hablar("¡No le hagas caso, querido amigo! -jadeaba el pobre Balin al correr-. ¡No mires atrás!")
                        thorin.hablar("¡Lo sé! ¡No es... el momento!")
                        gandalf.hablar("¡Arriba! <br><br> Correis, correis y correis... Y veis a vuestro salvador: Gandalf acude a vuestro rescate a lomos de un águila gigante. Cuando os subís, vuestro corazón no deja de latir con fuerza. Estáis a salvo, pero vuestro corazón no deja de latir con fuerza conforme os alejáis del lugar.")
                        botonderecha.onclick = function () {
                            ending.iniciarEscena();
                            acabarPartida()
                        }
                    }
                }

                botonderecha.onclick = function () { // incorrecta
                    escena63.iniciarEscena();
                    Protagonista.conteoVidas(-1);
                    bilbo.comprobarDerrota(botonderecha, botonizquierda, botonReset)
                    botonizquierda.style.display = 'none';

                    botonderecha.onclick = function () {
                        escena7.iniciarEscena();
                        azog.hablar("¡THORIN! ¡COBARDE! ¡ENFRÉNTATE A MÍ! ¡MALDITAS RATAS! -gritaba el orco albino, liderando la carga a lomos del lobo gigante.")
                        balin.hablar("¡No le hagas caso, querido amigo! -jadeaba el pobre Balin al correr-. ¡No mires atrás!")
                        thorin.hablar("¡Lo sé! ¡No es... el momento!")
                        gandalf.hablar("¡Arriba! <br><br> Correis, correis y correis... Y veis a vuestro salvador: Gandalf acude a vuestro rescate a lomos de un águila gigante. Cuando os subís, vuestro corazón no deja de latir con fuerza. Estáis a salvo, pero vuestro corazón no deja de latir con fuerza conforme os alejáis del lugar.")
                        botonderecha.onclick = function () {
                            ending.iniciarEscena();
                            acabarPartida()
                        }
                    }
                }
            }

        }
    }
}