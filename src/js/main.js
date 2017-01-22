// = components/jquery.geocomplete.js

function getRandomInt(min, max, count) {
  var random = Math.floor(Math.random() * (max - min)) + min;

  switch (count) {
    case 'even': (random % 2 == 0) ? random : ++random;
      break;
    case 'odd': (random % 2 == 1) ? random : ++random;
      break;
    default: random;
  }

  return random;
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
      $('.tile').each(function () {
          $(this).attr('offset');
          
          console.log( $(this).attr('offset'));
      });
  }
  
}
//myEventHandler

$(document).ready(function () {
    var grid = $('.tileCont');
    var tile = $('.tile');
    var ttlTile = tile.length;
    var position; 
    var count = 2;


    $('#startGame').on('click', function () {

        document.addEventListener("keyup", myEventHandler, false);

        tileCont.empty();
        tileLight++;


        for (var i = 0; i < tileLight; i++) {

            ranCou = getRandomInt(1, 4) + '-' + getRandomInt(1, 4);

            if (ranCou == ranCou) {
                ranCou = getRandomInt(1, 4) + '-' + getRandomInt(1, 4);
            }

            tileCont.append("<div offset='" + ranCou + "' class='tile offset-" + ranCou + "'>"
                + "<span class='inner'>" + count + "</span></div>");
        }

    });


});
//END READY

//(function($) {});
//END READY
