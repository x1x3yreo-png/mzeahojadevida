const tituloOriginal = document.title;
const icono = document.querySelector("link[rel='icon']");
const iconoOriginal = icono ? icono.href : null;

// Cuando el usuario sale de la pestaña
window.addEventListener("blur", () => {
    document.title = "¡No te vayas! 🥺";
    if (icono) {
        icono.href = "../imagenes/triste.jpg"; // Cambia a un icono de alerta (asegúrate de tener esta imagen)
    }
});
//probando la ruta
// Cuando vuelve a la pestaña
window.addEventListener("focus", () => {
    document.title = tituloOriginal;
    if (icono) {
        icono.href = iconoOriginal;
    }
});