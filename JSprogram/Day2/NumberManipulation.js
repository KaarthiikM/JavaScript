//Even or Odd
let x=parseInt(prompt("Enter num:"))
console.log(x%2===0?`${x} is even`:`${x} is odd`)

//First n Odd or Even numbers
let n=parseInt(prompt("Enter n num "))
for(let x=Number(prompt("Enter num  0 or 1:"));x<=n;x+=2){
  console.log(x);
}

//print max of two num
let num1=parseInt(prompt("Enter num1:"))
let num2=parseInt(prompt("Enter num2:"))
num1>num2 ?console.log(num1):console.log(num2)
console.log(Math.max(num1,num2))

console.log(Math.max(4,6,100,11,35));  // We can use to find the maximum of more than two numbers by passing them as separate arguments