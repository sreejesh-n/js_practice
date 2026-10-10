const a = 10;
const b = 20;

const operation = "-";

let result;

switch (operation) {
  case "+":
    result = a + b;
    break;

  case "-":
    result = a - b;
    break;

  case "*":
    result = a * b;
    break;

  case "/":
    result = a / b;
    break;

  default:
    console.log("Invalid operation");
}

console.log(result);
