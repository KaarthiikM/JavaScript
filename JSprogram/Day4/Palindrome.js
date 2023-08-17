//Palindrome or not
let word=prompt("Enter word to check palindrome:").toLowerCase();
let rev=""
for(let i=word.length-1;i>=0;i--){
    rev+=word[i]
}

rev===word ? console.log("its a palindrome"):console.log("its not a palindrome")

// Easiest version
let isPalindrome = gon === gon.split("").reverse().join("");
console.log(isPalindrome ? `${gon} is a palindrome`:`${gon} is not a palindrome`)

function longestPalindrome(s) {
    let longest = '';
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substring = s.substring(i, j + 1);
            if (substring === substring.split('').reverse().join('') && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    
    return longest;
}
console.log(longestPalindrome("babad"));  // Output: "bab" or "aba" (both are valid)
console.log(longestPalindrome("cbbcabc"));   // Output: "cbbc"
console.log(longestPalindrome("a"));      // Output: "a"
console.log(longestPalindrome("ac"));     // Output: "a"
