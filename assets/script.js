const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex
const nextButton = document.getElementById("next-btn");
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

console.log(answerButtonsElement)


// create questions object
const questions = [
    {
        question: 'What is the greatest video game of all time?',
        choices: [
            {text: 'Halo 3', correct: true},
            {text: 'The Witcher 3', correct: false},
            {text: 'Destiny 1', correct: false},
            {text: 'Skyrim', correct: false} 
        ],
    },
    {
        question: 'What is the best Movie of all time?',
        choices: [
            {text: 'Bourne identity', correct: false},
            {text: 'Spider-man No Way Home', correct: false},
            {text: 'Iron Man', correct: true},
            {text: 'John Wick 3', correct: false} 
        ]
    },
    {
        question: 'Who is the best boxer of all time?',
        choices: [
            {text: 'Muhammid Ali', correct: true},
            {text: 'Mike Tyson', correct: false},
            {text: 'Jake Paul LOL', correct: false},
            {text: 'Floyd Mayweather', correct: false} 
        ]
        
    },
    {
        question: 'What is the best coding language of all time?',
        choices: [
            {text: 'JavaScript', correct: true},
            {text: 'Python', correct: false},
            {text: 'C#', correct: false},
            {text: 'Go', correct: false} 
        ]
    },
];
// start game function
function startGame() {
    console.log("started")
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}
// next question function 
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}


function showQuestion(question) {
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
      nextButton.classList.add('hide')
      while (answerButtonsElement.firstChild) {
          answerButtonsElement.removeChild
          (answerButtonsElement.firstChild)
      }
  }
// highscore function 
//save to local storage function 
function saveScore () {

}

// select answer
function selectAnswer(event) {

}