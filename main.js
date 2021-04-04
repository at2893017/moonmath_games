//reference canvas element
var canvas = document.getElementById("mcCanvas");
var context = canvas.getContext("2d");
var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');

//instances of images
//global?
var bgImage = new Image();
//main menu - levels
var logoImage = new Image();
var earthImg = new Image();
var lvl1Img = new Image();
var lvl2Img = new Image();
var lvl3Img = new Image();
var moonImg = new Image();
var rocketImg = new Image();
//numbers and operators
var one = new Image();
var two = new Image();
var three = new Image();
var four = new Image();
var five = new Image();
var six = new Image();
var seven = new Image();
var eight = new Image();
var nine = new Image();
var plus = new Image();
var minus = new Image();
var equals = new Image();

// global var to check levels
var canOpen = 1;
var currLevel = 1;
var indLevel = 0;

//source path
bgImage.src = "images/gameboardbg.jpg";
logoImage.src = "moonChallengeImgs/moonChallengeHeader.png";
earthImg.src = "moonChallengeImgs/earth.png";
lvl1Img.src = "moonChallengeImgs/lvl1.png";
lvl2Img.src = "moonChallengeImgs/lvl2.png";
lvl3Img.src = "moonChallengeImgs/lvl3.png";
moonImg.src = "moonChallengeImgs/moon.png";
rocketImg.src = "moonChallengeImgs/rocket.png";

one.src = "additionImages/1.png";
two.src = "additionImages/2.png";
three.src = "additionImages/3.png";
four.src = "additionImages/4.png";
five.src = "additionImages/5.png";
six.src = "additionImages/6.png";
seven.src = "additionImages/7.png";
eight.src = "additionImages/8.png";
nine.src = "additionImages/9.png";
equals.src = "additionImages/equals.png";
minus.src = "additionImages/minus.png";
plus.src = "additionImages/plus.png";

//Button arrays
//INDEX REPRESENTATION 
//0=earth,1=lvl1,2=lvl2,3=lvl3,4=moon
var buttonX = [620, 480, 340, 200, 50];
var buttonY = [460, 382, 304, 226, 150];
var buttonWidth = [130, 100, 100, 100, 110];
var buttonHeight = [130, 100, 100, 100, 110];
//var unlocked=[true,true,false,false,false];

//Rocket X and Y position
var rocketHeight = 130;
var rocketWidth = 58;
var rocketX = 650;
var rocketY = 460;

var lvlPlay=false;

//Animation through intervals
var frames = 30;
var timerId = 0;
timerId = setInterval(update, 1000 / frames);
//setInterval(update,1000/30);

//update function for menu
function update() {
	clear();
  if(lvlPlay==false) { draw(); }
  else if (lvlPlay==true) {
    if(currLevel==1) { level1(); }
  }
	canvas.addEventListener("mouseup", checkClick);
	canvas.addEventListener("mousemove", checkPos);
}

//clear function
function clear() {
	context.clearRect(0, 0, width, height);
}

//create move function to move rocket ship every time user clicks on button

//draw function
function draw() {
	//BGIMAGE IS CONSISTENT
	context.drawImage(bgImage, 0, 0);
	//MAIN MENU
	context.drawImage(logoImage, 200, 50);
	context.drawImage(earthImg, buttonX[0], buttonY[0]);
	context.drawImage(lvl1Img, buttonX[1], buttonY[1]);
	context.drawImage(lvl2Img, buttonX[2], buttonY[2]);
	context.drawImage(lvl3Img, buttonX[3], buttonY[3]);
	context.drawImage(moonImg, buttonX[4], buttonY[4]);
	context.drawImage(rocketImg, rocketX, rocketY);
	lvlPlay = true;
}

function alert() {
	alert("This level is still locked. Complete the previous one(s) first!");
}

//Checking the mouse position
var mouseX;
var mouseY;


canvas.addEventListener("mousemove", checkPos);
function checkPos(mouseEvent) {
	mouseX = mouseEvent.pageX - this.offsetLeft;
	mouseY = mouseEvent.pageY - this.offsetTop;

	if (mouseEvent.pageX || mouseEvent.pageY == 0) {
		mouseX = mouseEvent.pageX - this.offsetLeft;
		mouseY = mouseEvent.pageY - this.offsetTop;
	}
	else if (mouseEvent.offsetX || mouseEvent.offsetY == 0) {
		mouseX = mouseEvent.offsetX;
		mouseY = mouseEvent.offsetY;
	}
}

// Checking for mouse clicks
canvas.addEventListener("mouseup", checkClick);
function checkClick(mouseEvent) {
	for (i = 0; i < buttonX.length; i++) {
		if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {
			if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {
				indLevel=i;
        if(indLevel<=canOpen) {
          rocketX = buttonX[i];
				  rocketY = buttonY[i];
          currLevel=indLevel;
				  // level1();
        }
        else {
          alert();
        }
			}
		}
	}
}




function getRandomInt(max) {
	return Math.floor(1 + Math.random() * max);
}


function level1() {
	// adding 1-5 and 1-9
	currLevel = 1;
	if (currLevel <= canOpen) {
		var firstNum = getRandomInt(5); // 1-5
		var secondNum = getRandomInt(9); //1-9
		if (firstNum == 1) {
			context.drawImage(one, 50, 50);
		}
		else if (firstNum == 2) {
			context.drawImage(two, 50, 50);
		}
		else if (firstNum == 3) {
			context.drawImage(three, 50, 50);
		}
		else if (firstNum == 4) {
			context.drawImage(four, 50, 50);
		}
		else if (firstNum == 5) {
			context.drawImage(five, 50, 50);
		}

		context.drawImage(plus, 100, 100);

		if (secondNum == 1) {
			context.drawImage(one, 150, 150);
		}
		else if (secondNum == 2) {
			context.drawImage(two, 150, 150);
		}
		else if (secondNum == 3) {
			context.drawImage(three, 150, 150);
		}
		else if (secondNum == 4) {
			context.drawImage(four, 150, 150);
		}
		else if (secondNum == 5) {
			context.drawImage(five, 150, 150);
		}
		else if (secondNum == 6) {
			context.drawImage(six, 150, 150);
		}
		else if (secondNum == 7) {
			context.drawImage(seven, 150, 150);
		}
		else if (secondNum == 8) {
			context.drawImage(eight, 150, 150);
		}
		else if (secondNum == 9) {
			context.drawImage(nine, 150, 150);
		}
		context.drawImage(equals, 100, 100);
		lvlPlay = false;
	}
}