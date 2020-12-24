class Boy{
    constructor() {
        this.boy = Bodies.rectangle(400,500,60,70);
        World.add(world, this.boy);
        this.b= loadImage("boy.png");
      }
      display(){
        var pos =this.boy.position;
        imageMode(CENTER);
        image(this.b,pos.x, pos.y,250,350);
      }
}