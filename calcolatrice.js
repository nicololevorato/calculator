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
