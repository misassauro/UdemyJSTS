// Write a function called isLandscape(), wich will receive two arguments: height and width of an image (those arguments must be numbers).
// Return true if the image is on the landscape mode.

function isOnLandscapeMode(width, height) {
    return width > height;
}

console.log(isOnLandscapeMode(300, 500));

const widescreenMode = (width, height) => width > height;

console.log(widescreenMode(1920, 1080));

