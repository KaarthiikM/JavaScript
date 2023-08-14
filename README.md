# JavaScript

| Variable Declaration|
| ------------------- |
| Using Var,let,const |
| Scope,Hoisting  |
| Re-declaration and Re-assignment  |



`var`, `let`, and `const` are keywords used for variable declaration in JavaScript. They differ in terms of scope, hoisting, and reassignment capabilities. Here's an explanation of each:

1. **`var`:**
   - Variables declared with `var` are function-scoped or globally scoped, but not block-scoped. This means they are accessible throughout the entire function or globally if declared outside any function.
   - Variables declared with `var` are hoisted to the top of their scope, which means you can use them before they're declared, but their value will be `undefined`.
   - `var` variables can be redeclared and reassigned.
   ```javascript
   function example() {
     var x = 10;
     if (true) {
       var x = 20; // This changes the value of the outer x as well
     }
     console.log(x); // 20
   }
   ```

2. **`let`:**
   - Variables declared with `let` are block-scoped, which means they're only accessible within the block they're defined in.
   - `let` variables are not hoisted, so you can't use them before they're declared.
   - `let` variables can be reassigned but not redeclared within the same scope.
   ```javascript
   function example() {
     let y = 30;
     if (true) {
       let y = 40; // This doesn't affect the outer y
       console.log(y); // 40
     }
     console.log(y); // 30
   }
   ```

3. **`const`:**
   - Variables declared with `const` are block-scoped, like `let`.
   - `const` variables must be assigned a value at the time of declaration and cannot be reassigned.
   - `const` variables are not hoisted and have the same scoping rules as `let`.
   ```javascript
   function example() {
     const z = 50;
     if (true) {
       const z = 60; // This doesn't affect the outer z
       console.log(z); // 60
     }
     console.log(z); // 50
   }
   ```

For modern code, it's generally recommended to use `let` and `const` over `var`. Use `let` when you need to reassign a variable's value, and use `const` when the value shouldn't change after assignment. This practice helps improve code readability and maintainability.
