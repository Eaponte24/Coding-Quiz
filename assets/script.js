var startBtn = document.querySelector('#start-btn');
var timeEl = document.querySelector('.timer');
var quizIntro = document.querySelector('.quiz-intro');
var quizContent = document.querySelector('.quiz-content');
var secondsleft = 70;

var quizQuestions = [
  {
    //index 0
    number: 1,
    question: "Number of primitive data types in Java are?",
    answer: "Eight"
    options: [
      "Six",
      "Seven",
      "Eight",
      "Nine"
    ]
  }
  {
    //index 1
    number: 2,
    question: "Arrays in java are-?",
    answer: "objects"
    options: [
      "Object references",
      "Objects",
      "Primitive data type",
      "None"
    ]
  }
  {
    //index 2
    number: 3,
    question: "Which of the following is not javascript data types?",
    answer: "All of the above"
    options: [
      "Null type",
      "Undefined type",
      "Number type",
      "All of the above"
    ]
  }
  {
    //index 3
    number: 4,
    question: "Why event handlers is needed in JS?",
    answer: "Allows JavaScript code to alter the behaviour of windows"
    options: [
      "Allows JavaScript code to alter the behaviour of windows",
      "Adds innerHTML page to the code",
      "Change the server location",
      "Performs handling of exceptions and occurrences"
    ]
  }
]



// this the timer function
function setTime() {
    
var timerInterval = setInterval(function() {
      secondsleft--;
      timeEl.textContent = secondsleft;
  
      if(secondsleft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      } 
 }, 1000);
}

// when start button is clicked it starts the timer and hides the quiz intro
startBtn.addEventListener('click', function() {
    quizIntro.setAttribute("style", "display: none")
    quizContent.setAttribute("style", "display: block")

    setTime()
})


