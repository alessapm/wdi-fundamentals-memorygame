var card1 = "queen";
var card2 = "king";
var card3 = "queen";
var card4 = "king";


/* if (card1 === card3){
	alert("You found a match!")
} else {
	alert("Sorry, not a match!")
} 
*/

var board = document.getElementById("gameboard");
 
 // var createCards = function(){
	// for (var i = 1; i<10; i++){
 // 		var card = document.createElement('div');
 // 		card.className = "card";
 // 		gameboard.appendChild(card);
 // 	}
 // }

 // createCards()

 var cards = ["queen", "queen", "king", "king"];

 var cardsInPlay = [];

 var isTwoCards = function(){
 	cardsInPlay.push(this.getAttribute("data-card"));
 	if (cardsInPlay.length === 2){
 		isMatch(cardsInPlay);
 		cardsInPlay = [];
 	}
 };

var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		cardElement.setAttribute("data-card", cards[i]);
		cardElement.addEventListener("click", isTwoCards);
		cardElement.innerHTML = '<img src = "king-card.png" alt="King" />'
	}
}

var isMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		cardElement.innerHTML = '';
	}
}

