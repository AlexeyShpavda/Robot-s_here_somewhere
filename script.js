let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let currentlyPlaying = true;

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
  	gameOver('win');
	} else if (isBot(door)) {
    gameOver();
  }
}

const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const randomChoreDoorGenerator = () => {
  choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
	openDoor1 = botDoorPath;
	openDoor2 = beachDoorPath;
	openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
	openDoor1 = botDoorPath;
	openDoor2 = spaceDoorPath;
	openDoor3 = beachDoorPath;
  } else if (choreDoor === 2) {
	openDoor1 = beachDoorPath;
	openDoor2 = botDoorPath;
	openDoor3 = spaceDoorPath;
  } else if (choreDoor === 3) {
	openDoor1 = beachDoorPath;
	openDoor2 = spaceDoorPath;
	openDoor3 = botDoorPath;
  } else if (choreDoor === 4) {
	openDoor1 = spaceDoorPath;
	openDoor2 = beachDoorPath;
	openDoor3 = botDoorPath;
  } else {
	openDoor1 = spaceDoorPath;
	openDoor2 = botDoorPath;
	openDoor3 = beachDoorPath;
  }
}

door1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying) {
    doorImage1.src = openDoor1;
    playDoor(door1);
  }
}
door2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying) {
    doorImage2.src = openDoor2;
    playDoor(door2);
  }
}
door3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying) {
    doorImage3.src = openDoor3;
    playDoor(door3);
  }
}

startButton.onclick = () => {
  if (!currentlyPlaying) {
  	startRound();
  }
}

const startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = (str) => {
  if(str == 'win') {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
}

startRound();