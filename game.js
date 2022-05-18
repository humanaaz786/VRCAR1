AFRAME.registerComponent('game',{
    schema:{
        gameState:{type:"string",default:"play"},

    },
    init:function(){
        var duration=300;
        var timer=document.querySelector('#timer')
        this.startTimer(duration,timer)
    },
    startTimer:function(duration,timer){
        var minutes, seconds;
        setInterval(() => {
            if (duration>=0){
                this.data.gameState='play';
                minutes=parseInt(duration/60)
                seconds=parseInt(duration%60)
            if (minutes<10){
                minutes='0'+minutes
            }
            if(seconds<10){
                seconds='0'+seconds
            }
            timerE1.setAttribute('text',{value:minutes+':'+seconds})
            
            
        
        duration=duration-1

    }
    else{this.data.gameState='over'
    var cameraRig=document.querySelector('#camera-rig')
cameraRig.setAttribute('velocity',{x:0,y:0,z:0})
var over=document.querySelector('#speed')
    over.setAttribute('visible',true)}
    
}, 100);
}})
