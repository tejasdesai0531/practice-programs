// Count Vowels in a String:

function countVowels(str) {
    var count = 0;
    var vowels = 'aeiou';

    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('Hello World')); // 3
