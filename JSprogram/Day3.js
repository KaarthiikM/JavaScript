// Write a program to calculate the sum of the first 10 natural numbers.

let sum = 0;
for(let i=1;i<=10;i++){  
    sum+=i;
}
console.log(sum);
// Alternatively we can use sum of n natural number => n*(n+1)/2
let n = 10;
let naturalnumber = n*(n+1)/2;
console.log(naturalnumber);
//sum of cubic series for n terms formula 1^3+2^3+3^3+...+N^3 = [n(n+1)/2]^2
//sum of square series for n terms [n(n+1)(2n+1)]/6

// Write a program to find the factorial of a number.

let num = 5;
let factorial = 1;
for(let i=num;i>=1;i--){  //Oh yeah c'mon let's Goooo!
    factorial*=i;
}
console.log(factorial)

// Write a program to reverse a string. 

let thor = "Loki";
let rev = "";
for(let i=thor.length-1;i>=0;i--){
    rev+=thor[i];    // Here we using thor[i] to locate the index value and print
}
console.log(rev);
//The coolest way to reverese in js using below code !
console.log(thor.split("").reverse().join(""));
