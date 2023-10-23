function reverseWord(word) {
    var reversed = "";
    for (var i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

function reverseWordInSentence(sentence) {
    var words = [];
    var currentWord = "";
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            words.push(currentWord);
            currentWord = "";
        } else {
            currentWord += sentence[i];
        }
    }
    words.push(currentWord); 

    for (var j = 0; j < words.length; j++) {
        words[j] = reverseWord(words[j]);
    }

    return words.join(" ");
}


var inputSentence = "Raja Aman is learning code";
var reversedSentence = reverseWordInSentence(inputSentence);
console.log(reversedSentence);