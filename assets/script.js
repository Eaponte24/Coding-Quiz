var startBtn = document.querySelector('#start-btn');
var timeEl = document.querySelector('.timer');
var quizIntro = document.querySelector('.quiz-intro');
var quizContent = document.querySelector('.quiz-content');
var secondsleft = 70;



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


