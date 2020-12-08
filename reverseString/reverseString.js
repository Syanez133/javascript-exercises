const reverseString = function(word) {
    let reverseArray = "";
    let reverseWord = "";
    reverseArray = word.split("");
    reverseArray.reverse();
    reverseWord = reverseArray.join("");
    
return reverseWord;
}

module.exports = reverseString
