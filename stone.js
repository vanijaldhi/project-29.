class Stone{
    constructor(bodyA, pointB){
    var options={
      bodyA: bodyA,
      pointB: pointB,
      isStatic:true,
      restitution:0,
      friction:1,
      density:1.2
    }
    this.stone= Bodies.rectangle(320,510,30,30,options)
    this.pointB = pointB;
    this.stone = Constraint.create(320,510,30,30 ,options);
    this.stOne= loadImage("stone.png");
    World.add(world, this.stone);
   }
   attach(body){
    this.sling.bodyA = body;
    }
  fly(){
    this.sling.bodyA = null;
    }
   display(){
    var pos =this.stone.position;
    if(this.sling.bodyA){
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
    
    }
    push ();
    fill(40,50,255);
    imageMode(CENTER);
    image(this.stOne,pos.x,pos.y,70,70);
    line(pointA.x,pointA.y,pointB.x,pointB.y);

    
    pop ();
  }
}
