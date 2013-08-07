(function() {
    console.log("****test share******************");
    

 onReady=function(){
    
     console.log("ready test share");
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
