let recentlyShaken = false;
let baby;
let monster;
let sounds = []; //empty array
let i = 0; 

// while there is a setShakeThreshold() function, it detects the *force* of the shake, not the duration
let shakes = 0; // keep track of the number of shakes so we can switch modes only after a certain *duration*
let mininumShakes = 5; // the minimum number of detected shakes before the mode switches (the duration of shaking)


function preload() {
    baby = loadImage('assets/ManeaterBaby.png');
    monster = loadImage('assets/ManeaterCel01 copy.png');
    sounds[0] = loadSound('assets/sound1.mp3');
    sounds[1] = loadSound('assets/sound2.mp3')
}

function setup() {
    createCanvas(1000, 1000);
    setShakeThreshold(50); // set the shake-strength threshold to 50, the default is 30
    let cnv = createCanvas(1000, 1000);

    cnv.mousePressed(canvasPressed);

}

function draw() {
    background(250);

    if(canvasPressed) { //deviceShaken
        image(monster, 0, 0)

    } else {
        image(baby, 0, 0)


    }
}

// this function is called when the phone is shaken beyond the setShakeThreshold value
function canvasPressed() { //deviceShaken
    
    canvasPressed = ! canvasPressed; //deviceShaken = ! deviceShaken
    shakes = 0;
    sound1.play();

}