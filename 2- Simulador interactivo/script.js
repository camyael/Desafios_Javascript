/*let precio, opciones

do {
    precio = parseFloat(prompt("Ingrese el precio para saber si tiene descuento"))
    console.log(`El precio del producto sin descuento es ${precio}`)

    if ((precio > 0) && (precio <= 1000)) {
        console.log(`Este producto tiene un 20% de descuento`)
        opciones = parseInt(prompt(`Ingrese las siguientes opciones (solamente el numero):\n\n1) Si quiere saber el precio final del producto\n2) Si quiere salir`))
        let descuento20 = precio - (precio * 20 / 100)

        switch (opciones) {
            case 1:
                console.log(`¡Su producto con el 20% saldría ${descuento20}!`)
                break;
            case 2:
                console.log(`Hasta pronto<3`)
                break; 
            default:
                break;
        }
    } else if (precio > 1000){
        console.log(`Este producto tiene un 30% de descuento`)
        opciones = parseInt(prompt(`Ingrese las siguientes opciones (solamente el numero):\n\n1) Si quiere saber el precio final del producto\n2) Si quiere salir`))
        let descuento30 = precio - (precio * 30 / 100)

        switch (opciones) {
            case 1:
                console.log(`¡Su producto con el 30% saldría ${descuento30}!`)
                break;
            case 2:
                console.log(`Hasta pronto<3`)
                break; 
            default:
                break;
        }
    } else if (precio === 0) {
        console.log(`El precio no es valido`)
    } else {
        alert("El producto no cuenta con ningun descuento, esperamos que vuelva pronto")
    }
} while (opciones != 2)
*/

alert("Usted está por entrar al simulador de Hoyts para comprar entradas")

let simulador = true 

while(simulador){
    let nombre = prompt("¿Cuál es su nombre? Por favor, escribir nombre completo")
    console.log(`¡Bienvenido/a ${nombre}!`)

    let cine
    do {
        cine = prompt("Ingrese el Cine al que quiere ir: \n\nCinemark Avellaneda\nCinemark Palermo\nCinemark Puerto Madero\nHoyts Abasto").toLowerCase()

        if((cine == "cinemark avellaneda") || (cine == "cinemark palermo") || (cine == "cinemark puerto madero") || (cine == "hoyts abasto")){
            console.log(`${nombre} ha seleccionado ${cine}`)

            


        }else {
            console.log(`Cine no encontrado`)
            alert("Por favor, escribir el cine como dice anteriormente")
        }

       /* let continuar
        do {
            continuar = prompt("¿Desea continuar comprando más entradas?").toLowerCase()
            switch (continuar) {
                case "si":
                    console.log("si")
                    break;
                
                case no:
                    simulador = false
                    console.log("no")
                    break;
        
                default:
                    alert("Respuesta no valida")
                    break;
            }
        } while ((continuar != "si") || (continuar != "no"));*/
    
    } while ((cine != "cinemark avellaneda") || (cine != "cinemark palermo") || (cine != "cinemark puerto madero") || (cine != "hoyts abasto"));
}
