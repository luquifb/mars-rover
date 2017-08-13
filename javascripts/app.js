var myGrid = [
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"], 
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
];

function maper(mapa) {
  myGrid[rover.position[0]][rover.position[1]] = "X";
  console.log("La direccion de mi rover es: " + rover.direction)
  console.log("La posicion de mi rover es: " + rover.position)
  console.log(mapa.join('\n') + '\n\n');
}

var rover = {
  direction: "N",
  position: [3,3],
  travelLog: [],
  positionX: 0,
  positionY: 0,
}


function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
    break;
      case "S":
      rover.direction = "E";
    break;
      case "E":
      rover.direction = "N";
    break;
      case "W":
      rover.direction = "S";
      break;
  }
    console.log("turnLeft was called!")
    maper(myGrid)
}


function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
    break;
    case "S":
      rover.direction = "W";
    break;
    case "E":
      rover.direction = "S";
    break;
    case "W":
      rover.direction = "N";
    break;
      
  }
    console.log("turnRight was called!")
    maper(myGrid)

}


function goForward(rover){
  myGrid[rover.position[0]][rover.position[1]] = "-";  
  switch (rover.direction){
    case "N":
      rover.position [0]--;
    break;
    case "S":
      rover.position [0]++;
    break;
    case "E":
      rover.position [1]++;
    break;
    case "W":
      rover.position [1]--;
    break;
  }
  console.log("goForward was called!")
  rover.travelLog.push(rover.position)
  maper(myGrid)
}

function goBackward(rover){
  switch (rover.direction){
    case "N":
      rover.position [0]++;
    break;
    case "S":
      rover.position [0]--;
    break;
    case "E":
      rover.position [1]--;
    break;
    case "W":
      rover.position [1]++;
    break;
  }
  console.log("goBackward was called!")
  rover.travelLog.push(rover.positionX, rover.positionY)
  maper(myGrid)
}


/*
var moveRover = ["F", "F", "L", "F", "F"];

if (moveRover === true) {
  console.log("F");

  if (moveRover === true) 
    console.log("R");

  if (moveRover === true) 
    console.log("L");
}

*/

function moveRover(rover){
    switch (rover){
      case "r":
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      case "f":
      goForward(rover);
      break;
      case "b":
      goBackward(rover);
      break;
    }
  }


maper(myGrid)

console.log("Tu rover estuvo aquí: " + rover.positionX, rover.positionY);
