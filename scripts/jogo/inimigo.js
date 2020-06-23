class Inimigo extends Animacao{
  constructor(imagem, matriz, x, y, largura, altura, lSprite, aSprite){
    super(imagem, matriz, x, y, largura, altura, lSprite, aSprite);

    this.velocidade = 60;
  }

  move(){
    this.x=this.x-this.velocidade;
    if(this.x<-this.largura){
      this.x=width;


    }

  }
  
}