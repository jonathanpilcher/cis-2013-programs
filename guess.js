/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
alert ("Lets Play a Game!\n But the Points dont Matter. Lets see who \"WINS\"")

intMin = parseInt(prompt("Please enter a Minimum value for your Guess Range. \n Atleast 0 Must Be Entered."));
   
while (isNaN(intMin) || intMin < 0) 
    {
        alert ("This is not an acceptable value");
        prompt("Please enter a Minimum value for your Guess Range. \n Atleast 0 Must Be Entered.");
        continue;
    }

/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/

intMax = parseInt(prompt("Please enter a Maximum value for your Guess Range. \n Atleast 2 more than your Minimum value."));
    
while (isNaN(intMax) && intMax >= intMin + 2)
    {
        alert ("This is not an acceptable value");
        intMax = parseInt(prompt("Please enter a Maximum value for your Guess Range. \n Atleast 2 more than your Minimum value."));
        continue;
    }

/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */

intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);

// set the loop counter

intCount = 1;
intPoint = 5;
intGuess = parseInt(prompt("What is you Guess \n Between " + intMin + " " + intMax + "?"));

while (isNaN(intGuess) || intGuess <= intMin || intGuess >= intMax)
    {
        alert ("This is not an acceptable guess \n Between " + intMin + " " + intMax + "?");
        intGuess = parseInt(prompt("What is you Guess \n Between " + intMin + " " + intMax + "?"));
        continue;
    }


while (intGuess != intRandom) 
{
    if (intGuess < intRandom) 
    {
     alert("Guess of " + intGuess + " is too low");

    } 
    else 
    {
      alert("Guess of " + intGuess + " is too high");  
    }
    intGuess = parseInt(prompt("What is you Guess \n Between " + intMin + " " + intMax + "?"));
    intCount++;
    intPoint = intCount * intPoint;
}

/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/



/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!\n You earned " + intPoint + " points!");