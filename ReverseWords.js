//reverse of the Words in the sentence
var string = "Welcome to Could Vandana";

//reverse Words
var reverseWords = reverseWords(string)
console.log(reverseWords);

function reverseWords(str) {
  let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}
