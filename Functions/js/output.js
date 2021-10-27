// Variable that lets me store objects for student classes and then calls a method to load objects into it
let classes = [];
addClasses();

// Function that inputs class information into another function
function addClasses()
{
    buildClass("Web Development", 1, 432, "Mon, Wed", "1:00 - 3:00");
    buildClass("Data Structures", 2, 657, "Mon, Wed", "5:00 - 7:00");
    buildClass("Microeconomics", 3, 123, "Tues, Thur", "7:00 - 8:30");
    buildClass("College Writing", 4, 0, "Online", "N/A");
    buildClass("American Government", 5, 0, "Online", "N/A");
    buildClass("Institute", 6, 0, "Online", "N/A");
}

// Function that takes in the object information, sets it to a new object, and adds it to the classes array
function buildClass(className, classID, classRoomNumber, classDate, classTime)
{
    let studentClass =
        {
            name: className,
            id: classID,
            room: classRoomNumber,
            days: classDate,
            time: classTime
        };
    classes.push(studentClass);
}

// Function that clears previously displayed class and then selects a new one to be displayed at random
function displayClass()
{
    clearItem();

    let randomIndex = Math.floor((Math.random() * classes.length));
    let studentClass = classes[randomIndex];

    document.getElementById("information").innerHTML = classToString(studentClass);
}

// Simply clears the text within an HTML element
function clearItem()
{
    document.getElementById("information").innerHTML = "";
}

// Takes input of an object, then returns the object as a string to display to the user
function classToString(studentClass)
{
    let classString = "Class: " + studentClass.name.toString() +
        " | Class ID: " + studentClass.id +
        " | Room Number: " + studentClass.room +
        " | Days: " + studentClass.days +
        " | Time: " + studentClass.time
    return classString;
}