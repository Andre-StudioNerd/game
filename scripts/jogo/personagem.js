class Personagem{
  constructor(imagem){
    this.altura = 135;
    this.largura = 110;
    
    // Caracteristicas do sprite utilizado
    this.imagem = imagem;      // Sprite utilizado
    this.spriteAltura = 270;   // Altura do personagem dentro do sprite
    this.spriteLargura = 220;  // Largura do personagem dentro do sprite
    // Variaveis auxiliares para o sprite
    this.spriteI = 0;          // Index de coluna 
    this.spriteJ = 0;          // Index de linha
    //Posições dentro do sprite
    this.posicapSpriteX = 0;
    this.posicaoSpriteY = 0;
    
    // Posicionamento na tela
    this.posicaoX = 0;
    this.posicaoY = height - this.altura;
  
  
  }
  exibe(){
    image(this.imagem,
          
      this.posicaoX, 
      this.posicaoY, 
      this.largura, 
      this.altura,
      
      this.posicaoSpriteX, 
      this.posicaoSpriteY, 
      this.spriteLargura, 
      this.spriteAltura
     );

this.anima()
    
  }
  anima(){
    this.spriteI++ ;
    
    if (this.spriteI >3) {
      this.spriteI = 0;
      this.spriteJ ++ ;
      
      if (this.spriteJ >3){
        this.spriteJ = 0;  
        }
      }
  
    // Atualiza a posição inicial dentro do sprite
    this.posicaoSpriteX = this.spriteI * this.spriteLargura;
    this.posicaoSpriteY = this.spriteJ * this.spriteAltura;
      
       
       
       
  
  }
}