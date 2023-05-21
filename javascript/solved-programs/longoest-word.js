// Find the Longest Word in a Sentence

function findLongestWord(sentence) {
    var words = sentence.split(' ');
    var longestWord = '';

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log(findLongestWord('This is a sample sentence')); // 'sentence'
