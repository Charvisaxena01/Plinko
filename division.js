class Division{
    constructor(x,y,w,h){
        var options2={
     isStatic:true,    
        }
        this.body = Bodies.rectangle(x,y,w,h,options2)
        this.w = w
        this.h = h
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        fill("white")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h)
    }
}