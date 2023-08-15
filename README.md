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
<hr>


| Primitive DataType |->Are Immutable |->Checks Value |
| ------------------ |------------- | ------------ |
| Number | String | Boolean |
| Undefined | Null | Symbol |

Primitive data types are the building blocks for more complex data structures and values in JavaScript. Unlike objects, primitive values are immutable, which means they cannot be changed directly; any operation on them creates a new value rather than modifying the existing one. Checks value not reference unlike non-primitive.<br><br>
In JavaScript, there are six primitive data types:

1. **Number:**
   Can be int,float,negative,exponential, "NaN", "Infinity".
   ```javascript
   const age = -25;
   const price = -99.99;
   let scientificNum = 1.23e6; // 1.23 * 10^6 (1230000)
   let positiveInfinity = Infinity;
   console.log(positiveInfinity); // Infinity
   console.log(-10 / 0); // -Infinity
   console.log(1e308 * 2); // Infinity
   let result1 = 0 / 0; // NaN(Not a Number)
   let result2 = "abc" * 2; // NaN
   let result3 = Math.sqrt(-1); // NaN
   let nanResult = NaN * 10; // NaN
   let anotherNan = NaN + 5; // NaN
   ```

2. **String:**
   Represents sequences of characters enclosed in single ('') or double ("") quotes.<br> Strings are immutable
   ```javascript
   const name = "Alice";
   const message = 'Hello, ' + name;
   ```
   templating string:
   ```javascript
   console.log(`This template string by ${name}`);
   console.log(`${5+3}`);
   ```

4. **Boolean:**
   Represents true or false values.
   ```javascript
   const isStudent = true;
   const hasPermission = false;
   ```

5. **Undefined:**
   Represents a variable that has been declared but hasn't been assigned a value.
   ```javascript
   let x; // x is undefined
   ```

6. **Null:**
   Represents the intentional absence of any value or object.
   ```javascript
   const noValue = null;
   ```

7. **Symbol:**
   Represents a unique and immutable value, often used as object property keys.
   ```javascript
   const id = Symbol("unique identifier");
   ```
<hr>

| Type Conversions |
| --------------- |
<br>

1. **String to Number:**
   ```javascript
   let str = "42";
   let num = Number(str); // Converts string to number 42
   ```

2. **Number to String:**
   ```javascript
   let num = 42;
   let str = String(num); // Converts number to string 42
   ```

3. **Boolean to String:**
   ```javascript
   let bool = true;
   let str = String(bool); // Converts boolean to string ("true" or "false")
   ```

4. **String to Boolean:**
   ```javascript
   let str = "true";
   let bool = Boolean(str); // Converts string to boolean (true if string is not empty)
   ```

5. **Number to Boolean:**
   ```javascript
   let num = 0;
   let bool = Boolean(num); // Converts number to boolean (false if number is 0, true otherwise)
   ```

6. **Object to String:**
   ```javascript
   let obj = { key: "value" };
   let str = String(obj); // Converts object to string "[object Object]"
   ```

7. **String to Object:**
   ```javascript
   let str = "{ key: 'value' }";
   let obj = JSON.parse(str); // Converts JSON string to object
   ```

8. **Number to Object:**
   ```javascript
   let num = 42;
   let obj = new Number(num); // Converts number to Number object
   ```

9. **Array to String:**
   ```javascript
   let arr = [1, 2, 3];
   let str = arr.toString(); // Converts array to comma-separated string "1,2,3"
   ```

10. **String to Array:**
    ```javascript
    let str = "1,2,3";
    let arr = str.split(","); // Converts comma-separated string to array [1, 2, 3]
    ```
<br>

| parseInt() | Number() |
| -------- | ---------- |

```javascript
parseInt("123"); // Output: 123
parseInt("010"); // Output: 10 (interpreted as decimal, not octal)
parseInt("0xA"); // Output: 10 (interpreted as decimal)
parseInt("12.34"); // Output: 12 (fractional part is ignored)
```

```javascript
Number("123"); // Output: 123
Number("010"); // Output: 10 (interpreted as decimal)
Number("0xA"); // Output: NaN (not a valid decimal number)
Number("12.34"); // Output: 12.34
```
<hr>
