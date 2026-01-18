const repeatString = function(string, num) {

    let result = []

    if (num > 0) {
        for (let i = 0; i < num; i++ ) {
            // Get string and insert into result
            result.push(string)
        }
    } else if (num == 0) {
        return ""
    } else {
        return "ERROR"
    }

    return result.join("")
};

// Do not edit below this line
module.exports = repeatString;
