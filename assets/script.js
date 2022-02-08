const startButton = document.getElementById('start-btn')
const welcome = document.getElementById('welcome')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerElement = document.getElementById('timer')
var timerLeft = 50;
var round = 0;
var timerInterval;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

console.log(answerButtonsElement)


// start game function
function startGame() {
  welcome.classList.add('hide')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  timerInterval = setInterval(function() {
      if (timerLeft > 0 ) {
          timerLeft--;
          timerElement.innerText = "You Have " + timerLeft + " Seconds";
      } else {
          endOfQuiz()
      }
  }, 1000);
  setNextQuestion()
}

// next question function 
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}


function showQuestion(questions) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
  
  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  // highscore function 
  //save to local storage function 
//   function saveScore () {
      
// }

// select answer
function selectAnswer(event) {
    
}

function endOfQuiz() {
    clearInterval(timerInterval);
    timerElement.innerText = ""
    startGame()
}

// create questions object
const questions = [
    {
        question: 'What is the greatest video game of all time?',
        answers: [
            {text: 'Halo 3', correct: true},
            {text: 'The Witcher 3', correct: false},
            {text: 'Destiny 1', correct: false},
            {text: 'Skyrim', correct: false} 
        ],
    },
    {
        question: 'What is the best Movie of all time?',
        answers: [
            {text: 'Bourne identity', correct: false},
            {text: 'Spider-man No Way Home', correct: false},
            {text: 'Iron Man', correct: true},
            {text: 'John Wick 3', correct: false} 
        ]
    },
    {
        question: 'Who is the best boxer of all time?',
        answers: [
            {text: 'Muhammid Ali', correct: true},
            {text: 'Mike Tyson', correct: false},
            {text: 'Jake Paul LOL', correct: false},
            {text: 'Floyd Mayweather', correct: false} 
        ]
        
    },
    {
        question: 'What is the best coding language of all time?',
        answers: [
            {text: 'JavaScript', correct: true},
            {text: 'Python', correct: false},
            {text: 'C#', correct: false},
            {text: 'Go', correct: false} 
        ]
    },
];
console.log(questions)