// Make two objects named Artist
// and Painter. Artist should have
// a function named speak() that
// when called logs "I am an artist"
// to the console. Painter should be
// able to use the Artist's speak function
// (painters are artists, after all) in some
// way, and should also have a function named
// paint() that sets the background color of the
// page to a random color whenever called.

function randomColor() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    var randomcolor = "rgb(" + R + "," + G + "," + B + ")";
    return randomcolor;
}

class Artist {
    speak (){
        console.log("I am an artist");
    }
};

class Painter extends Artist {
    paint (){
        document.body.style.backgroundColor = randomColor();
    }
};

// Our team had similar approaches to this problem, as we all used classes.
// We did, however, do different things for the random color.