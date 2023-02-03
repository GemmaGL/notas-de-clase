
// Ejercicio 1 
// Loops 1 - Crea un for loop que cuente de 0 a 100 i en cada iteración sume el valor actual a un resultado total. Al final haz un console.log que printee el resultado.
let num=100;
for (i=0; i<=100; i++){console.log(i);
}

let result=0;
for (i=0; i<=100; i++){
    let result = result + i}
console.log(result);

//--------

2- 
const numbers=[2,84,67,32,5];
let max = 0;
let min=0;

for(let i=0; i<numbers.length;i++){
    if(max < numbers[i]){
        max = numbers[i];
    }
    // comparativa para ver el menor
    if(min> numbers[i]){
        min=numbers[i];
    }
}
console.log(min);
console.log(max);

// em minimo no puede ser 0 pq sino, siempre dará 0 el mínimo. Mejor poner un número más elevado
// la mejor opcion poner
// let max=numbers[0];
// let min=numbers[0];
// empiezas en la primera posición de la array(matriz)
// otra opcion con else if
const numbers=[2,84,67,32,5];
let max = 0;
let min=0;

for(let i=0; i<numbers.length;i++){
    if(min ){} else if(){}
}


// ejercicio 3
//Utiliza un bucle while para imprimir los números pares del 2 al 20.
let numbers=20;
for (let i=0;i<=numbers;i++){
  if(i%2 !=0){continue}
  {console.log(i);}}


//con WHILE
let evenNumber=2;
while (evenNumber <20){
    console.log (evenNumber);
    evenNumber+=2;
}

//opción 2
let evenNumber=2;
whilç(evenNumber<=20){
    if(evenNumber%2 ==0) console.log(evenNumber);
    evenNumber++
}



// ejercicio 4
/*Crea una variable llamada "numeroIngresado" y asignale el valor 0.
Utiliza un bucle do...while para asignar a la variable "numeroIngresado" un número entero obtenido de un array de números [1,2,3,4,5,6,7,8,9,10]. El bucle debe continuar hasta que "numeroIngresado" sea igual a "numeroAdivinar".
Una vez que el bucle finaliza, imprime en la consola el número de iteraciones realizadas.*/

let numeroAdivinar = 7;
let numeroIngresado = 0;
let arrayDeNumeros =[1,2,3,4,5,6,7,8,9,10];
let intentos=0;

do{
    numeroIngresado = arrayDeNumeros[intentos];
    intentos++;
}
while (numeroIngresado != numeroAdivinar);

// LAB VIERNES 9

//EJERCICIO 1 y 2

let hacker1 = "Gemma";
let hacker2= "Angel";
console.log("The driver is "  + hacker1);
// console.log(`The driver is ${hacker1});
console.log("The navigator's name is "  + hacker2);
console.log("-------------------");

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);}
else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);}


//ejemplos de ternarios

hacker1.lenght > hacker2.length
    ? console.log("The driver has the longest name"
    )
    
    :console.log("The navigator has the longest name"
    ); 

//EJERCICIO 3

/*3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".*/
//no me ha salido//
let hacker1 = "Gemma";
let hacker2= "Angel";
console.log(hacker1.toUpperCase());

let reservedName;
for(let i=0; i<=hacker1.length;i++){
    reservedName=hacker1.toUpperCase() + " ";

}
console.log(reservedName);
//v2

let hacker1 = "Gemma";
let hacker2= "Angel";
console.log(hacker1.toUpperCase());

let reservedName;
for(let i=0; i<=hacker1.length;i++){
    reservedName=hacker1.charAt(i);
    reservedName+=

}
console.log(reservedName);

//v3

let hacker1 = "Gemma";
let hacker2= "Angel";
const hacker1spl = hacker1.split("").join(" ").toUpperCase;
console.log(hacker1spl);

let reservedName;
for(let i=0; i<=hacker1.length;i++){
    reservedName+=hacker1[i].toUpperCase().split("");

}
console.log(reservedName);
/*3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first definitely.
What?! You both have the same name?*/

// condicionar con ternarios
//cond ? " " : "";
//c ternario: evalua una condición y si es verdadera, se ejecuta esa expresion
//condition? expresion1 (accion si es tru) : expresion2 (accion si es falso);

// ternario en 3 condiciones//

hacker1.lenght > hacker2.length
    ? console.log("The driver has the longest name"
    )
    
    :hacker1.length === hacker2.length ? console.log("The navigator has the longest name"
    ): console.log("........."); 


    // EJERCICIO 3

/*3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".*/



/*3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first definitely.
What?! You both have the same name?*/



