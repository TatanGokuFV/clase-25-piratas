class Boat {
    constructor(x,y,w,h,boatPos){
        //Opciones del motor físico para el bote
        var options = {
          restitution: 0.8,
          friction: 1.0,
          density: 1.0
        }
    //Asignar cuerpo de la librería Matter
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    //Asignar imagen
    this.image = loadImage("assets/boat.png");
    //Variable que guarda la posición del bote 
    this.boatPosition = boatPos;
    //Agregar cuerpo al mundo 
    World.add(world,this.body);
    }
    //Función para mostrar cuerpo 
    display(){
      var pos = this.body.position;
      push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,this.boatPosition,this.w,this.h);
      pop();
    }
}