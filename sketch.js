// An example showing how to use a phone's accelerometer with p5.js

// The app has two modes, which are toggled by shaking the phone:
// 1. Rotation mode: the box rotates around the x-axis according to the phone's rotation
// 2. Translation mode: the box moves along the x-axis according to the phone's acceleration

let rotationMode = true; // keep track of the mode

let bgcolor = "orange"; // rotation mode has an orange background

// while there is a setShakeThreshold() function, it detects the *force* of the shake, not the duration
let shakes = 0; // keep track of the number of shakes so we can switch modes only after a certain *duration*
let mininumShakes = 40; // the minimum number of detected shakes before the mode switches (the duration of shaking)

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL); // full screen canvas, 3D mode
    setShakeThreshold(50); // set the shake-strength threshold to 50, the default is 30
}

function draw() {
    background(bgcolor);

    // rotate or move the box, depending on the mode
    if (rotationMode) rotateX(radians(rotationX));
    else translate(-accelerationX*4, 0);
    
    box(200, 200, 200);
}

// this function is called when the phone is shaken beyond the setShakeThreshold value
function deviceShaken() {
    // don't continue if the phone hasn't been shaken long enough
    if (shakes++ < mininumShakes) return;

    if (rotationMode) {
        rotationMode = false;
        bgcolor = "orange";
    } else {
        rotationMode = true;
        bgcolor = "blue";
    }
    shakes = 0; // reset the number of shakes for the next time shakes are detected
}