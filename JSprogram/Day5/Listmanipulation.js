// Write a program to calculate the sum of all the elements in a list.
let a=[1,2,3,4,5]
let sum=0

for(let i=0;i<a.length;i++){
    sum+=a[i]
}
console.log(sum)

// Write a program to sort a list in ascending order.
let a = [34, 6, 92, 54, 13];
console.log(a.sort((a, b) => a - b)); //b-a reverse order

// Write a program to find the largest number in a list
let a=[3,90,2,33,23,65]
let b=a[0]
for(let i=0;i<a.length;i++){
    a[i]>b?b=a[i]:null
}
console.log(b)

let a = [3, 90, 2, 33, 23, 65];
let firstLargest = a[0];
let secondLargest = a[1];

for (let i = 0; i < a.length; i++) {
    if (a[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = a[i];
    } else if (a[i] > secondLargest && a[i] !== firstLargest) {
        secondLargest = a[i];
    }
}

console.log(secondLargest);
