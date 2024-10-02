let recentlyShaken = false;
let baby;
let monster;
let sounds = []; //empty array
let i = 0; //index created
//let sound2

// while there is a setShakeThreshold() function, it detects the *force* of the shake, not the duration
let shakes = 0; // keep track of the number of shakes so we can switch modes only after a certain *duration*
let mininumShakes = 5; // the minimum number of detected shakes before the mode switches (the duration of shaking)


function preload() {
    baby = loadImage('assets/ManeaterBaby.png');
    monster = loadImage('assets/ManeaterCel01 copy.png');
    sounds[0] = loadSound('assets/sound1.mp3');
    sounds[1] = loadSound('assets/sound2.mp3');
}


function setup() {
    createCanvas(1000, 1000);
    setShakeThreshold(50); // set the shake-strength threshold to 50, the default is 30
}


function draw() {
    background(250);

    if(recentlyShaken) { //deviceShaken
        image(monster, 0, 0)
    } else {
        image(baby, 0, 0)
    }
}

// this function is called when the phone is shaken beyond the setShakeThreshold value
function mouseClicked() {
   
    recentlyShaken = ! recentlyShaken;
    shakes = 0;
    sounds[i = (i + 1) % 2].play();
    //sound2.play();

    //if ( key != 0 && key != 1 && key != 2  && key !=3) return; //if the key isn't any one of these variables, jump out of function
    //index = key;

}
