// class card, and then 
// class deck of cards

class Card
{
  static suitNames = ["spades","diamonds","clubs","hearts"];
  static suitCodes = ["&#x2660;","&#x2666;","&#x2663;","&#x2665;"];
  static rankNames = ["ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king"]; 
  constructor(rank, suit)
  {
  this.rank = rank;  
  this.suit = suit;
  }
  display()
  {
    return Card.rankNames[this.rank] + " of " + Card.suitCodes[this.suit];
  }
}

let myCard = new Card(12,3);
console.log(myCard.display());
let output = document.getElementById("x5");
output.innerHTML=myCard.display();
/*
Black Spade Suit
U+2660
♤
U+2664
Black Heart Suit
U+2665
♡
U+2661
Black Club Suit
U+2663
♧
U+2667
Black Diamond Suit
U+2666
♢
U+2662
*/