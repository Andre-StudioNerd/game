let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemGameOver;

let cenario;
let somPulo;
let somDoJogo;
let personagem;
let inimigo;



const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]

const matrizPersonagem= [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]

const matrizSeiya = [
  [0, 0],
  [73, 0],
  [146, 0],
  [219, 0],
  [73, 0],
  [73, 137],
  [73, 274],
  [73, 411],
  [0, 146],
  [137, 146],
  [274, 146],
  [411, 146],
  [0, 219],
  [137, 219],
  [274, 219],
  [411, 219],
]


function preload(){
imagemCenario=loadImage('imagens/cenario/fundo_game.png');
imagemPersonagem=loadImage('imagens/personagem/sprite_seiya.png');
imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
imagemGameOver = loadImage('imagens/sistema/gameover.jpg');

somDoJogo=loadSound('sons/intro.mp3');
somPulo = loadSound('sons/jump.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario=new Cenario(imagemCenario,10);
  inimigo = new Inimigo(imagemInimigo, matrizInimigo, width-55, height-240, 50, 50, 104, 104);
  personagem=new Personagem(imagemPersonagem,matrizSeiya,55, height-240, 27, 50, 27, 50);
  
  frameRate(5);
  somDoJogo.loop();
  
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pular();
    somPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();


  personagem.exibe();
  personagem.simularGravidade();

  inimigo.exibe();
  inimigo.move();

  //if (personagem.detectarColisao(inimigo)) {
    //noLoop();
    //image(imagemGameOver, 0, 0, width, height);
  //}

  if (personagem.estaColidindo(inimigo)) {
    console.log('colidiu')
    noLoop()
  }
  
  
  }

