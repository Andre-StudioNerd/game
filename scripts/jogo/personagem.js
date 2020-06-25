class Personagem extends Animacao {
  constructor(imagem, matriz, x, y, largura, altura, lSprite, aSprite, somPulo) {
    super(imagem, matriz, x, y, largura, altura, lSprite, aSprite);
    //this.somPulo = somPulo;
    this.y0 = y;
    
    this.vPulo = 0;
    this.gravidade = 20;
    this.qntPulos = 10;
   

  }
  
  pular() {
    if (this.qntPulos > 0) {
      this.vPulo = -50;
      this.qntPulos--;
      //this.somPulo.play();
    }
  }
  simularGravidade() {
    this.y += this.vPulo;
    this.vPulo += this.gravidade;
    
    if (this.y > this.y0){
      this.y = this.y0;
      this.qntPulos = 10;
    }
  }

  
  
  detectarColisao(inimigo) {
    
    
    const precisao = 0.7;
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    
    return colisao;
  }


  
  
 
  
}



