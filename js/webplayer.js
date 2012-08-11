(function() {
  var $, player;

  $ = function(id) {
    return document.getElementById(id);
  };

  player = $('player');

  $('play').onclick = function(e) {
    return player.play();
  };

  $('pause').onclick = function(e) {
    return player.pause();
  };

  $('stop').onclick = function(e) {
    player.pause();
    return player.currentTime = player.startTime;
  };

  $('volume').onchange = function(e) {
    return player.volume = e.target.value;
  };

}).call(this);
