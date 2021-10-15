let buttonCount = 10;
let startTime;
let endTime;

function onStartButton()
{
    alert("A series of buttons will pop up randomly, try to click them all in the fastest time!");
    document.getElementById("startPage").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("gameArea").hidden = false;
    startTime = new Date();
    generateButton();
}

function onGameButton()
{
    buttonCount--;

    if(buttonCount === 0)
    {
        endTime = new Date();

        let timeDifference = Math.abs(startTime.getTime() - endTime.getTime());
        let time = new Date(timeDifference);

        alert("It took you: " + time.getSeconds() + "." + time.getMilliseconds() + " seconds!");

        updateHighscore(parseFloat(time.getSeconds() + "." + time.getMilliseconds()));

        reset();
        return;
    }

    generateButton();
}

function generateButton()
{
    document.getElementById("gameButton").textContent = buttonCount;
    generateRandomSpot();
}

function generateRandomSpot()
{
    let height = Math.floor((Math.random() * 700));
    let width = Math.floor((Math.random() * 700));

    document.getElementById("gameButton").style.margin =
        height + "px " +
        (width - 700) + "px " +
        (height - 700) + "px " +
        width + "px";
}

function reset()
{
    buttonCount = 10;
    document.getElementById("startPage").style.display = "flex"
    document.getElementById("title").style.display = "block";
    document.getElementById("gameArea").hidden = true;
}

function updateHighscore(time)
{
    let rank1 = parseFloat(document.getElementById("rank1").textContent);
    let rank2 = parseFloat(document.getElementById("rank2").textContent);
    let rank3 = parseFloat(document.getElementById("rank3").textContent);
    let rank4 = parseFloat(document.getElementById("rank4").textContent);
    let rank5 = parseFloat(document.getElementById("rank5").textContent);

    if(time < rank1)
    {
        rank5 = rank4;
        rank4 = rank3;
        rank3 = rank2;
        rank2 = rank1;
        rank1 = time;
    }
    else if(time < rank2)
    {
        rank5 = rank4;
        rank4 = rank3;
        rank3 = rank2;
        rank2 = time;
    }
    else if(time < rank3)
    {
        rank5 = rank4;
        rank4 = rank3;
        rank3 = time;
    }
    else if(time < rank4)
    {
        rank5 = rank4;
        rank4 = time;
    }
    else if(time < rank5)
    {
        rank5 = time;
    }
    else
    {
        return;
    }

    document.getElementById("rank1").textContent = rank1.toString();
    document.getElementById("rank2").textContent = rank2.toString();
    document.getElementById("rank3").textContent = rank3.toString();
    document.getElementById("rank4").textContent = rank4.toString();
    document.getElementById("rank5").textContent = rank5.toString();
}