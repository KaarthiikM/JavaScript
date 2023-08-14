
/*1. **Number Operations:**
   - Create two variables, `num1` and `num2`, with different numeric values.
   - Perform addition, subtraction, multiplication, and division operations using these variables.
   - Assign the result of each operation to separate variables and log them.*/
   
   let num1 = 10;
   let num2 = 5;

   let sum = num1 + num2;          // 15
   let difference = num1 - num2;   // 5
   let product = num1 * num2;      // 50
   let quotient = num1 / num2;     // 2
   

/*2. **String Manipulation:**
   - Declare a variable `name` with your name.
   - Create a message using string concatenation: "Hello, " + `name` + "!"
   - Convert the message to uppercase and log it.
   - Use the `slice()` method to extract a substring from the message and log it.*/
   
   let name = "Alice";
   let message = "Hello, " + name + "!";
   let upperCaseMessage = message.toUpperCase(); // "HELLO, ALICE!"
   let substring = message.slice(7, 12); // "Alice"
   

/*3. **Boolean Logic:**
   - Declare a variable `isRainy` with a boolean value representing the weather.
   - Declare another variable `hasUmbrella` with a boolean value.
   - Write a conditional statement that checks if it's rainy and you have an umbrella. Log appropriate messages based on the conditions.*/
   
   let isRainy = true;
   let hasUmbrella = false;

   if (isRainy && hasUmbrella) {
     console.log("You can go out, and you have an umbrella.");
   } else if (isRainy && !hasUmbrella) {
     console.log("It's rainy, but you don't have an umbrella.");
   } else {
     console.log("It's not rainy, so you can go out.");
   }
   

/*4. **Undefined and Null:**
   - Declare a variable `x` without assigning a value to it.
   - Log the value of `x` and observe the result.
   - Assign the value `null` to `x` and log it again.
   - Explain the difference between an undefined variable and a variable with a value of null. */

   let x; // undefined
   console.log(x); // undefined

   x = null;
   console.log(x); // null

   // The difference: undefined means the variable is declared but not assigned, while null is an intentional absence of any value.
   

/*5. **Symbol Usage:**
   - Create two variables with symbols as their values.
   - Compare the symbols for equality using the `===` operator and log the result.
   - Explain why the comparison result is `false` for symbols, even if they appear the same.*/
   
   const symbol1 = Symbol("key");
   const symbol2 = Symbol("key");

   let areEqual = symbol1 === symbol2; // false

   // The comparison result is false because each symbol created with Symbol() is unique, even if they have the same description.
   

/*6. **Type Conversion:**
   - Create a variable `numString` with the value `"42"`.
   - Convert `numString` to a number using the `Number()` function and log the result.
   - Convert the number back to a string using the `String()` function and log the result.
   - Explain the concept of type conversion in JavaScript. */

   let numString = "42";
   let num = Number(numString); // Converts string to number
   console.log(num); // 42

   let numBackToString = String(num); // Converts number back to string
   console.log(numBackToString); // "42"

   // Type conversion is the process of converting values from one data type to another, as needed.
   

