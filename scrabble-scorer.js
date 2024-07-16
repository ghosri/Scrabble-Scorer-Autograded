// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

const vowels = ["A", "E", "I", "O", "U"]


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let response = input.question("Let's play some scrabble! \nEnter a word to use: ");
   return response
};

let newPointStructure = transform(oldPointStructure);

let simpleScorer = {
   name: "Simple Scorer",
   description: "Each letter is 1 point",
   scorerFunction: function simpleScorer(word){
      word = word.toUpperCase();
      let letterPoints = 0;
   
      for(let i = 0; i < word.length; i++){
         letterPoints += 1
      }
      
      return letterPoints
   }
}

let vowelBonusScorer = {
   name: "Bonus Vowel",
   description: "Vowels are 3 pts, consonants are 1 point",
   scorerFunction: function vowelBonusScorer(word){
      word = word.toUpperCase();
      let letterPoints = 0;
      
      for(let i = 0; i < word.length; i++){
         if(vowels.includes(word[i])){
            letterPoints += 3
         }
         else{
            letterPoints += 1
         }
   
      }
      return letterPoints
   }
}

let scrabbleScorer = {
   name: "Scrabble Scorer",
   description: "Different character have different points",
   scorerFunction: function oldScrabbleScorer(word) {
      word = word.toUpperCase();
      let letterPoints = 0;
    
      for (let i = 0; i < word.length; i++) {

         letterPoints += Number(newPointStructure[word[i].toLowerCase()])
         
      }
      return letterPoints
    }
}

const scoringAlgorithms = [simpleScorer, vowelBonusScorer, scrabbleScorer];

function scorerPrompt() {
   let scorer = input.question("\nWhich scoring function would you like to use: \n[0] = Simple Scorer \n[1] = Vowel Bonus \n[2] = Scrabble \nEnter the number: ")
   return scoringAlgorithms[scorer]
}

function transform(object) {
   let newObject = {}
   for (item in object){
      for(let i = 0; i < object[item].length; i++){
         newObject[object[item][i].toLowerCase()] = String(item)
      }
   }
   return newObject
};

function runProgram() {
   let word = initialPrompt()
   console.log(scorerPrompt().scorerFunction(word));
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
