const reverseString = function(string) {
    // Make string into array (seperate letters with splice or whatever)
    let array = string.split('');

    // Use arr.sort to sort in opposite order
    array = array.reverse();

    // Return output as joined string
    return array.join("");
};

// Do not edit below this line
module.exports = reverseString;
