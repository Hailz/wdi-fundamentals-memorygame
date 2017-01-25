console.log("JS file is connected to HTML! Woo!")
var cards = ['queen', 'king', 'queen', 'king'];
var cardsInPlay = [ ];
/* if cardTwo == cardFour {
	alert: "You found a match!"};
}		if else cardOne == cardThree {
	alert: "You found a match!"};
}		 else {
	alert: "Sorry, try again."}; */
var gameBoard = document.getElementById('game-board');
var createBoard = function(){
	for ( var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click',  isTwoCards);
		gameBoard.appendChild(newCard);
	}
}	

var isMatch = function(cardsInPlay){
	if (cardsInPlay[0] === cardsInPlay[1]) { 
	alert("You found a match!");
	}
	else {
	alert("Sorry, try again.");
	}
}

var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="kingCard.jpg" alt="King of Spades" />';}
	else {
		this.innerHTML = '<img src="queenCard.jpg" alt="Queen of Spades" />';}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [ ];}
}

createBoard();