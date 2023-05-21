function findAverage(arr) {
    var sum = arr.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
    return sum / arr.length;
}

var numbers = [1, 2, 3, 4, 5];
console.log(findAverage(numbers)); // 3