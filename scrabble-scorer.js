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
   let response = input.question("Let's play some scrabble! Enter a word: ");
   return response
};

let newPointStructure;

let simpleScorer = {
   name: "Simple Scorer",
   description: "Each letter is 1 point",
   scoreFunction: function simpleScorer(word){
   word = word.toUpperCase();
	let letterPoints = "";

   for(let i = 0; i < word.length; i++){
      letterPoints += `Point for ${word[i]} : 1\n`
   }
   
   return letterPoints
}
}

let vowelBonusScorer = {
   name: "Bonus Vowel",
   description: "Vowels are 3 pts, consonants are 1 point",
   scoreFunction: function vowelBonusScorer(word){
   word = word.toUpperCase();
	let letterPoints = "";
   
   for(let i = 0; i < word.length; i++){
      if(vowels.includes(word[i])){
         letterPoints += `Points for ${word[i]} : 3\n`
      }
      else{
         letterPoints += `Point for ${word[i]} : 1\n`
      }

   }
   return letterPoints
}
}

let scrabbleScorer = {
   name: "Scrabble Scorer",
   description: "Different character have different points",
   scoreFunction: function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }
}

const scoringAlgorithms = [simpleScorer, vowelBonusScorer, scrabbleScorer];

function scorerPrompt() {
   let scorer = input.question("Which scoring function would you like to use: [0] = Simple Scorer, [1] = Vowel Bonus, [2] = Scrabble, type a number: ")
   return scorer
}

function transform() {};

function runProgram() {
   let word = initialPrompt()
   console.log(scoringAlgorithms[scorerPrompt()].scoreFunction(word));
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
