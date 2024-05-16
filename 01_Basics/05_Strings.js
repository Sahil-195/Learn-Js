const name = "sahil"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`hello my name id ${name} and my repo count is ${repoCount}`)

const gameName = new String('sahil-sp');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(1,4);
console.log(newString);

const anotherString = gameName.slice(-5,4);
console.log(anotherString);

const newStringOne = "   sahil   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sahil.com/sahil%20panjwani"

console.log(url.replace("%20","-"));
// console.log(url);

console.log(url.includes("sahil"));
console.log(url.includes("hello"));

console.log(gameName.split("-"));