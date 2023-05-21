// Factorials of 5 => 1 * 2 * 3 * 4 * 5 => 120
// Factorial of 2 => 1 * 2 => 2
// Factorial of 3 => 1 * 2 * 3 => 6

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5)); // 120