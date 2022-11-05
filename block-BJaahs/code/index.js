// without object
let title = 'Where is the capital of Jordan';
let option = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

function isAnswerCorrect(index) {
  return  index === correctAnswerIndex;
}
 
function getCorrectAnswer() {
    return option[correctAnswerIndex];
}

// Organize using object

let question1 = {
     title: 'Where is the capital of Jordan',
     option: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
     correctAnswerIndex: 1,

      isAnswerCorrect(index) {
        return  index === question1.correctAnswerIndex;
      },
       
       getCorrectAnswer() {
          return question1.option[question1.correctAnswerIndex];
      }
};

// Use a function to create object

function createQuestion(title, option, correctAnswerIndex) {
    let question = {};
    question.title = title;
    question.option = option;
    question.correctAnswerIndex = correctAnswerIndex;
      question.isAnswerCorrect = function(index) {
        return  index === question.correctAnswerIndex;
      },
       
       question.getCorrectAnswer = function() {
          return question.option[question.correctAnswerIndex];
      }
      return question;
}

let firstQuestion = createQuestion('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);
let secondQuestion = createQuestion('Where is the capital of Jamaica', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 2);

//  Convert the function to use `this` keyword

function createQuestion(title, option, correctAnswerIndex) {
    let question = {};
    question.title = title;
    question.option = option;
    question.correctAnswerIndex = correctAnswerIndex;
      question.isAnswerCorrect = function(index) {
        return  index === this.correctAnswerIndex;
      },
       
       question.getCorrectAnswer = function() {
          return this.option[this.correctAnswerIndex];
      }
      return question;
}