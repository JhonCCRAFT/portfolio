const contentVentana = document.getElementById("abrir");
const contentRestante = document.getElementById("content-restante");
const ventana = document.getElementById("ventana");

contentVentana.addEventListener("click", () => {
    contentRestante.classList.toggle("mt-10"); // Mueve el contenido hacia abajo
    ventana.classList.toggle("mb-14"); // Agrega espacio debajo de la ventana
});
