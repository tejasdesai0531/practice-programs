// Find the Sum of Digits in a Number

function sumOfDigits(num) {
    var sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumOfDigits(12345)); // 15
