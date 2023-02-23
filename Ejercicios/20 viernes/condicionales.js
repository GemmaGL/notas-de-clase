/*const spanish = "Hola Mundo";
const french = "Bonjour tout le monde";
const english = "Hello World";*/

const pregunta = prompt("Choose a language:");

if (pregunta === "spanish") {
  console.log("Hola Mundo");
} else if (pregunta === "french") {
  console.log("Bonjour tout le monde");
} else if (pregunta === "english") {
  console.log("Hello World");
} else {
  console.log("This is not a language");
}

// contar de 1 a 30
let i = 0;
while (i <= 30) {
  if (i === 10) {
    console.log("ten");
    i++;
  } else if (i === 20) {
    console.log("twenty");
    i++;
  } else {
    console.log(i);
    i++;
  }
}

// contar de 1 al 20 diciendo si es par o impar

let n = 0;
while (n <= 20) {
  if (n % 2 == 0) {
    console.log(`${n} is even`);
    n++;
  } else {
    console.log(`${n} is odd`);
    n++;
  }
}

// CREAR FUNCIONES
//Crear una función que sume dos numeros

function sumNums(num1, num2) {
  console.log(num1 + num2);
}
sumNums(3, 6);
// Crear una función para que indique si el total de caráctere de la string es par o impar

function nameIsOddOrEven(name) {
  if (name.length % 2 === 0) {
    console.log(`${name} has an even number of letters`);
  } else {
    console.log(`${name} has an odd number of letters`);
  }
}

const name1 = "churreria";
console.log(nameIsOddOrEven(name1));

let button = document.getElementById("add-item-button");

button.onclick = function () {
  console.log("adding an element to the list");
};

let sendButton = document.getElementById("send-btn");
// move the input inside the function (this step is optional):
sendButton.onclick = function () {
  let input = document.getElementsByTagName("input")[0]; // or leave it as it is, outside
  console.log(input.value);
};

let colChange = document.getElementById("colorchange");
colChange.addEventListener("mouseover", function () {
  colChange.style.backgroundColor = "green";
});
