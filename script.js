

//Handle This Prompt
// var handleThis = confirm("Are you ready for This?");

//  if (handleThis){
//          alert("Lets get this party started!!!");
//          alert("CLICK START WHEN READY!");
//     }else{
//         alert("Alrighty then, maybe next time!");
//  }

 //Button to Start

 var heading=document.createElement("h1")
 heading.textContent = "Let us now begin the Quiz!"
 document.getElementById("intro").appendChild(heading)

// Start button
 var button=document.createElement("button")
    button.textContent = "Start"
    document.querySelector("#start").appendChild(button)


  //Answer Buttons
  var button=document.createElement("button")
  button.textContent = "A"
  document.querySelector(".button1").appendChild(button)

  var button=document.createElement("button")
  button.textContent = "B"
  document.querySelector(".button2").appendChild(button)

  var button=document.createElement("button")
  button.textContent = "C"
  document.querySelector(".button3").appendChild(button)

  var button=document.createElement("button")
  button.textContent = "D"
  document.querySelector(".button4").appendChild(button)

 

  //Begin Quiz

     var startbutton = document.querySelector("#start")
     var answerEl = document.querySelector("#questioncontainer")

     startbutton.addEventListener("click",beginQuiz)

     function beginQuiz() {
      var startbutton = document.querySelector("#start")
        console.log("Begin")
        startbutton.classList.add("hide")
        answerEl.classList.remove("hide")
           }
          



  //Question Set

  // var questions = [
  //   {
  //     question: " Who would win in a fight between Batman and Superman?"
  //   }
  // ]








  // var questionEl = document.getElementById("question-container");

  // function qOrder(){

  // }






 /*$(".btn").append(button);

var secondsLeft = 0; 

 $(".btn").on("click", function setTime(){

    var timerInterval = setInterval(function() {
        secondsLeft--;
        button.text = secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          sendMessage();
        }

 }, 1000);
 }*/