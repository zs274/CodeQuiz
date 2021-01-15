// QUESTIONS
var questions = [
    {
        question: 'Commonly used data types do not include:',
        answers: [
            { text: 'strings', correct: false },
            { text: 'booleans', correct: false },
            { text: 'alerts', correct: true },
            { text: 'numbers', correct: false },
        ],
    },

    {
        question: 'The condition in an if / else statement is enclosed within ____',
        answers: [
            { text: 'quotes', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'parentheses', correct: true },
            { text: 'square brackets', correct: false },
        ],
    },

    {
        question: 'Arrays in JavaScript can be used to store ____',
        answers: [
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true },
        ],
    },

    {
        question: 'What does DOM stand for?',
        answers: [
            { text: 'Document Object Model', correct: true },
            { text: 'Display Object Management', correct: false },
            { text: 'Digital Ordinance Model', correct: false },
            { text: 'Desktop Oriented Mode', correct: false },
        ],
    },

    {
        question: 'What is used to add styling to a web page?',
        answers: [
            { text: 'HTML', correct: false },
            { text: 'CSS', correct: true },
            { text: 'Python', correct: false },
            { text: 'JavaScript', correct: false },
        ],
    },
];

// creating variables 
// var currentQuestion = 0;
var timerElement = document.getElementById("timer");
var timer;
var timeLeft = 0;
var scoreButton = document.getElementById("scores-btn");
var questionContainer = document.getElementById('question-container');
var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var shuffle;
var currentQuestion;
var questionEl = document.getElementById('question');
var answerButtonsEl = document.getElementById('answer-buttons');
var introText = document.getElementById('intro')

// function to make the timer start after pressing the button
function start() {
    startButton.classList.add('hide')
    introText.classList.add('hide')
    shuffle = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();

    timeLeft = 60;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        // if time runs out
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's Up!");
            quizEnd();
        }
        // If all questions are answered before time runs out
        else if (currentQuestion === questions.length) {
            clearInterval(timer);
        }

    }, 1000);

    return (score);
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffle[currentQuestion]);

}
function next() {
    currentQuestion++
    setNextQuestion()
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsEl.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffle.length > currentQuestion +1 ) {
        nextButton.classList.remove('hide')
    } else {
        scoreButton.innerText = "View Scores"
        scoreButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


//function highscore
//after quiz ends, needs a space to input initials to store them on local storage
//bootstrap form for the initials 
// needs to use local storage JSON