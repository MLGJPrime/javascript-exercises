const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) [min, max] = [max, min];
    let sum = 0;
    for (i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumAll("30", 1))

// Do not edit below this line
module.exports = sumAll;
