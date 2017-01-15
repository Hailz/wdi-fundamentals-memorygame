console.log("JS file is connected to HTML! Woo!")
var cardOne = "Queen";
var cardTwo = "King";
var cardThree = "Queen";
var cardFour = "King";

/* if cardTwo === cardFour {
	alert: "You found a match!"
}		if else cardOne === cardThree {
	alert: "You found a match!"
}		if else cardOne === cardFour {
	alert: "Sorry, try again."
}		 else {
	alert: "Sorry, try again."} */

var createCards = function(){
	var gameBoard = document.getElementById('game-board');
	for ( var i = 0; i <4; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
}
createCards();
