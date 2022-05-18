AFRAME.registerComponent('drive',{init:function(){
    var gameStateValue=this.EL.getAttribute('game')
    if (gameStateValue=='play'){
        this.driveCar()
    }
},
    isVelocityActive:function(){
        console.log("hii")
        return Math.random() <0.25;
    },
    driveCar:function(){
        var multiply=10;
        var wheelrotation=0;
        window.addEventListener('keydown',function(e){
            var wheel=this.document.querySelector("#control-wheel")
            
            if(e.code=="ArrowRight" && wheeRotation< -40)
            {
                wheelrotation-=5
                wheel.setAttribute("rotation",{x:0, y:0,z:wheelrotation})

            }
            if(e.code=="ArrowLeft" && wheelrotation < 40){
                wheelrotation+=5
                wheel.setAttribute("rotation",{x:0,y:0,z:wheelrotation})
            }

            var cameraRig=document.querySelector("#camera-rig")
            var cameraRotation=cameraRig.getAttribute("rotation")
            var cameraPosition=cameraRig.getAttribute("position")
            var camerMovControl=cameraRig.getAttribute("movement-controls")

            console.log(camerMovControl.speed)
            cameraRig.setAttribute("movement-controls",{"speed":camerMovControl.speed+0.005})
            console.log(camerMovControl.speed)

            var cameraDirection=new THREE.Vector3();
            cameraRig.object3D.getWorldDirection(cameraDirection);

            if(e.code == "ArrowRight")
            {
                cameraRotation.y-=5
                cameraRig.setAttribute("rotation",{x:0,y:cameraRotation.y,z:0})
                cameraRig.setAttribute("movement-controls",{"speed":camerMovControl.speed+0.005})

            }
            if(e.code=="ArrowUp")
            {
                multiply+=0.5
                if(multiply<=100 &&cameraPosition.z>-500)
                {
                    cameraRig.setAttribute("movement-controls",{"spped":camerMovControl.speed+0.005})
                    var accelerateCar=this.document.querySelector("#control-acce")
                    accelerateCar.setAttribute("material","color","green")
                    var carspeed=this.document.querySelector("#speed")
                    carspeed.setAttribute("text",{value:multiply});
                }

                if(e.code=="Space")
                {
                    cameraRig.setAttribute("movement-controls",{"speed":0})
                    var stopCar=this.document.querySelector("#control-break")
                    stopCar.setAttribute("material","color","red")
                }
            }
        })
    }
})