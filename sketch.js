let nParticulas = 50 ;
let pelota = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < nParticulas; i++) {
    pelota[i] = new randomWalker(i);
  }
}

function draw() {
  for (let i = 0; i < nParticulas; i++) {
    pelota[i].update();
    pelota[i].display();
  }
}

// --------------------------------------
// --------------- CLASSES --------------
// --------------------------------------

//--------------Ramdom Walker------------

class randomWalker{
  constructor(_tag) { //Crea parametors para el elemento
    //----Color----
    this. Red = random(200, 255);
    this. Gren = random(0, 50);
    this. Blue = random(20, 50);
    
    //----Color----
    this.t = 0.7;
    this.tSpeed = random(0.4);
    this.noiseShift = random(1000);

    //----Nombre de cada elemento----
    this.tag = _tag;

    //----Posicion de elemento----
    this.pos  = createVector(random(0.45,0.55)*width, random(0.45,0.55)*height);
    this.pos2  = createVector(random(0.48,0.52)*width, random(0.48,0.52)*height);
    this.speed = createVector(random(-5,5), random(-5,5));
    this.diametro = random (10,50);

    //----Consola----
    print('hola soy pelota ' + this.tag);
  }
  update() { //Modifica el objeto
    
    this.speed.rotate(map(noise(this.t + this.noiseShift), 0, 0.5, -0.5, 0.5));
    this.pos.add(this.speed);
    this.pos2.add(this.speed);
    this.t += this.tSpeed;
  }
  display() { //Dibuja el objeto
    //noStroke();
    stroke(this.Red, this.Gren, this.Blue);
    strokeWeight(3);
    //fill (this.Red, this.Gren, this.Blue);
    //ellipse(this.pos.x, this.pos.y, this.diametro, this.diametro);
    line(this.pos.x, this.pos.y, this.pos2.x, this.pos2.y);
  }
}