class plinko{
    constructor(x,y){

    var options1 = {
        isStatic: true,
        restitution:1,
        friction:0
    }
    //now run
    
    this.r = 10
    this.body = Bodies.circle(x,y,this.r,options1)
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        
        fill("white")
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()

 
       
    }
}