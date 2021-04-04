//reference canvas element
var canvas = document.getElementById("mcCanvas");
var context = canvas.getContext("2d");
var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');

//numbers and operators
var bgImage = new Image();
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
var spacejunk = new Image();

//source path
bgImage.src = "images/gameboardbg.jpg";
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
spacejunk.src = "additionImages/spacejunk.png";

//spacejunk position
sjX=[150,250,350,450,550,150,250,350,450];
sjY1=[150,150,150,150,150,250,250,250,250];
sjY2=[350,350,350,350,350,450,450,450,450];

//get both digits
var firstNum = getRandomInt(5); // 1-5
var secondNum = getRandomInt(9); //1-9

//Animation through intervals
var frames = 30;
var timerId = 0;
timerId = setInterval(update, 1000 / frames);

//Update function
function update() {
	clear();
	draw();
}
//clear function
function clear() {
	context.clearRect(0, 0, width, height);
}

function draw() {
  //draw background image
  context.drawImage(bgImage,0,0);
  //Print first number
  //if (firstNum==1) { context.drawImage(one,0,0); }
  //  else if (firstNum==2) { context.drawImage(two,0,0); }
  //  else if (firstNum==3) { context.drawImage(three,0,0); }
  //  else if (firstNum==4) { context.drawImage(four,0,0); }
  //  else {context.drawImage(five,0,0); }

    for(var i=0;i<firstNum;i++) {
      //draw image of space rocks
      context.drawImage(spacejunk,sjX[i],sjY1[y]);
    }

  context.drawImage(plus,60,0);

  //print second number
  //if (secondNum==1) { context.drawImage(one,0,0); }
  //else if (secondNum==2) { context.drawImage(two,0,0); }
  //else if (secondNum==3) { context.drawImage(three,0,0); }
  //else if (secondNum==4) { context.drawImage(four,0,0); } 
  //else if (secondNum==5) { context.drawImage(five,0,0); }
  //else if (secondNum==6) { context.drawImage(six,0,0); }
  //else if (secondNum==7) { context.drawImage(seven,0,0); }
  //else if (secondNum==8) { context.drawImage(eight,0,0); }
  //else { context.drawImage(nine,0,0); }

  for(var i=0;i<firstNum;i++) {
      //draw image of space rocks
      context.drawImage(spacejunk,sjX[i],sjY2[i]);
  }

  context.drawImage(equals,0,0);
}


function getRandomInt(max) {
	return Math.floor(1 + Math.random() * max);
}