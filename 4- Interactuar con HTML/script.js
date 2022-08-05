//SE LE PIDE EL NOMBRE AL USUARIO
const nombre = document.getElementById("nombre")
const usuario = prompt("Ingrese su nombre").toUpperCase()
nombre.innerText = usuario
console.log(`${usuario} ha ingresado`)

// REPRODUCTOR
class Musica {
    constructor(artista, album, publicacion, imagen, link) {
        this.artista = artista;
        this.album = album;
        this.publicacion = publicacion;
        this.imagen = imagen;
        this.link = link;
    }
}

const musica1 = new Musica ("Taylor Swift", "Red (Taylor's Version)", 2021, "./img/red.webp", "https://www.youtube.com/watch?v=PReSQYTFvcs")
const musica2 = new Musica ("Harry Styles", "Fine Line", 2019, "./img/fineline.webp", "https://www.youtube.com/watch?v=olGSAVOkkTI")
const musica3 = new Musica ("Lana del Rey", "Born to Die", 2012, "./img/borntodie.jpg", "https://www.youtube.com/watch?v=TdrL3QxjyVw")
const musica4 = new Musica ("Gracie Abrams", "minor", 2020, "./img/minor.jpg", "https://www.youtube.com/watch?v=eyX5zUI3oq0")

const musicaHTML = document.getElementById("spotify")

const albums = [musica1, musica2, musica3, musica4]

albums.forEach(album => {
    musicaHTML.innerHTML += `
    <div id="reproductor">
    <div class="musica">
        <div class="imagen">
            <img src="${album.imagen}">
        </div>
        <div class="info">
            <h4>${album.album}</h4>
            <h4>${album.artista}</h4>
            <h5>${album.publicacion}</h5>
        </div>

        <div class="musica_botones">
            <a href="#">
                <img src="https://img.icons8.com/ios-filled/50/F25081/rewind.png" class="anterior"/>
            </a>
            <a href="${album.link}" target="_blank">
                <img src="https://img.icons8.com/ios-glyphs/30/F25081/play--v1.png" class="play"/> 
            </a>
            <a href="">
                <img src="https://img.icons8.com/glyph-neue/64/F25081/fast-forward.png" class="siguiente"/>
            </a>
        </div>
    </div>
    `
})

const indicacion = document.getElementsByClassName("indicacion")[0]
indicacion.innerHTML = `Toque el boton de play para ser dirigido a youtube!`