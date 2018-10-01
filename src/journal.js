// export var Entry(inputtedEntry) =  {
//   wordCount: function() {
//     var words = inputtedEntry.split(" ");
//     return words.length;
//   }
// }
// var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z', 'qu'];
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

  console.log(filteredArray);

  return filteredArray.length;
}
