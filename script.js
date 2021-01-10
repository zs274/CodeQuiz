// QUESTIONS
var quiz = [{
    main: "Commonly used data types do not include:",
    options: ["strings()", "booleans()", "alerts()", "numbers()"],
    answer: "alerts()"
},
{
    main: "The condition in an if / else statement is enclosed within ____",
    options: ["quotes()", "curly brackets()", "parentheses()", "square brackets()"],
    answer: "parentheses()"
},
{
    main: "Arrays in JavaScript can be used to store ____",
    options: ["numbers and strings()", "other arrays()", "booleans()", "all of the above()"],
    answer: "all of the above()"
},
{
    main: "What does DOM stand for?",
    options: ["Document Object Model()", "Display Object Management()", "Digital Ordinance Model()", "Desktop Oriented Mode()"],
    answer: "Document Object Model()"
},
{
    main: "What is used to add styling to a web page?",
    options: ["HTML()", "CSS()", "Python()", "JavaScript()"],
    answer: 'CSS()'
},
]

// creating variables 
var timer = document.getElementById("timer");
var startButton = document.getElementById('start-btn')
var questionElement = document.getElementById('everything')
var answerButtonsElement = document.getElementById('answers')


var timeLeft = 0;
var score = 0;
var question = -1;

startButton.addEventListener('click', start) 


// function to make the timer start after pressing the button
function start() {
    timeLeft = 60;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
    }, 1000);

    startButton.classList.add('hide')
    questionElement.classList.remove('hide')

    nextQuestion();

    if (timeLeft === 0) {
        clearInterval(timer);
        score();
    }
}



// //ends game if timer stops
// function end() {
//     clearInterval(timer);
//     var quizContent = `
//     <h1>Good Job!</h1>
//     <h2>Your score is `+ score`</h2>
//     <input type="text" id="initials" placeholder="Initials"> 
//     <button onclick="setScore()">Set score!</button>`;
//     document.getElementById("mainQuiz").innerHTML = quizContent;
// }

// // stores data on local storage
// function storeScore() {
// localStorage.setItem("highscore", score);
// localStorage.setItem("highscoreName", document.getElementById('initials').value);
// getScore();
// }

// function getScore() {
//     var quizContent = '
//     <h2>' + localStorage.getItem("highscoreName"'
// }