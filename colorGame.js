
var numSquares = 6;
var colors = [];
var answerColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var headingBackground = document.querySelector("h1");
var restartButton = document.querySelector("#restart");
var diffButtons = document.querySelectorAll(".difficulty");

init();

function init(){
	restartButton.addEventListener("click", restart);
	//Easy and Hard Buttons
	for (var i = 0; i < diffButtons.length; i++){
		diffButtons[i].addEventListener("click", function(){
			diffButtons[0].classList.remove("selected");
			diffButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			restart();
		});
	}

	//Add click listeners, add text on clicks;
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
		if (this.style.backgroundColor === answerColor){
			changeColors(answerColor);
			messageDisplay.textContent = "Correct!";
			restartButton.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = document.body.style.backgroundColor;
			messageDisplay.textContent = "Try Again!";
		}
		});
	}
	restart();
}

//Change all squares/header to a color
function changeColors(color){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	headingBackground.style.backgroundColor = color;
}

//Pick an answer from available colors
function randomAnswer(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//Generate Colors array
function generateColors(num){
	colorArray = []; 
	for (var i = 0; i < num; i++){
		colorArray.push(rgbGenerator());
	}
	return colorArray;
}

//Choose a random color with RGB values
function rgbGenerator(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function restart(){
	colors = generateColors(numSquares);
	answerColor = randomAnswer();
	colorDisplay.textContent = answerColor;
	restartButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
	headingBackground.style.backgroundColor = "steelblue";
}
