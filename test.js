(function() {
    console.log("****test share******************");
    times=0;
    deleted=0;

 onReady=function(){
    
     console.log("ready");
     clearInterval(interval);
    
}

player = brightcove.api.getExperience();
    videoPl = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    exper = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
     interval=setInterval(function(){
         if(exper.getReady())
         onReady();
         }, 50);

        
}());
