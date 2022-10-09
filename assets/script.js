var startBtn = document.querySelector('#start-btn');
var timeEl = document.querySelector('.timer');
var quizIntro = document.querySelector('.quiz-intro');
var quizContent = document.querySelector('.quiz-content');
var listedOptions = document.querySelectorAll('li');
var nextBtn = document.querySelector('.next-Btn')
var secondsleft = 70;

 var quizQuestions = [
  {
    //index 0
    number: 1,
    question: "How many number of primitive data types in Java are there?",
    answer: "Eight",
    options: [
      "Six",
      "Seven",
      "Eight",
      "Nine"
    ]
  },
  {
    //index 1
    number: 2,
    question: "Arrays in java are-?",
    answer: "objects",
    options: [
      "Object references",
      "Objects",
      "Primitive data type",
      "None"
    ]
  },
  {
    //index 2
    number: 3,
    question: "Which of the following is not javascript data types?",
    answer: "All of the above",
    options: [
      "Null type",
      "Undefined type",
      "Number type",
      "All of the above"
    ]
  },
  {
    //index 3
    number: 4,
    question: "Why event handlers is needed in JS?",
    answer: "Allows JavaScript code to alter the behaviour of windows",
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

      if("Correct!"){
        ;
      }

 }, 1000);
}

var questionCount = 0;

//this is grabbing the questions from the array up top
function showQuestions(index) {
  var quesText = document.querySelector(".quiz-questions");
  var optionsList= document.querySelector(".quiz-options");
  
  var questTag = "<h2>"+ quizQuestions[index].question +"</h2>" ;
  var optionsTag = "<ul><li class='option'>"+ quizQuestions[index].options[0] +"</li><li class='option'>"+ quizQuestions[index].options[1] +"</li><li class='option'>"+ quizQuestions[index].options[2] +"</li><li class='option'>"+ quizQuestions[index].options[3] +"</li></ul>"

  quesText.innerHTML = questTag;
  optionsList.innerHTML = optionsTag;

  // this is applying the optionselected "this" to all the list item options
  var option = optionsList.querySelectorAll(".option")
  for (var i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick","optionSelected(this)");
  }
}

// Next btn function
nextBtn.addEventListener('click', function() {
  if (questionCount < quizQuestions.length - 1) {
    questionCount++;
    showQuestions(questionCount);
  } else {
    console.log("questions completed");
  }
})

function optionSelected(answer) {
  var userAnswer = answer.textContent;
  var correctAnswer = quizQuestions[questionCount].answer;
  

  var correctPop = document.querySelector(".outcome-popup");
  var correctTag = "<h3> Correct! Good job! </h3>";

  var wrongPop = document.querySelector(".outcome-popup");
  var wrongTag = "<h3> Wrong! Next time! </h3>";
  
    if (userAnswer == correctAnswer) {
      correctPop.innerHTML = correctTag;
      
      console.log("Correct!");
    }else{
      wrongPop.innerHTML = wrongTag;
      console.log("Wrong!");
    }

   
}



// when start button is clicked it starts the timer and hides the quiz intro
startBtn.addEventListener('click', function() {
    quizIntro.setAttribute("style", "display: none")
    quizContent.setAttribute("style", "display: block")

    showQuestions(0)
    setTime()   
})



