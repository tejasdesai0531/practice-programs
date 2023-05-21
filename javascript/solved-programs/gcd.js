// Find the GCD (Greatest Common Divisor) of Two Numbers

function findGCD(num1, num2) {
    while (num2 !== 0) {
        var temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

console.log(findGCD(24, 36)); // 12
