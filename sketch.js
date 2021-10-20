//Criar variáveis
var rectFixo;
var rectMovendo;

function setup() {
  //Criar canvas
  createCanvas(500,500);

  //Criar retângulo fixo
  rectFixo = createSprite(250,250,30,80);
  rectFixo.shapeColor = "green";
  rectFixo.debug = true;

  //Criar retângulo que se move
  rectMovendo = createSprite(400,400,80,30);
  rectMovendo.shapeColor = "green";
  rectMovendo.debug = true;
}

function draw() {
  //Definir fundo e limpar tela
  background(0);  
  
  //Controlar retângulo que se move com o mouse
  rectMovendo.x = World.mouseX;
  rectMovendo.y = World.mouseY;

  

  //Identificar colisão entre os objetos
  if(rectMovendo.x - rectFixo.x < rectFixo.width/2 + rectMovendo.width/2
    && rectFixo.x - rectMovendo.x <rectFixo.width/2 + rectMovendo.width/2
    &&  rectMovendo.y - rectFixo.y <rectFixo.height/2 + rectMovendo.height/2
    && rectFixo.y - rectMovendo.y <rectFixo.height/2 + rectMovendo.height/2){
    rectMovendo.shapeColor = "red";
    rectFixo.shapeColor = "red";
  }else{
    rectMovendo.shapeColor = "green";
    rectFixo.shapeColor = "green";
  }
  
  //Desenhar sprites
  drawSprites();
}