(function() {
    console.log("****test share******************");
    times=0;
    deleted=0;

 onPlayerReady=function(){
    
     console.log("ready");
    
}

player = brightcove.api.getExperience();
    videoPl = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    exper = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
     interval=setInterval(function(){
         if(exper.getReady())
         onPlayerReady();
         }, 30);

        
}());
