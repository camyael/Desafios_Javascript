// VARIABLES A USAR
let entrada
let nombre
let pelicula
let cine
let resultado

// PRECIO ENTRADAS
let entrada2d = 940
let entrada3d = 1060

// ARRAY CON PELICULAS EN CARTELERA
let peliculasEnCartelera = ["JURASSIC WORLD DOMINIO", "MINIONS", "THOR AMOR Y TRUENO", "LIGHTYEAR", "TOP GUN MAVERICK"]

// ARRAY CON LOS CINES - SUCURSALES
let sucursales = ['cinemark avellaneda', 'cinemark palermo', 'cinemark puerto madero', 'hoyts abasto']

// FUNCION PARA EL RESULTADO ENTRE ENTRADAS Y SU PRECIO POR SALA
const precioEntradas = (cantidadEntrada, sala) => cantidadEntrada * sala;

// CUENTA Y AVISO DE COMPRA
const avisoDeCompra = function (tipoDeSala) {
    if (tipoDeSala == 1){ 
        resultado = precioEntradas(entrada, entrada2d)
    } else if (tipoDeSala == 2){
        resultado = precioEntradas(entrada, entrada3d)
    }
    reservaDeEntradas.push(new Cine(`${nombre}`, `$${resultado}`, `${pelicula}`, `${cine}`))
    console.table(reservaDeEntradas)
    alert(`${nombre}, esta por comprar ${entrada} entrada/s, para ver ${pelicula} en ${cine} \n\nEl total seria $${resultado}`)
}

//GUARDAR DATOS DE LAS ENTRADAS
class Cine {
    constructor (nombre, entradas, pelicula, cine) {
        this.nombre = nombre;
        this.entradas = entradas;
        this.pelicula = pelicula;
        this.cine = cine;
    }
}

const reservaDeEntradas = []

// EVALUAR CANTIDAD DE ENTRADAS
function entradas() {
    entrada = parseInt(prompt("Ingrese la cantidad de entradas, puede comprar hasta 6 entradas en total"))
    console.log(`${entrada} entrada/s`)

    if (entrada <= 6) {
        //salas
        let salaCine = parseInt(prompt("¿Desea las Salas 2D o las Salas 3D? Escriba 1 o 2 segun corresponda"))
        if ((salaCine == 1) || (salaCine == 2)) {
            //AVISO DE COMPRA
            avisoDeCompra(salaCine)
        } else {
            alert("No contamos con esa sala")
        }
                        
        //confirmacion para seguir
        let continuar = prompt("¿Desea continuar comprando?").toLowerCase()
        if(continuar == "no"){
            simulador = false
        }

    } else {
        alert("Solo puede comprar hasta 6 entradas")
    }
}


// SIMULADOR
let simulador = true

while(simulador) {
    alert("Usted está por entrar al simulador de Hoyts para comprar entradas")
    nombre = prompt("¿Cuál es su nombre? Por favor, escribir nombre completo").toUpperCase()
    console.log(`¡Bienvenido/a ${nombre}!`)

    do {
        //eligiendo cine
        cine = prompt("Ingrese el Cine al que quiere ir: \n\nCinemark Avellaneda\nCinemark Palermo\nCinemark Puerto Madero\nHoyts Abasto").toLowerCase()
        let sucursalConfirmacion = sucursales.includes(cine)

        if(sucursalConfirmacion){
            console.log(`${nombre} ha seleccionado ${cine}`)
            //pelicula
            console.log(peliculasEnCartelera)
            pelicula = prompt("¿Que pelicula desea ver?").toUpperCase()
            let peliculaConfirmacion = peliculasEnCartelera.includes(pelicula)

            if (peliculaConfirmacion) {
                console.log(`Usted está por comprar entradas para ver la pelicula ${pelicula} en ${cine}`)

                // llamado a la funcion para evaluar cantidad de entradas
                entradas()

            } else {
                alert("Error, pelicula no existente")
            }

        } else {
            console.log(`Cine no encontrado`)
            alert("Por favor, escribir el nombre del cine como dice anteriormente")
        }

    } while (simulador != false);
}