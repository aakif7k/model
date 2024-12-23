
function addTwoNumbers(num1, num2) {
    return num1 + num2;
  }
  
  // Inputs
  let number1 = parseFloat(prompt("Enter the first number: "));
  let number2 = parseFloat(prompt("Enter the second number: "));
  
  // Calculate the sum
  let sum = addTwoNumbers(number1, number2);
  
  // Display the sum
  console.log("The sum of " + number1 + " and " + number2 + " is " + sum);
  