$ = (id) ->
  document.getElementById id

player = $('player')
$('play').onclick = (e) ->
  player.play()
$('pause').onclick = (e) ->
  player.pause()
$('stop').onclick = (e) ->
  player.pause()
  player.currentTime = player.startTime
$('volume').onchange = (e) ->
  player.volume = e.target.value
