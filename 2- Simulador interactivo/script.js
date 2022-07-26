alert("Usted está por entrar al simulador de Hoyts para comprar entradas")

//FUNCIONES
function precioEntradas(cantidadEntrada, sala) {
    return cantidadEntrada * sala
}

let simulador = true

while(simulador) {
    let nombre = prompt("¿Cuál es su nombre? Por favor, escribir nombre completo").toUpperCase()
    console.log(`¡Bienvenido/a ${nombre}!`)
    do {
        //eligiendo cine
        let cine = prompt("Ingrese el Cine al que quiere ir: \n\nCinemark Avellaneda\nCinemark Palermo\nCinemark Puerto Madero\nHoyts Abasto").toLowerCase()

        if((cine == "cinemark avellaneda") || (cine == "cinemark palermo") || (cine == "cinemark puerto madero") || (cine == "hoyts abasto")){
            console.log(`${nombre} ha seleccionado ${cine}`)
            //pelicula
            let pelicula = prompt("¿Que pelicula desea ver? En cartelera esta: \n\nJurassic World Dominio\nMinions\nThor Amor y Trueno\nLightyear\nTop Gun Maverick").toLowerCase()

            if ((pelicula == "jurassic world dominio") ||(pelicula == "minions") || (pelicula == "thor amor y trueno") || (pelicula == "lightyear") || (pelicula == "top gun maverick")) {
                console.log(`Usted está por comprar entradas para ver la pelicula ${pelicula} en ${cine}`)

                //valor de entradas
                let entrada2d = 940
                console.log(`La entrada a las Salas 2D salen $${entrada2d}`)
                let entrada3d = 1060
                console.log(`La entrada a las Salas 3D salen $${entrada3d}`)

                // cantidad de entradas
                let entrada = parseInt(prompt("Ingrese la cantidad de entradas, puede comprar hasta 6 entradas en total"))
                console.log(`${entrada} entrada/s`)
                if (entrada <= 6) {
                    //salas
                    let salaCine = parseInt(prompt("¿Desea las Salas 2D o las Salas 3D? Escriba 1 o 2 segun corresponda"))
                    if (salaCine == 1) {
                        //SALA 2D
                        let resultado = precioEntradas(entrada, entrada2d)
                        console.log(`$${resultado}`)
                        alert(`${nombre}, esta por comprar ${entrada} entrada/s en 2D (cada entrada sale $${entrada2d}) para ver ${pelicula} en ${cine} \n\nEl total seria $${resultado}`)
                    } else if (salaCine == 2) {
                        //SALA 3D 
                        let resultado = precioEntradas(entrada, entrada3d)
                        console.log(`$${resultado}`)
                        alert(`${nombre}, esta por comprar ${entrada} entrada/s en 3D (cada entrada sale $${entrada3d}) para ver ${pelicula} en ${cine} \n\nEl total seria $${resultado}`)
                    } else {
                        alert("No contamos con esa sala")
                    }
                    
                    //confirmacion para seguir
                    let continuar = prompt("¿Desea continuar?").toLowerCase()
                    if(continuar == "no"){
                        simulador = false
                    }

                } else {
                    alert("Solo puede comprar hasta 6 entradas")
                }

            } else {
                alert("Error, pelicula no existente")
            }

        }else {
            console.log(`Cine no encontrado`)
            alert("Por favor, escribir el nombre del cine como dice anteriormente")
        }

    } while (simulador != false);
}


