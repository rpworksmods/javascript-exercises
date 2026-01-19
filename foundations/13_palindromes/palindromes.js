const palindromes = function (string) {
    var newStr = string
                .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                .toLowerCase()
                .replace(/\s+/g, "");
    var reverseString = newStr.split("").reverse().join("").toLowerCase();
    
    if (reverseString == newStr) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
