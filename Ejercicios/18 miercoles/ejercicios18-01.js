// corrección del lab

//funtions and arrays

//ejercicio 1

const maxOfTwoNumber = (num1, num2) =>{

//v1
    if(num1 === num2){
        console.log(`${num1} & ${num2} are the same number`);
    }
    else if (num1 > num2){
        console.log(`In this case ${num1} is bigger than ${num2}`):
    }
    else {
        console.log(`In this case ${num1} is smaller than ${num2}`);
    }
};
console.log maxOfTwoNumber (3,5);

//v2

const maxOfTwoNumber =(a,b) => {
    return a>b? a : a === b? a: b;
}

// ejercicio 2 buscar la palabra más larga
//matriz
const words =[
    "mistery",
    "brother",
    "aviator"
    "crocodile",
    "pearl",
    "orchard",
    "crackpot"
];
//v1
//función
const findTheLongestWord =(wordArray) =>{
    if(wordArray.length ===0) return null;

    let longestWord;
    //loop to the arry param in order to get longest word
    for (let i=0;i<wordArray.length;i++)
    if(longestWord.length <wordArray[i].length) {longestWord=wordArray[i]}
    return longestWord
}
console.log

let stringToLog = '    JavaScript is fun! ';

console.log(stringToLog.length);
// 23

console.log(stringToLog.trim);
// 'JavaScript is fun!'
console.log(stringToLog.
// ['java', 'cript i', ' fun!']
console.log(stringToLog.toUpperCase);
// 'JAVASCRIPT IS FUN!'
console.log(stringToLog.charAt(19);
// 'f'
console.log(stringToLog.
// 5
console.log(stringToLog.
// 15
console.log(stringToLog.replace("JavaScript","CSS"))
// 'CSS is fun!'

//Ejercicio 2
const original = 'Hello world!';
let stringToChange = 'Hello world!';

console.log(stringToChange.endsWith('o')); // true
console.log(stringToChange.charAt(3)); // 'r'
console.log(stringToChange.includes('hello')); // true
console.log(stringToChange.lastIndexOf('o')); // 4
console.log(stringToChange.indexOf('w')); // -1*z




/* Number methods 1
En un banco quieren hacer una web que muestre cuánto dinero ha ganado al día un usuario. Dicho usuario ha ganado en un mes que tiene 30 días un total de 3100€. ¿Cómo mostrarías esa cifra correctamente para el usuario?
13:22
18/01/2023
Number methods 2
En una página de diseño quieren crear una paleta de colores, para ello quieren coger un elemento representado de forma hexadecimal y sumarle 336655. Si se pasa del valor 255 (en decimal) de la paleta de colores empezará desde 00. Haz un ejemplo con el color #0000FF sabiendo que cada canal R-G-B corresponde, en orden, a las cifras de dos en dos. R = 00, G=00, B=ff.

*/
//Ejercicio 1

let totalGanado = 3100;
const ganadoAlDia = (ganadoMes)=>{
    return (ganadoMes/30).toFixed(2);
};
console.log(`Usted ha ganado ${ganadoAlDia(totalGanado)} Euros al día`);


let totalGanado = 3100;
const ganadoDia (ganadoMes)=> {
    let mes=30;
    return ganadoMes/mes:
};
console.log(`Usted ha ganado ${ganadoDia(totalGanado)} Euros`);

//Ejercicio 2
