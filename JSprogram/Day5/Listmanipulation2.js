//Program to remove duplicates from a list

let list1 = [3,63,24,3,72,3,24]
console.log( [...new Set(list1)])//[ 3, 63, 24, 72 ] Here we using spread operator(...) and set method to remove duplicate elements
console.log(new Set(list1))//Set(4) { 3, 63, 24, 72 }

//another way
const originalArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [];

for (const item of originalArray) {
  if (!uniqueArray.includes(item)) {
    uniqueArray.push(item);
  }
}

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// Write a program to check if a list is empty.

!list1?console.log("list is empty") : console.log("list is not empty")  //list is not empty
if(list1) console.log("list is not empty")
else console.log("list is empty") // list is not empty

// Write a program to concatenate two lists.

const shiro = [4,26,73,34]
let newlist = list1.concat(shiro); // concat is a method use to concatenate two arrays
console.log(newlist);
//or
console.log([...list1,...shiro])

// Write a program to count the number of occurrences of an element in a list.

let elementtocount = 3; // here we giving 3 to know how many 3's occur in the array
let count = 0;
for(let i=0;i<list1.length;i++){
    if(list1[i] === elementtocount){
        count++
    }
}
console.log(count);
