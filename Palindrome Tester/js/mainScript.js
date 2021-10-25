// Function that grabs text via a prompt window, processes the text, and calls rest of the functions
function promptUser()
{
    // Grabs text from user
    let userResponse = prompt("Enter your Palindrome and click the ok button!");

    // Test to see if text is empty
    if(userResponse === "")
    {
        alert("Didnt enter anything, try again!");
        return;
    }

    // Creates two new strings, one normal but only a-z 0-9, other is the reverse of it
    let potentialPalindrome = userResponse.toLowerCase().replaceAll(/[\W_]/g, "");
    let reversedPotentialPalindrome = potentialPalindrome.split("").reverse().join("");

    // Removes table contents besides the header
    removeTable();

    // Test to see if the two strings match, aka palindrome
    if(potentialPalindrome === reversedPotentialPalindrome)
    {
        // Is a palindrome, display answer text, count letters, and display table
        document.getElementById("answer").textContent = "Is a Palindrome!";
        document.getElementById("answer").style.color = "#5be14f";
        document.getElementById("userAnswer").textContent = userResponse;
        countLetters(potentialPalindrome.split(""));
        document.getElementById("table").hidden = false;
    }
    else
    {
        // Is not a palindrome, display answer text
        document.getElementById("answer").textContent = "Isn't a Palindrome!";
        document.getElementById("answer").style.color = "#e14f5b";
        document.getElementById("userAnswer").textContent = userResponse;
    }
}

// Function to count letters in a palindrome
// Input is an array of each letter in the palindrome
function countLetters(arrayOfPalindrome)
{
    // Create a new array to hold objects that represent a letter and count of said letter
    let arrayOfLetters = [];

    // Loop to go through every letter in the palindrome
    for(let i = 0; i < arrayOfPalindrome.length; i++)
    {
        // Create a letter object that stores the letter and count of the letter
        let letter = {letter: arrayOfPalindrome[i], count: 1}

        // Test to see if the length of the array is 0, add the first letter and continue
        if(arrayOfLetters.length === 0)
        {
            arrayOfLetters.push(letter);
            continue;
        }

        // Variable to tell if a new letter is being added to arrayOfLetters
        let newLetter = true;

        // Loop to see if letter object already exists within the arrayOfLetters
        for(let j = 0; j < arrayOfLetters.length; j++)
        {
            // Test to see if a letter already exists, set newLetter to false, add 1 to count, and break out of the loop
            if(arrayOfLetters[j].letter === letter.letter)
            {
                newLetter = false;
                arrayOfLetters[j].count += 1;
                break;
            }
        }

        // If letter is not part of arrayOfLetters, add letter object
        if(newLetter)
        {
            arrayOfLetters.push(letter);
        }
    }

    // After counting all the letters, call function to add a row per letter
    arrayOfLetters.forEach(generateTable);
}

// Function that adds a letter object to a table row
function generateTable(item)
{
    // Get table information
    let table = document.getElementById("table");
    let row = table.insertRow(-1);
    let cellLetter = row.insertCell(0);
    let cellCount = row.insertCell(1);

    // Set new row information
    cellLetter.textContent = item.letter;
    cellCount.textContent = item.count;
}

// Function to remove all rows but the header and hide the table
function removeTable()
{
    // Get table information
    let table = document.getElementById("table");
    let rowCount = table.rows.length - 1;

    // Remove all rows except the header
    for(let i = 0; i < rowCount; i++)
    {
        table.deleteRow(-1);
    }

    // Hide the table from the user
    table.hidden = true;
}