function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(a, b, sign) {
  switch (sign) {
    case "+":
      sum(a, b);
      break;
    case "-":
      sub(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
  }
}
var numeri = document.getElementById("numeri");
let numero = "";
var tasti = document.querySelectorAll(".numero");
for (var i = 0; i < tasti.length; i++) {
  const valoreTasto = tasti[i].textContent;
  tasti[i].addEventListener("click", () => {
    numero += valoreTasto;
    numeri.textContent = numero;
  });
}
var clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  numero = "";
  numeri.textContent = 0;
});
var tasti = document.querySelectorAll(".operazione");
