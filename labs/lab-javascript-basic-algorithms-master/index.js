// Iteration 1: Names and Input
const driver = "Gemma";
const driverPrint = console.log(`The driver's name is ${driver}`);

const navigator = "Andres";
const navigatorPrint = console.log(`The navigator's name is ${navigator}`);

// Iteration 2: Conditionals

if (driver.length > navigator.length) {
  console.log(
    `The driver has the longest name, it has ${driver.length} characters.`
  );
} else if (driver.length < navigator.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigator.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${driver.length} characters!`
  );
}
// Iteration 3: Loops
//3.1
const driverUppercase = driver.toUpperCase();
const driverUppSplit = driverUppercase.split("");
console.log(driverUppSplit);

//3.2
const navigatorReverse = navigator.split("");
const navigatorRevSplit = navigatorReverse.reverse("");
console.log(navigatorRevSplit);

//3.3
const result = driver.localeCompare(navigator, "en-US");

if (result < 0) {
  console.log(`The driver's name goes first.`);
} else if (result > 0) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?str1 and str2 are the same`);
}
