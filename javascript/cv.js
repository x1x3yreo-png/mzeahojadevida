const tituloOriginal = document.title;
const icono = document.querySelector("link[rel='icon']");
const iconoOriginal = icono ? icono.href : null;

// Cuando el usuario sale de la pestaña
window.addEventListener("blur", () => {
    document.title = "¡No te vayas! 🥺";
    if (icono) {
        icono.href = "../Imagenes/triste.png";
    }
});

// Cuando vuelve a la pestaña
window.addEventListener("focus", () => {
    document.title = tituloOriginal;
    if (icono) {
        icono.href = iconoOriginal;
    }
});