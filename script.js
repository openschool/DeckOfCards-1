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

let anotherDisplayedCard = document.createElement("div");
anotherDisplayedCard.classList.add("card");
anotherDisplayedCard.innerHTML = myCard.display();

let setOfCards = document.getElementById("setOfCards");

let clonedNode = anotherDisplayedCard.cloneNode(true);
setOfCards.appendChild(clonedNode);
clonedNode = anotherDisplayedCard.cloneNode(true);
setOfCards.appendChild(clonedNode);
clonedNode = anotherDisplayedCard.cloneNode(true);
setOfCards.appendChild(clonedNode);

let second = document.querySelector('#setOfCards');
second.addEventListener("click", function () 
  {
    event.target.closest('div').style.visibility='hidden';
  }
  );

