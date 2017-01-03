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
 
 var createCards = function(){
	for (var i = 1; i<7; i++){
 		var card = document.createElement('div');
 		card.className = "card";
 		gameboard.appendChild(card);
 	}
 }

 createCards()

 