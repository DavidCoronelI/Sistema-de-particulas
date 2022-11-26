let pelota = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  for (let i = 0; i < pelota.length; i++) {
    if(pelota[i].isAlife){
      pelota[i].update();
      pelota[i].display();
    }else{
      pelota.splice(i, 1);
    }
  }
}

function mouseClicked(){
  background('rgba(255, 255, 255, 0.2)');
  for(let i = 0; i < 150; i++){ //Cantidad de elementos
    let newElem = new bluePrint(mouseX, mouseY);
    pelota.push(newElem);
  }
}

// --------------------------------------
// --------------- CLASSES --------------
// --------------------------------------

//--------------Ramdom Walker------------

class bluePrint{
  constructor(_mouseX, _mouseY) { //Crea parametors para el elemento
    //----Color----
    this. Red = random(200, 255);
    this. Gren = random(0, 50);
    this. Blue = random(20, 50);

    this.sizStrok = 2;
    
    //----Velocidad----
    this.t = 0.7;
    this.tSpeed = random(0.4);
    this.noiseShift = random(1000);
    this.lifTim = int(random (50, 150));

    this.isAlife = true;
    print ('hola vivire '+ this.lifTim)

    
    //----Posicion de elemento----
    this.pos  = createVector(random(width), random(height));
    this.pos2  = createVector(_mouseX, _mouseY);
    this.speed = createVector(random(-5,5), random(-5,5));

  }

  update() { //Modifica el objeto
    
    this.speed.rotate(
      map(noise(this.t + this.noiseShift), 0, 0.5, -0.1, 0.1)
    );

    this.pos.add(this.speed);
    //this.pos2.add(this.speed);
    this.t += this.tSpeed;
    this.lifTim --;

  }

  display() { //Dibuja el objeto
    //noStroke();
    stroke(this.Red, this.Gren, this.Blue);
    strokeWeight(this.sizStrok);
    //fill (this.Red, this.Gren, this.Blue);
    //ellipse(this.pos.x, this.pos.y, this.diametro, this.diametro);
    line(this.pos.x, this.pos.y, this.pos2.x, this.pos2.y);
    
    if(this.lifTim <= 0){
      this.died();
    }
  }

  died(){
    this.sizStrok -= 0.01;
    if(this.sizStrok){
      this.isAlife = false;
      print ('f');
      ellipse (this.pos.x, this.pos.y, 20, 20);
      noFill ();
    }
  }
}