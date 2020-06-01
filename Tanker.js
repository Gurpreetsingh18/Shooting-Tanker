class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
      
     }
     this.body1= Bodies.rectangle(x,y,80,80,options);
     World.add(world,this.body1);
     this.width = 80;
     this.height = 80;
     
    }

    display(){
      rectMode(CENTER);
      rect(this.body1.position.x,this.body1.position.y,80,80);
      this.body1.position.x = mouseX;
      this.body1.position.y = mouseY;
      
    };
}
