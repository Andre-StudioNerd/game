class Personagem extends Animacao {
  constructor(imagem, matriz, x, y, largura, altura, lSprite, aSprite, somPulo) {
    super(imagem, matriz, x, y, largura, altura, lSprite, aSprite);
    
   

  }
  
  pula() {

    this.y=this.y -50;
    //if (this.qntPulos > 0) {
      //this.vPulo = -30;
      //this.qntPulos--;
      //this.somPulo.play();
    //}
  }
  
  simularGravidade() {
    //this.y += this.vPulo;
    //this.vPulo += this.gravidade;
    
    //if (this.y > this.y0){
      //this.y = this.y0;
      //this.qntPulos = 2;
    //}
  }
  
 
  
}



