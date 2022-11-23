let nPelotas = 200;
let pelota = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < nPelotas; i++) {
    pelota[i] = new randomWalker(i);
  }
}

function draw() {
  for (let i = 0; i < nPelotas; i++) {
    pelota[i].update();
    pelota[i].display();
  }
}

// --------------------------------------
// --------------- CLASSES --------------
// --------------------------------------

//----------Ramdom Walker----------------

class randomWalker{
  constructor(_tag) { //Crea parametors para el objeto
    this. Red = random(150, 255);
    this. Gren = random(0, 60);
    this. Blue = random(20, 80);

    this.t = 0;
    this.tSpeed = random(0.4);
    this.noiseShift = random(1000);

    this.tag = _tag;
    
    this.pos  = createVector(width/2, height/2);
    this.speed = createVector(random(-2,2), random(-2,2));
    this.diametro = random (10,50);
    print('hola soy pelota ' + this.tag);
  }
  update() { //Modifica el objeto
    
    this.speed.rotate(map(noise(this.t + this.noiseShift), 0, 1, -0.5, 0.5));
    this.pos.add(this.speed);
    this.t += this.tSpeed;
  }
  display() { //Dibuja el objeto
    //noStroke();
    stroke('rgba(0, 0, 0, 0.2)');
    strokeWeight(3);
    fill (this.Red, this.Gren, this.Blue);
    ellipse(this.pos.x, this.pos.y, this.diametro, this.diametro);
  }
}