class Inimigo extends Animacao {
    constructor(imagem, matriz, x, y, largura, altura, lSprite, aSprite){
      super(imagem, matriz, x, y, largura, altura, lSprite, aSprite);
      
      this.velocidade = 12;
    }
    
    move(){
      this.x-=this.velocidade;
      
      if (this.x < -this.largura){
        this.x=width; 
      }
    }
  }