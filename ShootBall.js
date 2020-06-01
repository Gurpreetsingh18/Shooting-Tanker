class ShootBall extends Tanker{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        ball = Bodies.circle(bodyA,pointB,options);
        World.add(world,this.shootBall);
       

    }

    attach(body){}

    shoot(){}

    display(){
        ellipseMode(RADIUS);
        ellipse(ball.position.x,ball.position.y,20,20);
    }

}

