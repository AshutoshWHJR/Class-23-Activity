class Ground {

    constructor (){

        var groundOption = {

            isStatic : true

        }

        this.ground = Bodies.rectangle(200,390,400,20,groundOption);
        World.add(world,this.ground);
    }


    display (){
       var posi = this.ground.position;
        rectMode(CENTER);
        rect(posi.x,posi.y,400,20);


    }



}