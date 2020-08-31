//create the ground class
class Ground 
{
    constructor(x, y, width, height) 
    {
        //give options for the ground
      var options = 
      {
          isStatic:true
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      //add the ground to the world
      World.add(world, this.body);
    }

    //display the box
    display()
    {
        //nameSpace the position 
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
     
    }
  }