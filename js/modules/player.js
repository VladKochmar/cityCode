import Plyr from 'plyr'

if (document.querySelectorAll('.welcome-to__video').length) {
   for (const player of document.querySelectorAll('.welcome-to__video')) {
      new Plyr(player, {
         controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume'],
      })
   }
}
