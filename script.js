// class card, and then 
// class deck of cards

class Card
{
  static suitNames = ["spades","diamonds","clubs","hearts"];
  static suitCodes = ["&#x2660;","<span class='red'>&#x2666;</span>","&#x2663;","<span class='red'>&#x2665;</span>"];
  static rankNames = ["ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king"];
  static rankSymbols = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]; 
  constructor(rank, suit)
  {
  this.rank = rank;  
  this.suit = suit;
  }
  display()
  {
    return Card.rankSymbols[this.rank] + " of " + Card.suitCodes[this.suit];
  }
}

let myCard = new Card(9,1);
let output = document.getElementById("x5");
output.innerHTML=myCard.display();