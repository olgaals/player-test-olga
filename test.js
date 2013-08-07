(function() {
    console.log("****test share******************");
    

 onReady=function(){
    
     console.log("ready test share");
     clearInterval(interval);
      window.open(
      'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 
      'facebook-share-dialog', 
      'width=626,height=436'); 
    return false;
    
}


 

player = brightcove.api.getExperience();
    videoPl = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    exper = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
     interval=setInterval(function(){
         if(exper.getReady())
         onReady();
         }, 50);

        
}());
