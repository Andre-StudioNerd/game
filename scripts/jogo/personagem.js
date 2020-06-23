class Personagem extends Animacao {
  constructor(imagem, matriz, x, y, largura, altura, lSprite, aSprite, somPulo) {
    super(imagem, matriz, x, y, largura, altura, lSprite, aSprite);
    //this.somPulo = somPulo;
    //this.y0 = y;
    
    //this.vPulo = 0;
    //this.gravidade = 3;
    //this.qntPulos = 2;
   

  }
  
  pular() {
    //if (this.qntPulos > 0) {
      this.y = this.y-50;
      //this.qntPulos--;
      //this.somPulo.play();
    //}
  }
  
  
  
 
  
}



