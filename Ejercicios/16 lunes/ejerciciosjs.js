
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

do{
console.log(numeroIngresado);
numeroIngresado++;}

while{numeroIngresado < numeroAdivinado);