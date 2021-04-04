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

//source path
bgImage.src = "images/gameboardbg.jpg";
logoImage.src = "moonChallengeImgs/moonChallengeHeader.png";
earthImg.src = "moonChallengeImgs/earth.png";
lvl1Img.src = "moonChallengeImgs/lvl1.png";
lvl2Img.src = "moonChallengeImgs/lvl2.png";
lvl3Img.src = "moonChallengeImgs/lvl3.png";
moonImg.src = "moonChallengeImgs/moon.png";
rocketImg.src = "moonChallengeImgs/rocket.png";

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

//Animation through intervals
var frames = 30;
var timerId = 0;
timerId = setInterval(update, 1000 / frames);
//setInterval(update,1000/30);

//update function for menu
function update() {
	clear();
	draw();
	canvas.addEventLister("mouseup", checkClick);
	canvas.addEventListener("mousemove", checkPos);
	//(currLevel==1)? level1();
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

//Checking for mouse clicks
canvas.addEventListener("mouseup", checkClick);
function checkClick(mouseEvent) {
	for (i = 0; i < buttonX.length; i++) {
		if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {
			if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {
				rocketX = buttonX[i];
				rocketY = buttonY[i];
				level = i;
			}
		}
	}
}