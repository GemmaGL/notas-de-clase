//console.log ("FUNCIONA");
//let createElement = document.createElement("div");
//console.log (createElement);
let newElement = document.createElement("p");
let newVar = document.querySelector("body").appendChild(newElement);
console.log(newElement);

//ejercicio 2//
let div = document.createElement("div");
div.setAttribute("id","nested");
// o div.id="nested";
console.log(div);


// insertBefore (2 parámetros:)
const parentEl = document.getElementById("parent");
const firstEl = document.getElementById("firstchild");
let createElement = document.createElement("div");
let innerTEXT = createElement.innerText="I love Javascript";
parentEl.insertBefore()

// está relacionado con el doc 14-dom.html


// como reemplazar un elementp hijo
let firstChildElement = document.querySelector("#firstchild");
const parentElReplaceChild = document.getElementById("parent");

let cElementReplaceChild = document.createElement("div");
let innerTextReplaceChild = (newElement.innerText = "I love snowboarding");

parentElReplaceChild.replaceChild(newElement, firstChildElement);


// como eliminar a un hijo

let removeParentElement = document.querySelector("#parent");
let whatWeWillRemove = document.querySelector("removeMe");
removeParentElement.removeChild()
