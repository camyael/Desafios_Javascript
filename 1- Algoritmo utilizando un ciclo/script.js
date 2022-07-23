//Reserva de viaje a Bariloche

alert("¡Bienvenido! Reserve su viaje a Bariloche.")
let transporte
let nombre = 0

for (let excursion = 1; excursion <= 70; excursion++) {
    nombre = prompt("Ingresar su nombre completo")
    console.log(`¡Hola ${nombre}!`)
    transporte = prompt("Tenemos como medios de transporte aviones y micros para esta oferta de viaje, por favor escriba avion o micro segun su preferencia").toLowerCase()

    switch (transporte) {
        case "micro":
            console.log("Usted ha elegido como medio de transporte: micro")
            break;
        case "avion":
            console.log("Usted ha elegido como medio de transporte: avion")
            break;
        default:
            console.log("Transporte invalido")
            break;
    }

    if ((nombre != null) && ((transporte == "micro") || (transporte == "avion"))) {
        alert(`Usted tiene la reserva ${excursion} para viajar a Bariloche en ${transporte} bajo el nombre ${nombre}`)
        console.log("Hasta pronto <3")
    } else if (nombre = null) {
        alert("Ingrese un nombre valido")
    } else if (transporte = null) {
        alert("Ingrese un transporte valido")
    } else {
        alert("No pudimos tomarle la reserva, revise por favor sus datos")
        console.log("Hasta pronto <3")
    }
    
}
