var width = 32;
var height = 16;
var count = 1;
var calcWidth = 1000 / width - 2;
var calcHeight = 500 / height - 2;
var Snake = [width+2,width+1];
var MoveDirection = 1;
var counter = 1;
var previous = 0;
var previus2 = 0;
var taken = true;
var taken2 = false;
var lost = false;
var stop = false;
var movable = true;
var dont = false;
var score = 2;

//RANDOM function
function getRandomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
}

//MOVE function
function Move() {
  if(lost==true||((Snake[0]+MoveDirection<=0-width||Snake[0]+MoveDirection>height*width+width)||(MoveDirection==-1&&(Snake[0]+MoveDirection)%width==(width-1))&&dont==false)||(MoveDirection==1&&(Snake[0]+MoveDirection)%width==2)&&dont==false){
     ColorTiles = null;
    //if(MoveDirection==-1&&Snake[(Snake.length-1)]%width!=1){
      //Snake[0]=Snake[(Snake.length-1)]+1;
    //}
    //else if(MoveDirection==1){
    //  Snake[0]=Snake[(Snake.length-1)]-1;
    //}
    //else{
      //Snake[0]-=MoveDirection;
      //}
      movable=false;
    $("#overlay").css("display","block");
    Move = null;
    ColorTiles();
    lost=true;
  }
  else{
    for (var b = 0; b < Snake.length; b++) {
        if (((b == 0&&lost==false)&&Snake[0]<=width*height)&&Snake[0]>=1) {
          previous = Snake[0];
            if (Snake[0] < width*height) {
                Snake[0] += MoveDirection;
            }
            else if(Snake[0]>=width*height){
                Snake[0] = 1;
            }
        }
        else if(((b!=0&&lost==false)&&Snake[0]<=width*height)&&Snake[0]>=1){
          previous2= Snake[b];
          Snake[b] = previous;
          previous = previous2;
        }
    }
    }
    dont=false;
}

//Setup Bait
function Food(){
  while(taken==true){
    taken2 = false;
    food = getRandomInt(1,256);
    for(var h=0;h<Snake.length;h++){
      if(Snake[h]==food){
        taken2 = true;
      }
    }
    if(taken2 == false){
      taken = false;
    }
  }
  taken=true;
}
