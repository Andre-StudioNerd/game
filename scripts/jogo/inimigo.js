class Inimigo extends Animacao{
  constructor(imagem, matriz, x, y, largura, altura, lSprite, aSprite,velocidade,delay){
    super(imagem, matriz, x, y, largura, altura, lSprite, aSprite);

    this.velocidade = velocidade;
    this.delay = delay;
    this.x = width + this.delay;
  }

  move(){
    this.x=this.x-this.velocidade;
    if(this.x<-this.largura - this.delay){
      this.x=width;


    }
    somInimigo.play();
    somInimigo.pause();

  }
  
}