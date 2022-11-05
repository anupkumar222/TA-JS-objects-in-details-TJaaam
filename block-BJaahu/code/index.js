// function createQuestion(title, option, correctAnswerIndex) {
//     let question = {};
//     question.title = title;
//     question.option = option;
//     question.correctAnswerIndex = correctAnswerIndex;
//       question.isAnswerCorrect = function(index) {
//         return  index === this.correctAnswerIndex;
//       },
       
//        question.getCorrectAnswer = function() {
//           return this.option[this.correctAnswerIndex];
//       }
//       return question;
// }
// - Prototypal pattern

// function createQuestion(title, option, correctAnswerIndex) {
//     let question = Object.create(questionMethod);
//     question.title = title;
//     question.option = option;
//     question.correctAnswerIndex = correctAnswerIndex;
//     return question;
// }

// let questionMethod = {
//     isAnswerCorrect: function(index) {
//         return  index === this.correctAnswerIndex;
//       },
       
//        getCorrectAnswer: function() {
//           return this.option[this.correctAnswerIndex];
//       }
// };

// test

// let firstQuestion =  createQuestion(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
//   );
//   let secondQuestion =  createQuestion(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
//   );

  // Pseudoclassical Pattern 

//   function CreateQuestion(title, option, correctAnswerIndex) {
    
//     this.title = title;
//     this.option = option;
//     this.correctAnswerIndex = correctAnswerIndex;
    
// }

// CreateQuestion.prototype = {
//     isAnswerCorrect: function(index) {
//         return  index === this.correctAnswerIndex;
//       },
       
//        getCorrectAnswer: function() {
//           return this.option[this.correctAnswerIndex];
//       }
// };

// let firstQuestion =  new CreateQuestion(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
//   );
//   let secondQuestion =  new CreateQuestion(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
//   );

// using class

class question {
    constructor(title, option, correctAnswerIndex) {
        this.title = title;
        this.option = option;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswerCorrect(index) {
     return  index === this.correctAnswerIndex;
              }
               
    getCorrectAnswer() {
      return this.option[this.correctAnswerIndex];
              }
}

let firstQuestion =  new question(
        'Where is the capital of Jordan',
        ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
        1
      );
      let secondQuestion =  new question(
        'Where is the capital of Jamaica',
        ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
        2
      );
    