class Bola {
  constructor(ctx) {
    //-- Guardar el contexto de dibujo
    this.ctx = ctx;

    //-- Constante: Tamaño de la bola
    this.size = 6;

    //-- Contante: Posicion inicial de la bola
    this.x_ini = 540;
    this.y_ini = 300;
    // Constante: Posicion derecha de la bola
    this.x_dcha = 80;
    this.y_dcha = 140;
    //-- Posicion generica de la bola
    this.x = 0;
    this.y = 0;

    //-- Velocidad inicial de la bola
    this.vx_ini = 6;
    this.vy_ini = 3;

    //-- Velocidad genérica de la bola
    //-- Inicialmente a cero
    this.vx = 0;
    this.vy = 0;

    //-- Inicializar
    this.init();
  }

  draw() {
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0.5, "#5b4606");
    grd.addColorStop(1, "#f9e5a9");

    //----- Dibujar la Bola
    this.ctx.beginPath();
    this.ctx.shadowBlur = 20;
    this.ctx.shadowOffsetX = 20;
    this.ctx.shadowColor = "black";
    this.ctx.fillStyle = grd;

    //-- x,y, anchura, altura
    this.ctx.arc(this.x, this.y, this.size,0,2*Math.PI);
    this.ctx.fill();


  }

  init() {
    //-- Inicializa la bola: A su posicion inicial
    this.x = this.x_ini;
    this.y = this.y_ini;
    this.vx = 0;
    this.vy = 0;
  }
  dcha(){
    //-- Inicializa la bola: A su posicion derecha
    this.x = this.x_ini;
    this.y = this.y_ini;
    this.vx = 0;
    this.vy = 0;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
}
