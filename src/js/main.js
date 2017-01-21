// = components/jquery.geocomplete.js

function getRandomInt(min, max, count) {
  random = Math.floor(Math.random() * (max - min)) + min;

  switch (count) {
    case 'even': (random % 2 == 0) ? random : ++random;
      break;
    case 'odd': (random % 2 == 1) ? random : ++random;
      break;
    default: random;
  }

  return random
  console.log(random);
}

function myEventHandler() {
  var map = {
    38: 0, // Up
    39: 1, // Right
    40: 2, // Down
    37: 3, // Left
    75: 0, // Vim up
    76: 1, // Vim right
    74: 2, // Vim down
    72: 3, // Vim left
    87: 0, // W
    68: 1, // D
    83: 2, // S
    65: 3  // A
  };

  var keyCode = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
  var mapped = map[event.which];

  if (!keyCode) {
    if (mapped !== undefined) {
      event.preventDefault();

      console.log(mapped + "  You pressed W!");
    }
  }

  if(mapped == 1) {

  }
}
//myEventHandler

$(document).ready(function () {
  var self = this;
  var tileCont = $('.tileCont');
  var tile = $('.tile');
  var randomCount;
  var count = 2;
  var positionTile = {};

  $('#startGame').on('click', function() {

    document.addEventListener("keyup", myEventHandler, false);

    tileCont.empty();
    randomCount = getRandomInt(1, 4) + '-' + getRandomInt(1, 4);
    randomCount1 = getRandomInt(1, 4) + '-' + getRandomInt(1, 4);
    if(randomCount == randomCount1) {
      count = 4;
    } else {
      count = 2;
    }
    console.log(randomCount);
    for (var i = 0; i < array.length; i++) {
      array[i]
      tileCont.append("<div class='tile offset-" + randomCount+ "'>"
                        + "<span class='inner'>" + count + "</span></div>"
                    + "<div class='tile offset-" + randomCount1+ "'>"
                        + "<span class='inner'>" + count + "</span></div>");
    }

  });


});
//END READY

(function($) {
});
//END READY
