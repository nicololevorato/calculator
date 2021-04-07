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
      return sum(a, b);
    case "-":
      return sub(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}
var numeri = document.getElementById("numeri");
var numeroPre = null;
var numero = "";
var operazione = null;
var tastiNumeri = document.querySelectorAll(".numero");
for (var i = 0; i < tastiNumeri.length; i++) {
  const valoreTasto = tastiNumeri[i].textContent;
  tastiNumeri[i].addEventListener("click", () => {
    numero += valoreTasto;
    numeri.textContent = numero;
  });
}
var clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  numero = "";
  operazione = null;
  numeroPre = null;
  numeri.textContent = 0;
});

var tastiOperazioni = document.querySelectorAll(".operazione");
for (var i = 0; i < tastiOperazioni.length; i++) {
  const valoreTasto = tastiOperazioni[i].textContent;
  tastiOperazioni[i].addEventListener("click", () => {
    if (operazione != null && numeroPre != null) {
      numeroPre = operate(parseInt(numero), parseInt(numeroPre), operazione);
      numeri.textContent = numeroPre;
      operazione = valoreTasto;
      numero = "";
    } else {
      numeroPre = numero;
      numero = "";
      operazione = valoreTasto;
    }
  });
}
