const getNthElement = (index, array) => {
  return array[index]
};

const arrayToCSVString = (array) => {
  return array.toString(index)
  
};

const csvStringToArray = (string) => {
  // your code here
};

const addToArray = (element, array) => {
  // your code here
};

const addToArray2 = (element, array) => {
  // your code here
};

const removeNthElement = (index, array) => {
  // your code here
};

const numbersToStrings = (numbers) => {
  // your code here
};

const uppercaseWordsInArray = (strings) => {
  // your code here
};

const reverseWordsInArray = (strings) => {
  // your code here
};

const onlyEven = (numbers) => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = (strings) => {
  const vowels =['a', 'e', 'i', 'o', 'u']

  const wordsWithVowels =[];
  strings.forEach(word => {
   if vowels.includes(word[0]) {wordsWithVowels.push(word);
  }

  })
};

const removeSpaces = (string) => {
  // your code here
};

const sumNumbers = (numbers) => {
  // your code here
};

const sortByLastLetter = (strings) => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
