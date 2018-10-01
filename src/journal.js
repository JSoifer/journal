var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z', 'qu'];
var vowels = ["a", "e", "i", "o", "u"];

export function Entry(inputtedEntryBody, inputtedEntryTitle) {
  this.inputtedEntryBody = inputtedEntryBody;
  this.inputtedEntryTitle = inputtedEntryTitle;
}

Entry.prototype.count = function() {
  // console.log('working');
  var words = this.inputtedEntryBody.split(" ").length;
  return words;
}

Entry.prototype.consonants = function() {
  var string = this.inputtedEntryBody.split(" ").join('');
  var allTheLetters = string.split("");
  var filteredArray = allTheLetters.filter(myCallBack);

  function myCallBack(el) {
    return vowels.indexOf(el) < 0;
  }

  return filteredArray.length;
}

Entry.prototype.vowels = function() {
  var string = this.inputtedEntryBody.split(" ").join('');
  var allTheLetters = string.split("");
  var filteredVowelsArray = allTheLetters.filter(myCallBackVowels);

  function myCallBackVowels(el) {
    return consonants.indexOf(el) < 0;
  }

  return filteredVowelsArray.length;
}

Entry.prototype.getTeaser = function() {
  var wordArray = this.inputtedEntryBody.split(" ");

  wordArray.forEach(function(word) {
    if (word.includes(".")) {
      var wordIndex = wordArray.indexOf(word);
      console.log(wordIndex);
      wordArray.splice(wordIndex +1);
    }
  })

  if (wordArray.length >= 8) {
    wordArray.splice(8);
  }

  wordArray = wordArray.join(" ");
  console.log(wordArray);
  return wordArray;
}
