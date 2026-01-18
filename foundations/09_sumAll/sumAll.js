const sumAll = function(min, max) {
    // Check if full integer and whether is a positive number
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";

    // Get whether a or b is bigger, and reverse if needed
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    
    // Iterate through each number between min and max and add to the sum value
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
