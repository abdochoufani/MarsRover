// Rover Object Goes Here
// ======================
var rover={
    sign:"R",
    direction:"N",
    x:0,
    y:0,
    travelLog:[]
  };

  var board =[
   [rover.sign,' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
 ];
// ======================
function turnLeft(rover){
 console.log("Previous Direction: " + rover.direction);
  switch(rover.direction){
    case "N":
    rover.direction ="W";
    break;
    case "W":
    rover.direction="S";
    break;
    case "E":
    rover.direction="N";
    break;
    case "S":
    rover.direction="E";
    break;
  }
  console.log("Current direction: " + rover.direction);
}

function turnRight(rover){
 console.log("Previous Direction: " + rover.direction);
 switch(rover.direction){
   case "N":
   rover.direction ="E";
   break;
   case "W":
   rover.direction="N";
   break;
   case "E":
   rover.direction="S";
   break;
   case "S":
   rover.direction="W";
   break;
 }

 console.log("Current Direction: " + rover.direction)
}

function moveForward(rover){
 console.log("Moving Forward!");
 console.log("Current Direction: "+rover.direction);
 if(rover.direction=="W" && rover.x>0){
 rover.x--;
 }
 else if(rover.direction=="E" && rover.x<9){
   rover.x++;
 }
 else if(rover.direction=="N" && rover.y>0){
   rover.y--;
 }
 else if(rover.direction=="S" && rover.y<9){
   rover.y++;
 }
 console.log('Error 245tth// Error: Cannot pass boundaries. Please Turn around!');

}



function moveBackwards(rover){
 console.log("Moving Backwards!");
 console.log("Current Direction: "+rover.direction);
 if(rover.direction=="W" && rover.x<9){
 rover.x++;
 } 
 else if(rover.direction=="E" && rover.x>0){
   rover.x--;
 }
 else if(rover.direction=="N" && rover.y<9){
   rover.y++;
 }
 else if(rover.directionx=="S" && rover.y>0){
   rover.y--;
 }
 else{
   console.log('Error 245tth// Error: Cannot pass boundaries. Please Turn around!');
 }
}





function controles (str){
 var pattern = new RegExp(/^[+\-fbrl ]+$/g);
 str.toLowerCase();
 if(pattern.test(str)){
   for(var i=0;i<str.length;i++){
     switch(str[i]){
      case "f":
       moveForward(rover);
       break;
        case "r":
       turnRight(rover);
       break;
       case "l":
       turnLeft(rover);
       break;
       case "b":
       moveBackwards(rover);
     }
     rover.travelLog.push([rover.x,rover.y]);
     move();
   }
   move();  
 } 
 else{
 console.log('Error 11.0// Error: Provide Valid Commands');
 }
 console.log('Test Sucssesfull!! Ready for Mars');
}

/**
* Function to remove the rover sign generated previously
* Restart the board
*/
function rmPreviousPos(){
 for(var i=0;i<board.length;i++){
   var previousPositionX= board[i].indexOf(rover.sign);
   if(previousPositionX>-1){
     board[i][previousPositionX]=' ';
   }
 }
}


//Generate new board
function move(){ 
 rmPreviousPos();
 board[rover.y][rover.x]=rover.sign;
 console.log('X:' + rover.x + ' Y: ' + rover.y )
 console.log(board.join('\n')); 
 console.log(rover.travelLog);
 rover.travelLog=[];
}

console.log(board.join('\n') + '\n\n');




