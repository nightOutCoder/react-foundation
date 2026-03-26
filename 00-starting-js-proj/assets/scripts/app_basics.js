let objectdata = {
  a: 101,
  fun: function (input) {
    console.log("The value is", input);
    return input;
  },
};
console.log(objectdata.fun(1011));

document.addEventListener("click", function click() {
  console.log("clicked!...");
  let receievedInput = confirm("are you sure!");
  console.log("confirm box user input is ", receievedInput);
});

console.log(this); // undefined if script is running in strict mode (or as a module).
function getWindowThis() {
  console.log(this); // undefined if script is running in strict mode (or as a module).
}
getWindowThis();

let arrowFunction = () => {
  console.log("this is arrow this, " + this); // undefined if script is running in strict mode (or as a module).
};
arrowFunction();
