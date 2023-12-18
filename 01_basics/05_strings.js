const name = "Kaustav";
const repoCount = 50;

// console.log(`My name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('kaustav-majumdar');

// console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  kaustav   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://kaustav.com/kaustav%20majumdar"

console.log(url.replace("%20", "-"));

console.log(url.includes('hitesh'))

console.log(gameName.split('-'));
