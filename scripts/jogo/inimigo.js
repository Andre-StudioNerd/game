class Inimigo extends Animacao{
  constructor(imagem, matriz, x, y, largura, altura, lSprite, aSprite){
    super(imagem, matriz, x, y, largura, altura, lSprite, aSprite);

    this.velocidade =10;
  }

  move(){
    this.x=this.x-this.velocidade;
  }
  
}