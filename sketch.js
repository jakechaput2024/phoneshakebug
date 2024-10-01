let recentlyShaken = false;
let baby;
let monster;
let soundBabyCrying;
let soundMonsterCrying;

// while there is a setShakeThreshold() function, it detects the *force* of the shake, not the duration
let shakes = 0; // keep track of the number of shakes so we can switch modes only after a certain *duration*
let mininumShakes = 5; // the minimum number of detected shakes before the mode switches (the duration of shaking)


function preload() {
    baby = loadImage('assets/ManeaterBaby.png');
    monster = loadImage('assets/ManeaterCel01 copy.png');
    soundBabyCrying = loadSound('assets/Babycry2.mp3');
    soundMonsterCrying = loadSound('assets/Fakebabycry.mp3');
}

function setup() {
    createCanvas(1000, 1000);
    setShakeThreshold(50); // set the shake-strength threshold to 50, the default is 30

}

function draw() {
    background(250);

    if(recentlyShaken) {
        image(monster, 0, 0)
    } else {
        image(baby, 0, 0)
    }
}

// this function is called when the phone is shaken beyond the setShakeThreshold value
function deviceShaken() { //deviceShaken
   
    recentlyShaken = ! recentlyShaken;
    shakes = 0;
}