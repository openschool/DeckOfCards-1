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

let myCard = new Card(11,0);
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