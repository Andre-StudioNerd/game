let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;


function preload(){
imagemCenario=loadImage('imagens/cenario/fundo_game.png');
imagemPersonagem=loadImage('imagens/personagem/seiya.png');
somDoJogo=loadSound('sons/abel.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario=new Cenario(imagemCenario,10);
  personagem=new Personagem(imagemPersonagem);
  frameRate(5);
  somDoJogo.loop();
  
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  
  }

