# 04-WebAPI

This homework stumped me.  I have a bug that I could not particularly figure out and stopped my progress.   

My goal was to setup a quiz with 5 questions. Each question had 4 answers.  As you progressed through the quiz you would be able to see your score at the bottom.   

I wrote my questions in an array then setup the start button and its function to bring up the questions and score box.  I next setup my questions to run on a loop, not repeat, at random and push them to HTML.  This worked fine and the question number updated along with the intended function. 

For my choices/answers I basically had a similar loop which was containted in the nextQuestion function. It was setup for random, to never repeat and appear with the inteded question.  This worked correctly accept for one thing.  This is where I hit a wall.  When clicking next the choices/answers would append and the previous answers questions would stay in HTML. Essentially it was appending each set of choices on top of eachother.  I have not been able to figure out why this has happened.  I wrote some code to recognize the correct answer but decided not to move on since after the first question the choices multiplied and I could not get the correct answer function to work.   

If I could get past that bug i beleive I could have finished this homework in its entirety.  