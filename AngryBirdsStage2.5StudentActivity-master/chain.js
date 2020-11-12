class chain{
    constructor(body1,body2){
        var option = {
            bodyA:body1,
            bodyB:body2,
            length:10,
            stiffness:0.5
        }
        this.body=Matter.Constraint.create(option)
    World.add(world,this.body)
    }
    display(){
        var pointA=this.body.bodyA.position
var pointB = this.body.bodyB.position
strokeWeight(5)
line(pointA.x,
pointA.y,
pointB.x,
pointB.y)
    }

}