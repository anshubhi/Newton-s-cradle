class Roof {
    constructor(x,y,width,height){
    
        var opt = {
    isStatic:true
    
    
        }
    
    
    this.body = Bodies.rectangle(x,y,width,height,opt);
    this.width = width
    this.height = height
    
    
    World.add(world,this.body);
    }
    
    
    
    
    display (){
    
    var pos = this.body.position
    push ()
    
    translate (pos.x,pos.y)
    fill(128,128,128)
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height);

    pop ()
    
    
    
    
    
    }
    
    }