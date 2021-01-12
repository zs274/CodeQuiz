// QUESTIONS
var questions = [{
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
var startPage = document.getElementById('start-page');
var timeLeft = 0;
var score = 0;
var highScores;
var scoreList = [];
var answerOne = document.getElementById("btn1")
var answerTwo = document.getElementById("btn2")
var answerThree = document.getElementById("btn3")
var answerFour = document.getElementById("btn4")


// function to make the timer start after pressing the button
function start() {
    timeLeft = 60;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            alert("Time's Up!");
            quizEnd();
        }

        else if (i === questions.length) {
            clearInterval(timer);
        }

    }, 1000);

    return(score)
}

function setNextQuestion() {

}

function selectAnswer() {



    
}








// function quizEnd() {
// var points = document.createElement("h1");
// var initials = document.createElement("input");
// var submit = document.createElement("button")

// score += timeLeft;
//}