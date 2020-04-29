// width and height of the game div
var width = $("#game").width();
var height = $("#game").height();

// top left position of game div
var start = $("#object").position();

// move the image to random position
setInterval(function() {
    var newTop = (Math.random() * height) + start.top;
    var newLeft = (Math.random()* width) + start.left/2;

    // move the object
    $("#object").offset({
        top: newTop,
        left: newLeft
    });

}, 1000);

