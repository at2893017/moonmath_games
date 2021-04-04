window.onload = initAll;

function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  }
  else{
    alert("Your browser does not support this script.");
  }
}

function select(elem) {
  
  if(document.getElementById(elem).style.backgroundColor == 'lightcoral')
  {
    document.getElementById(elem).style.backgroundColor = "rgb(166, 222, 255)";//TODO: Consistent color formats
  }
  else
  {
    document.getElementById(elem).style.backgroundColor = 'lightcoral';
  }

}

function onBoxHover(elem) {
  if(!(document.getElementById(elem).style.backgroundColor == 'lightcoral'))
  {
    document.getElementById(elem).style.backgroundColor = "rgb(202, 234, 255)";
  }
}

function changeBack(elem) {
  if(!(document.getElementById(elem).style.backgroundColor == 'lightcoral'))
  {
    document.getElementById(elem).style.backgroundColor = "rgb(166, 222, 255)";
  }
}