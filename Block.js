class Block{
    constructor(x,y,w,h){

        var options = {

            restitution : 0.4,
            friction : 0
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.w = w
        this.h = h
 }

     display(){

        push();
        strokeWeight(4)
        stroke("green")
        fill("white")
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop();
     }


}