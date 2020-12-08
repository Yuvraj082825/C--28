class SlingShot
{
    constructor(bodyA,pointB){

        //extra properties for constraint step 2
    var options={
        bodyA:bodyA,
        pointB:pointB,
        length:40,
        stiffines:0.04

    }
    //step3
    this.pointB=pointB;
    this.sling=Constraint.create(options);
    //step 4
    World.add(world,this.sling);
}
fly()
{
    this.sling.bodyA=null;
}
display(){
    //displayed in the form of a line step 5
    if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    
    
}

}