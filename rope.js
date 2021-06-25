class Rope {
    constructor(body1,body2,offsetX,offsetY){
    this.offsetX = offsetX
    this.offsetY = offsetY
    var op = {
        bodyA : body1,
        bodyB : body2,
        pointB : {x:this.offsetX,y:this.offsetY}
    }

    this.rope = Matter.Constraint.create(op);
    World.add(world,this.rope)
    }



    display() {
var point1 = this.rope.bodyA.position;
var point2 = this.rope.bodyB.position;

strokeWeight(2);

var An1X = point1.x;
var An1Y = point1.y;

var An2X = point2.x + this.offsetX;
var An2Y = point2.y + this.offsetY;

line(An1X,An1Y,An2X,An2Y)

    }
}