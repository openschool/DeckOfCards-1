// class card, and then 
// class deck of cards

class Card
{
  static suitNames = ["spades","diamonds","clubs","hearts"];
  static rankNames = ["ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king"]; 
  constructor(rank, suit)
  {
  this.rank = rank;  
  this.suit = suit;
  }
  display()
  {
    return Card.rankNames[this.rank] + " of " + Card.suitNames[this.suit];
  }
}

let myCard = new Card(12,3);
console.log(myCard.display());