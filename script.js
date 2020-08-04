


//Questions

var questions = [
  {
    q: "Who was the second President of the United States?",
    choices:["John Adams", "Abe Lincoln", "GW", "Eisenhower"],
    answer:0
}, 

{
  q: "Who is the wielder of the Master Sword?",
choices:["Mario", "Samus", "Zelda", "Link"],
answer:2
}, 


{q: "What is the capital of Texas?",
choices:["Houston", "Dallas", "Moscow", "Austin"],
answer:3
}, 

{
  q: "Who would win in a Battle Royale?",
choices:["Superman", "Ant-Man", "Batman", "Thanos"],
answer:2
},

{
  q: "Who was the first man on the moon?",
choices:["Aldrin", "Armstrong", "Putin", "Trump"],
answer:2
}
]



 //Button to Start

var heading=document.createElement("h2")
heading.textContent = "Click start to begin the Quiz!"
document.getElementById("intro").appendChild(heading)




//Setup
var afterClick = document.querySelector(".afterClick")
var beforeClick = document.querySelector('.beforeClick')
var startButton = document.querySelector(".start");
var homeBox = document.querySelector(".begin");
var questionContainer = document.querySelector(".question-container")

var questionNumber = document.querySelector(".question-no");
var questionText = document.querySelector(".question-text");
var choiceContainer = document.querySelector(".choice-container");

var questionCounter = 0;
var currentQuestion;
var questionsLeft = [];
var answersLeft = [];


// start button remove

      function startQuiz() {
        afterClick.classList.add("hide")
        beforeClick.classList.remove("hide")
        inputQuestions();
     }






//Setup for Questions - Send to HTML
function inputQuestions(){
  var totalQuestions = questions.length;
  for (let i = 0; i<totalQuestions; i++){
    questionsLeft.push(questions[i])
  }
}

function nextQuestion(){
  questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + questions.length;

  var questionIndex = questionsLeft[Math.floor(Math.random() * questionsLeft.length)]
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;

  var index1 = questionsLeft.indexOf(questionIndex);
questionsLeft.splice(index1,1);

  
  // Setup for Answers
  
  var optionsLength = currentQuestion.choices.length

  for (let i = 0; i<optionsLength; i++ ){
      answersLeft.push(i)
  }





//Send Answers to HTML
  for (let i = 0; i<optionsLength; i++ ){

      var answerIndex = answersLeft[Math.floor(Math.random()*answersLeft.length)];
      
      var index2 = answersLeft.indexOf(answerIndex);
      answersLeft.splice(index2,1);
  
    var choice = document.createElement("div");
    choice.innerHTML = currentQuestion.choices[answerIndex];
    choice.id = i;
    choice.className = "choice";
    choiceContainer.appendChild(choice)

    //Correct Answer Choice
    // option.setAttribute("onclick", "getResult(this)");

    
  }
  questionCounter++
  
}


function resultsNew (element){
  var id = parseInt(element.id);
    if (id === currentQuestion.answer){
      element.classList.add("Correct!")
    } else {
     element.classList.add("Incorrect!")
    }


}

// Next Function to End
function next(){
    if(questionCounter === questions.length){
      console.log("Game Over")
    } else {
      nextQuestion();
    }
}




window.onload = function(){

  inputQuestions();
  nextQuestion();
}

























