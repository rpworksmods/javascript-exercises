const removeFromArray = function(array, ...args) {
    // Filter through array, and check if each item is not included in args
    return array.filter(x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
