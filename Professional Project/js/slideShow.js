// Made by Sterling Heaton

// Global variables to store images and current image number
let images;
let count;

// Start function that'll get a list of all images, set the starting count to 0, and call the displayImage() function
function start()
{
    images = getImages();
    count = 0;
    displayImage();
}

// Sets the image in the DOM to the image that matches the current count variable, then calls the changeImage() function
function displayImage()
{
    document.getElementById("picture").src = images[count];
    changeImage();
}

// Adds one to count, tests to see if it should be reset to 0, and then calls the displayImage() function after 5s
function changeImage()
{
    count++;

    if(count >= images.length)
    {
        count = 0;
    }

    setTimeout(displayImage, 5000);
}

// Gets the images from the directory and add them to the images array
function getImages()
{
    let images = [];
    let directory = "img/";
    images.push(directory + "cyberSecurity1.jpg");
    images.push(directory + "cyberSecurity2.jpg");
    images.push(directory + "programming1.jpg");
    images.push(directory + "programming2.jpg");
    return images;
}