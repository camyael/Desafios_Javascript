//Reserva de viaje a Bariloche

alert("¡Bienvenido! Reserve su viaje a Bariloche.")

for (let excursion = 1; excursion <= 1; excursion++) {
    let ingresarNombre = prompt("Ingresar su nombre completo")
    console.log(`¡Hola ${ingresarNombre}!`)
    let transporte = prompt("Tenemos como medios de transporte aviones y micros para esta oferta de viaje, por favor escriba avion o micro segun su preferencia").toLowerCase()

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

    if ((transporte == "micro") || (transporte == "avion")) {
        alert(`Usted tiene la reserva ${excursion} para viajar a Bariloche en ${transporte} bajo el nombre ${ingresarNombre}`)
    } else {
        alert("No contamos con este transporte, por favor comunicarse")
    }
}

console.log("Hasta pronto <3")

