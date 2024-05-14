const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Get the button element
const btn = document.getElementById("btn");
// Get the color element
const color = document.querySelector(".color");

// Add event Listener to the button
btn.addEventListener("click", () => {
    // Seleccionando un color hexadecimal aleatorio
    const colorPicked = getRandomHexColor();
    // Cambiar el color del body
    document.body.style.backgroundColor = colorPicked;
    // Cambiar el color de texto
    color.textContent = colorPicked;
});

// Función para obtener un color hexadecimal aleatorio
function getRandomHexColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexColor;
}