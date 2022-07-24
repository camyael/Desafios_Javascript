let precio, opciones

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
