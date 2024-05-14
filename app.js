const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//Get the button element
const btn = document.getElementById("btn");
// Get the color element
const color = document.querySelector(".color");

//Add event Listener to the button 
btn.addEventListener("click", ()=> {
    //Obtener un numero aleatorio entre 0 y 3 
    const randomNumber = getRandomNumber();
    //Seleccionando un elemento 
    //del arreglo colors
    const colorPicked = colors[randomNumber]
    //Cambiar el color del body 
    document.body.style.backgroundColor = colorPicked;
    //Cambiar el color de texto 
    color.textContent = colorPicked;
});

//Funcion para obtener un número aleatorio 
function getRandomNumber(){
return Math.floor(Math.random() * colors.length );
    }