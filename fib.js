//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	if (isNaN(intCount) || intCount < 2 || intCount > 100) //Tests to see if the input is valid: Not a Number, Less than 2, Greater than 100
    {
        alert ("This is not an acceptable value, \n Please try again."); //If the if-statement conditions as true user is alerted
        $("total_fib").value = ""; //DOM field is blanked out after invalid entry
    }
    else //If if-statement conditions are false else-statement runs
    {   
	var i = 0;  // sets the first number in the Fibonacci series to 0
	var j = 1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = i + " " + j;//initialize the Fibonacci series output to include the first two numbers

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 

        while (intCount > 2) 
        {
            k = i + j;
            i = j;
            j = k;
            stringOutput = stringOutput + " " + k;
            intCount--;
        } //Closes while loop once intCount > 2 is no longer true
        
    }//Closes if statement
    return $("output").value = stringOutput; //Returns stringOutput as the DOM "output" value
}

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  