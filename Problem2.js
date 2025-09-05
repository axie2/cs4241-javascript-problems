// create a for loop that creates 20 blocks,
// all on a single row, with a random color for each
// make sure the values for each color channel are different
// (i.e. no gray/black/white blocks)


function randomColor() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    var randomcolor = "rgb(" + R + "," + G + "," + B + ")";
    return randomcolor;
}

for (var i = 0; i <= 20; i++) {
    const block = document.createElement("div");
    block.style.width = "30px";
    block.style.height = "30px";
    block.style.background = randomColor();
    document.body.appendChild(block);
}

// For this problem, the members of my team used different methods to create the blocks.