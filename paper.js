class paper
{
    constructor(x,y,r)
    {
        var options = {
            isStatic : false,
            retstitution :0.3,
            friction:0.5,
            density:1.2,
        }
        
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        this.image = loadImage("paper.png");

        World.add (world,this.body);
    }

    display()
    {
        var paperPos = this.body.position;
        push();
        translate(paperPos.x,paperPos.y);
        imageMode(CENTER);
        //strokeWeight(3)
        fill(255,0,255);
        image(this.image,0,0,this.r,this.r);
        pop();
    }


}
















