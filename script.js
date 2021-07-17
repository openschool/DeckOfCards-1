// class card, and then 
// class deck of cards

class Card
{
  static suitNames = ["spades","diamonds","clubs","hearts"];
  static suitCodes = ["<span>&#x2660;</span>","<span class='red'>&#x2666;</span>","<span>&#x2663;</span","<span class='red'>&#x2665;</span>"];
  static rankNames = ["ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king"];
  static rankSymbols = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]; 
  constructor(rank, suit)
  {
  this.rank = rank;  
  this.suit = suit;
  }

  display()
  {
    return "<span>" + Card.rankSymbols[this.rank] + "</span>" + Card.suitCodes[this.suit];
  }
}

let myCard = new Card(9,3);
let output = document.getElementById("x5");
output.innerHTML=myCard.display();

let anotherDisplayedCard = document.createElement("div");
anotherDisplayedCard.classList.add("card");
anotherDisplayedCard.innerHTML = myCard.display();
let setOfCards = document.getElementById("setOfCards");
setOfCards.appendChild(anotherDisplayedCard);
/*
next goal is to create three instances of a card, 
and then get one to display the card, another to display the back of the card, and a third to display a picture underneath all three of the cards.  using multiple css backgrounds.

pull in a picture of entire family.  make that the background. 

make either the face of card show or the background family picture show through.

make back of card show as a third option.

https://spin.atomicobject.com/2015/04/07/css-multiple-backgrounds/
*/