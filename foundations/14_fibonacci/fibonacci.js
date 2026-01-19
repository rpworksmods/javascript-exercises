const fibonacci = function(num) {
    // Convert num to integer if not already
    num = parseInt(num, 10);
    let initiator = [1, 1];

    // Check if num is 0
    if (num == 0) { return 0; }
    if (num < 0) { return "OOPS"; }

    // Make fibonacci number in array
    for (let i = 0; i < num; i++) {
        // Add the last two values of array together
        let lastTwo = initiator.slice(Math.max(initiator.length - 2, 0))
        let sum = lastTwo.reduce((a, b) => a + b,0)
        
        // Add new number to array
        initiator.push(sum);
    }

    // Get the relevant result and return it
    return initiator[num -1]
};

// Do not edit below this line
module.exports = fibonacci;
