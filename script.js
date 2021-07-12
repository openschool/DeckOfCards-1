// class card, and then 
// class deck of cards

class Card
{
  static a = 'something';
  suitNames = ["spades","diamonds","clubs","hearts"];
  rankNames = ["ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king"]; 
  constructor(suit,rank)
  {
  this.suit = suit;
  this.rank = rank;  
  }
  display()
  {
    return this.rankNames[this.rank] + " of " + this.suitNames[this.suit];
  }
}

let myCard = new Card(3,12);
console.log(myCard.display());
console.log(Card.a);