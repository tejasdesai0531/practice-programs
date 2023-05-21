function isPrime(num) {
    if (num <= 1) {
        return false;
    } else {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(isPrime(17)); // true
console.log(isPrime(20)); // false
