function removeDuplicates(arr) {
    var uniqueArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

var numbers = [1, 2, 3, 4, 3, 2, 1, 5];
console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5]
