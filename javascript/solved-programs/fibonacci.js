function fibonacci(num) {
    var series = [0, 1];

    if (num === 0) {
        return [];
    } else if (num === 1) {
        return [0];
    } else if (num === 2) {
        return series;
    } else {
        for (var i = 2; i < num; i++) {
            series.push(series[i - 1] + series[i - 2]);
        }
        return series;
    }
}

console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
