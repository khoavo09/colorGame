var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var h1Display = document.querySelector("h1");
var newGameBtn = document.querySelector("button");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var pickedColor = pickColor(6);
var colorDisplay = document.getElementById("colorDisplay");
var modeButton = document.querySelectorAll(".mode");
colorDisplay.textContent = pickedColor;



init();
function init(){
	setUpModeListeners();
	setUpSquareListeners();
	reset();
}

function setUpModeListeners(){
	for(var i = 0; i <modeButton.length;i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});

	}
}


function setUpSquareListeners(){
		for (var i = 0; i < squares.length; i++){

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;

		if(this.style.backgroundColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			h1Display.style.backgroundColor = clickedColor;
			for (var k = 0; k < squares.length; k++){
				squares[k].style.backgroundColor = clickedColor;
			}
			newGameBtn.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}

	});
}
}


function reset(){
	//generate all new color
	colors = generateRandomColors(numSquares);
	//change the picked color
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	newGameBtn.textContent = "New Color"
	h1Display.style.backgroundColor = "steelblue"
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1Display.style.backgroundColor = "steelblue";
}

newGameBtn.addEventListener("click", function(){
	reset();
});

function pickColor(){
	var random = Math.floor(Math.random() * colors.length); 
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	var randomNum = [];
	for(var i = 0; i < num; i++){
		for(var j = 0; j < 3; j++){
			randomNum[j] = Math.floor(Math.random() * 255 + 1); 
		}
		var oneColor = "rgb(" + randomNum[0] +", "+ randomNum[1] + ", " +randomNum[2] +")";
		arr.push(oneColor);
	}
	return arr;

}