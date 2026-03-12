//import { apikey, apiUser, apiUser as CustomeUser } from "./util.js";
import * as utilInfo from "./util.js";

console.log("Normal export as an Object ", utilInfo);
//console.log("Custom User", CustomeUser);

/* Array */
const inputData = ["ram", "sita", "ravan"];
const indexData = inputData.findIndex((data) => data === "sita");
console.log(`Index of sita is `, indexData);

/* map */
const resultArray = inputData.map((data) => data + "!");
console.log(resultArray);

const resultObjectArray = inputData.map((data) => ({ text: data }));
console.log(resultObjectArray);

/* Destructuring : Array, Object, Function Parameter */
// Destrucutring allows you to easily  access the values of arrays or objects and assign them to variables

const [firstName, lastName] = ["john", "Deo"];
console.log(firstName + " " + lastName);

const { name, age } = {
  name: "Rojo",
  age: 23,
};
console.log(name, age);

const { info: infoDetails, location: locationDetail } = {
  info: "Rojo",
  location: "UK",
};
console.log(infoDetails, locationDetail);

function storeOrder({ id, status }) {
  console.log(`id is ${id} and status is ${status}`);
}
storeOrder({ id: 123, status: true, paymentDone: true });

/* Spread Operator : Array, Object */
const userData = ["age", "company", "stack"];
const userGeo = ["africa", "latin", 102300];
const extendedData = [userData, userGeo];
console.log(extendedData); /* Array of Array*/
const extendedDataFlatValue = [...userData, ...userGeo];
console.log(extendedDataFlatValue);

const geoInfo = {
  lang: "UK",
  age: 34,
};

const extendedGeo = {
  isQualified: true,
  ...geoInfo,
};
console.log(extendedGeo);

/*
const inputPassword = prompt("Input Data");
console.log(inputPassword);
*/

/* Functions */
function execute() {
  console.log("Timer!");
}

setTimeout(execute, 4000);
setTimeout(() => {
  console.log("Timer!!!!");
}, 3000);

function greet(inputFunction) {
  inputFunction();
}
greet(() => console.log("hi hello!..."));

/* Other Important Function */
// slice - returns a shallow copy of a portion. start & end(not included)
const infoData = ["a", "b", "c", "d"];
const resultinfoData = infoData.slice(1, 3);
console.log(resultinfoData);

// splice -changes the content of an array in place
const stringData = ["a", "b", "c", "d"];
// stringData.splice(1, 0, "e");
// console.log(stringData);
stringData.splice(4, 1, "g");
console.log(stringData);
