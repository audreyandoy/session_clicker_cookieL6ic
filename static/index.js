if ($.cookie('bgcolor') != undefined) {
    $("body").css('background-color', $.cookie('bgcolor'));
    $("#game").css('background-color', $.cookie('gmcolor'));
    $("#object")[0].src = $.cookie('imsrc')
    $("body").css('color', $.cookie('fncolor'));
}




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

