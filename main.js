// IDs of sections
const keys = [
    'c4-key', 'd4-key', 'e4-key', 'f4-key', 'g4-key', 'a4-key', 'b4-key',
    'c4-sharp-key', 'd4-sharp-key', 'f4-sharp-key', 'g4-sharp-key', 'a4-sharp-key',
    'c5-key', 'd5-key', 'e5-key', 'f5-key', 'g5-key', 'a5-key', 'b5-key',
    'c5-sharp-key', 'd5-sharp-key', 'f5-sharp-key', 'g5-sharp-key', 'a5-sharp-key'
];
const notes = [];

//
// Keyboard keyCode : sound of note
//
const sounds = {
    // First octave
   /*q - C4*/ 81 : 'C4',
   /*w - D4*/ 87 : 'D4',
   /*e - E4*/ 69 : 'E4',
   /*r - F4*/ 82 : 'F4',
   /*t - G4*/ 84 : 'G4',
   /*y - A4*/ 89 : 'A4',
   /*u - B4*/ 85 : 'B4',
   /*2 - C4#*/ 50 : 'C4sharp',
   /*3 - D4#*/ 51 : 'D4sharp',
   /*5 - F4#*/ 53 : 'F4sharp',
   /*6 - G4#*/ 54 : 'G4sharp',
   /*7 - A4#*/ 55 : 'A4sharp',
   // Second octave
   /*v - C5*/ 86 : 'C5',
   /*b - D5*/ 66 : 'D5',
   /*n - E5*/ 78: 'E5',
   /*m - F5*/ 77 : 'F5',
   /*, - G5*/ 188 : 'G5',
   /*. - A5*/ 190 : 'A5',
   /*/ - B5*/ 191 : 'B5',
   /*g - C5#*/ 71: 'C5sharp',
   /*h - D5#*/ 72 : 'D5sharp',
   /*k - F5#*/ 75 : 'F5sharp',
   /*l - G5#*/ 76 : 'G5sharp',
   /*; - A5#*/ 186 : 'A5sharp',
 };

// ID of note sounds
const keysSoundId = [
    'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4',
    'C4sharp', 'D4sharp', 'F4sharp', 'G4sharp', 'A4sharp',
    'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5',
    'C5sharp', 'D5sharp', 'F5sharp', 'G5sharp', 'A5sharp'
]


let keyDown = function(e) {
    var soundId = sounds[e.keyCode];
   // console.log(soundId + ':' + e.keyCode)
       if (soundId) {
           document.getElementById(soundId).play();
        } else {
            console.log("key not mapped : code is", e.keyCode);
        }
}

document.onkeydown = keyDown;

//Keys to notes
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

//
// Event backlight + sound
//
const keyplay = function(event) {
    event.target.style.backgroundColor = 'rgb(236, 165, 78)';
    const index = keys.indexOf(event.target.id);
    let idSound = keysSoundId[index];
    var audio = document.getElementById(idSound);
    audio.play();
}

//backlight off
const keyReturn = function (event) {
    event.target.style.backgroundColor = '';
}

// Event for mouse down and up
let eventStartStop = function (note) {
    note.onmousedown = function (event) {
        keyplay(event);
    }
    note.onmouseup = function(event) {
        keyReturn(event);
    }
}

notes.forEach(eventStartStop);
