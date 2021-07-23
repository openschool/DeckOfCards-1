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

let clonedNode = anotherDisplayedCard.cloneNode(true);
setOfCards.appendChild(clonedNode);
clonedNode = anotherDisplayedCard.cloneNode(true);
setOfCards.appendChild(clonedNode);
clonedNode = anotherDisplayedCard.cloneNode(true);
setOfCards.appendChild(clonedNode);



/* As for clicks on elements with visibility: hidden, the events are not fired.
https://stackoverflow.com/questions/5659563/css-is-a-hidden-object-clickable
*/

/** 
 *    
https://stackoverflow.com/questions/42528100/nth-child-in-javascript

 * attach eventlistener to the second card.
 *   x 1 console.log  "you clicked"
 *   x 2 change visibility to hidden
 *    3 switch from this to event.target
 *    4 switch eventlistener to containing div
 *    
 * 
 * 
 * */
let second = document.querySelector('#setOfCards .card:nth-child(2)');

second.addEventListener("click", function () 
  {
    event.target.style.visibility='hidden';
  }
  );

