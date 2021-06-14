class Division{
    constructor(x,y,w,h){
        var options={
            isStatic:true,    
        }
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.body = Bodies.rectangle(x,y,w,h,options)

    }
    display(){
        var pos = this.body.position
        push()
        //translate(pos.x,pos.y)
        fill("white")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h)
    }
}