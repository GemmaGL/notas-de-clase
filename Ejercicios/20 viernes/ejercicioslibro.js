let counter = 0;
let tri= "#";
while (counter <7) {console.log (tri); tri = tri + "#" ; counter++
    
}

// con for

let tri1="#";
for(let i= 1; i<7; i++) {console.log(tri1); tri1=tri1+"#"};

ejercicio 2


for (let i=1; i<=100; i++){
    if (i % 3 === 0) {console.log("Fizz")};
    if (i % 5 === 0) {console.log("Buzz")};
    if (i % 3=== 0 && i % 5=== 0) {console.log ("FIZZBUZZ");}
    else {console.log(i);}
}

let numbers=1; 
for (let i=1; i<=100; i++){
    if ((numbers % 3 === 0) && (numbers % 5===0)){console.log("Fizz");}; 
}

//else if (numbers % 5 ===0){console.log("Buzz");numbers++} ; else {
    console.log(numbers); numbers ++ };

    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
      }


      // ejercicio 3

      let gemma= " # # # #\n# # # # \n # # # #\n# # # # \n# # # # \n # # # #\n# # # # \n # # # #";
      console.log (gemma);

      // funcion para el ejercicio 3

      let gemma=" # # # #";
      let andres= "# # # # ";
      for (let i=1; i<=8; i++){
        if(i % 2 === 0)(console.log(andres));
        else (console.log(gemma));
      }


      // 

      const power = function(base,exponent){
        let result=1;
        for(let i=1;i<=exponent; i++){
            result *=base;
        }
        return result;
      }
console.log (power(2,10));

function chichen (){
    return egg ();
}
    function egg (){
        return chichen ();
    }
    console.log(chichen() + "came first.");


function multiplier (factor){
        return number => number*factor;
    }
    let twice=multiplier(2);
    console.log(twice(5));


    function printTotalFarmInventory (cows){
        let cowsTotal = String(cows);
        if(cowsTotal.length==2){cowsTotal="0"+ cowsTotal}
        if (cowsTotal.length==1){cowsTotal="00"+ cowsTotal}
        console.log(`${cowsTotal} Cows`)
    }
    printTotalFarmInventory(2);

    let chickenTotal = String(chickens);

function mathmins(num1, num2) {
    let smallNum1 = Number(num1)
    let smallNum2 = Number(num2)
    if(num1<=num2){console.log(`The minimum is ${smallNum1}`);}
    else{console.log(`The small number is ${smallNum2}`);}

}
mathmins(4,8);

function min(a, b) {
    if (a < b) return a;
    else return b;
  }

function isEven (num3){
    let evenNum = Number(num3)
    let oddNum = Number(num3)
    if(num3 % 2===0) {console.log(`The number ${evenNum}is even`);}
    else {console.log(`The number ${oddNum} is odd`);}
}
isEven (50);

function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);

function isBCapital (word){
    let totalB = String(word)
    for (i=1;i<=word.length;i++){
        totalB=
    }

}

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }

  
  function sumRange (start,end){
    let numArray = [];
    while (start <= end) {
        numArray.push([start]);
        start=start +1;
        
    }
  }
  console.log(sumRange(4,8));



  let labels = [];
  repeat(5, i=>{
    labels.push(`Unit ${i+1}`);
  });
  console.log(labels);