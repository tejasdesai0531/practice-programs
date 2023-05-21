// Palindrom means if we reverse anything, it reads the same
// for example
// aba => reverse of aba is aba => so it's palindrome
// abb => reverse of abb is bba => so it's not palindrome 

function isPalindrome(str) {
    var reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome('level')); // true
console.log(isPalindrome('hello')); // false