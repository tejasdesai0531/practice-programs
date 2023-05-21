// Check if Two Strings are Anagrams:

function isAnagram(str1, str2) {
    var sortedStr1 = str1.toLowerCase().split('').sort().join('');
    var sortedStr2 = str2.toLowerCase().split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
