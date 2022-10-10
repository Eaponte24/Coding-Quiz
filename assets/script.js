var startBtn = document.querySelector('#start-btn');
var timeEl = document.querySelector('.timer');
var quizIntro = document.querySelector('.quiz-intro');
var quizContent = document.querySelector('.quiz-content');
var listedOptions = document.querySelectorAll('li');
var nextBtn = document.querySelector('.next-Btn')
var optionsList = document.querySelector(".quiz-options");

var resultsScreen = document.querySelector(".results");
var quitBtn = document.querySelector(".quit-btn");
var saveBtn = document.querySelector(".save-btn");
var usernmeInput = document.querySelector(".username");



var secondsleft = 30;
var playerScore = 0;

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



// this the timer function that when the timer hits zero it will reload the page to retry the quiz
function setTime() {
    
var timerInterval = setInterval(function() {
      secondsleft--;
      timeEl.textContent = secondsleft;
  
      if(secondsleft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        showResults();
      }


 }, 1000);
}

var questionCount = 0;

//this is grabbing the questions from the array up top
function showQuestions(index) {
  var quesText = document.querySelector(".quiz-questions");
  
  
  var questTag = "<h2>"+ quizQuestions[index].number + ". " + quizQuestions[index].question +"</h2>" ;
  var optionsTag = "<ul><li class='option'>"+ quizQuestions[index].options[0] +"</li><li class='option'>"+ quizQuestions[index].options[1] +"</li><li class='option'>"+ quizQuestions[index].options[2] +"</li><li class='option'>"+ quizQuestions[index].options[3] +"</li></ul>"

  quesText.innerHTML = questTag;
  optionsList.innerHTML = optionsTag;

  // this is applying the optionselected "this" to all the list item options
  var option = optionsList.querySelectorAll(".option")
  for (var i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick","optionSelected(this)");
  }
}

// Next btn function, and will show the results at the end of all the questions are cylced through
nextBtn.addEventListener('click', function() {
  if (questionCount < quizQuestions.length - 1) {
    questionCount++;
    showQuestions(questionCount);
    nextBtn.style.display = "none";
  } else {
    console.log("questions completed");
    showResults();
  }
})

// this is checking if what they selected was correct or not and adds the html Correct or Wrong! and adds 10 seconds when you get a question right and subtracts 5 when wrong. as well as the player score is being tracked here
function optionSelected(answer) {
  var userAnswer = answer.textContent;
  var correctAnswer = quizQuestions[questionCount].answer;
  var allOptions = optionsList.children.length;

  var correctPop = document.querySelector(".outcome-popup");
  var correctTag = "<h3> Correct! Good job! </h3>";

  var wrongPop = document.querySelector(".outcome-popup");
  var wrongTag = "<h3> Wrong! Next time! </h3>";
  
    if (userAnswer == correctAnswer) {
      playerScore += 1;
      correctPop.innerHTML = correctTag;
      secondsleft = secondsleft + 10;
      timeEl.innerHTML = secondsleft
      console.log("Correct!");
    }else{
      wrongPop.innerHTML = wrongTag;
      secondsleft = secondsleft - 5;
      timeEl.innerHTML = secondsleft
      console.log("Wrong!");
    }

    // this for loop is adding diabled class to all the list options and the style i have for diabled is the pointer action to do nothing so you cant choose anything after
    for (var i = 0; i < allOptions; i++) {
      optionsList.children[i].classList.add("disabled");
    }

   nextBtn.style.display = "inline";
}

// this function is handling what to say when the player gets certain scores 
function showResults() {
  quizContent.setAttribute("style", "display: none")
  resultsScreen.setAttribute("style", "display: block")

  var scoreText = document.querySelector(".score-text");
   
  if (playerScore > 3) {
      var scoreTag = '<p>Congrats! You got <span>'+ playerScore +'</span> out of 5! Good Job!</p>';
      scoreText.innerHTML = scoreTag;
    }else if (playerScore > 1) {
      var scoreTag = '<p>Great! You got <span>'+ playerScore +'</span> out of 5! Sweet!</p>';
      scoreText.innerHTML = scoreTag;
    }else{
      var scoreTag = '<p>Oof! You only got <span>'+ playerScore +'</span> out of 5! Try again!</p>';
      scoreText.innerHTML = scoreTag;
    }
}

// when start button is clicked it starts the timer and hides the quiz intro
startBtn.addEventListener('click', function() {
    quizIntro.setAttribute("style", "display: none")
    quizContent.setAttribute("style", "display: block")

    showQuestions(0)
    setTime()   
})

quitBtn.addEventListener('click', function() {
  window.location.reload();
})


// highscore script

saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  
  var username = {
    usernmeInput: usernmeInput.value,
    playerScore: playerScore,
    
  };
  
  localStorage.setItem("username", JSON.stringify(username));
  console.log(username);

  submitScore();
  });

  function submitScore() {
    var lastScore = JSON.parse(localStorage.getItem("username"));
    if (lastScore !== null) {
      document.querySelector(".message").textContent = lastScore.usernmeInput + 
      " got a " + lastScore.playerScore
    }
  }

