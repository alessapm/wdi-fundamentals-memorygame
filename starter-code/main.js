// var card1 = "queen";
// var card2 = "king";
// var card3 = "queen";
// var card4 = "king";


/* if (card1 === card3){
	alert("You found a match!")
} else {
	alert("Sorry, not a match!")
} 
*/

var cards = ["queen", "queen", "king", "king", "joker", "joker"];

var board = document.getElementById("gameboard");

var cardElement = document.getElementsByClassName("card")

var cardsInPlay = [];

var isTwoCards = function(){
 		console.log("isTwoCards is running")
 		cardsInPlay.push(this.getAttribute("data-card"));
 			if (cardsInPlay.length === 2){
 				isMatch(cardsInPlay);
 				cardsInPlay = [];
 			}
 			if (this.getAttribute("data-card") === "king"){
				this.innerHTML = '<img src ="king-card.png" alt="King" />'
			} else if (this.getAttribute("data-card") === "queen"){
				this.innerHTML = '<img src ="queen-card.png" alt="Queen" />'
			} else {
				this.innerHTML = "Joker!!"
			}
 	};

 	var createBoard = function(){
		for (var i = 0; i < cards.length; i++){
			cardElement[i].setAttribute("data-card", cards[i]);
			cardElement[i].addEventListener("click", isTwoCards);					
		}
	}
 
 var createCards = function(){
	for (var i = 0; i < cards.length; i++){
 		var card = document.createElement('div');
 		card.className = "card";
 		board.appendChild(card);
 		//console.log("hi")
 	}
 	createBoard()
 }

 createCards()
 	

 	




	

	var isMatch = function(){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("you've found a match!")
			cardElement.innerHTML = '';
		} else {
			alert("sorry, not a match")
		}
		for (var i = 0; i < cardElement.length; i++){
		cardElement[i].innerHTML = " "
		//cardElement.innerHTML = " ";
		}
	}



	


 
