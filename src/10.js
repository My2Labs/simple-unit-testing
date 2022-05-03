function removeVowelsForWords(words) {
    var result = words.map(function(word) {
        return removeVowelsForWords(word);
    });
    console.log(result)
    return result;
}

module.exports = removeVowelsForWords;