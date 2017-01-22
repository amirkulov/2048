
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

function offset(count, position) {

  switch (position) {
    case 'right-down':
        if(count == 1) count = 3;
        else if(count == 2) count = 2;
        else if(count == 3) count = 1;
        else if(count == 4) count = 0;
      break;
    case 'top-left':
        if(count == 1) count = 0;
        else if(count == 2) count = 1;
        else if(count == 3) count = 2;
        else if(count == 4) count = 3;
      break;
  }

  return count;
}

function tilePosition(tilePosition) {
  $('.tile').each(function () {
    var attr = $(this).attr('offset');
    var thisClass = $(this).attr('class').slice(5);
    var positionY = attr.slice(0,1);
    var offsetY = offset(positionY, 'right-down');

    var ttlOffset = "offset-" + (parseInt(positionY) + parseInt(offsetY)) + attr.slice(1);
    $(this).removeClass(thisClass).addClass(ttlOffset);
    $(this).attr('offset', ttlOffset);
  });
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
      switch (mapped) {
        case 1:
            tilePosition();
          break;
        case 2:
            tilePosition();
          break;
        case 3:
            tilePosition();
          break;
        case 4:
            tilePosition();
          break;
      }

    }
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
position = getRandomInt(1, 5) + '-' + getRandomInt(1, 5);
        //grid.empty();
        ttlTile++;

        grid.append("<div offset='" + position + "' class='tile offset-" + position + "'>"
            + "<span class='inner'>" + count + "</span></div>");

        // if(ttlTile > 2) {
        //   console.log(111);
        //
        //   for (var i = 0; i < ttlTile; i++) {
        //
        //       if (position == position) {
        //           position = getRandomInt(1, 5) + '-' + getRandomInt(1, 5);
        //       }
        //
        //       grid.append("<div offset='" + position + "' class='tile offset-" + position + "'>"
        //           + "<span class='inner'>" + count + "</span></div>");
        //   }
        // } else {
        //   grid.append("<div offset='" + position + "' class='tile offset-" + position + "'>"
        //               + "<span class='inner'>" + count + "</span></div>"
        //             + "<div offset='" + position + "' class='tile offset-" + position + "'>"
        //               + "<span class='inner'>" + count + "</span></div>");
        // }

    });


});
//END READY

//(function($) {});
//END READY
