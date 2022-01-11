function sum(a, b) {
// en caso de que no haya argumentos
  if (!a && !b){
    return 0;
  }
  if (!b){
    b=0;
  }
  const total = a + b  

  return total;

}

function subtract(a, b) {
  if (!a && !b){
    return 0;
  }
  if (!b){
    b=0;
  }
  const total = a - b  

  return total;
}

function divide(a, b) {
  if (!a && !b){
    return 0;
  }
  if (a === 0 || b === 0){
    return error("Division por cero");
  }
  const total = a / b  

  return total;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
