import Player from '@vimeo/player';
let _ = require('lodash');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.getItem("videoplayer-current-time") != null){    
        player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(){
            console.log('video restarted ');
        })   
}else{
    player.on('play', function() {
        console.log('played the video!');
    });
}
player.on('timeupdate', _.throttle(()=>{   
    player.getCurrentTime().then(function(seconds) {
       localStorage.setItem("videoplayer-current-time", seconds);     
       console.log('Seconds:', seconds);      
    });
}, 1000));

player.off('play', function(){
    localStorage.clear();
})