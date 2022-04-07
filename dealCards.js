// const card1 = {suit: "Hearts", rank: "Ace"}
// const card2 = {suit: "Diamonds", rank: 7}
// const card3 = {suit: "Spades", rank: "King"}
// const deck = [card1,card2,card3]

// console.log("You are holding " + card1.suit + " of " + card1.rank + " and the " + card2.suit + " of " + card2.rank +".")

// for (let i = 0; i < deck.length; i++){
//     console.log(deck[i].rank + " of " + deck[i].suit)
// }

const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
const suits = ["Hearts", "Spades", "Clubs", "Diamonds"]

const deck = []
for (let suit of suits) {
    for (let i = 0; i < ranks.length; i++) {
        // console.log(ranks[i] + " of " + suit)
        let card = {rank:ranks[i], suit: suit}
        deck.push(card)
    }
}
pullFive()

function pullFive(){
    for (let i = 0; i < 5; i++){
    let pickedCard = deck[Math.floor(Math.random() * (deck.length - 1))]
 console.log(pickedCard.rank + " of " + pickedCard.suit)
 deck.splice(pickedCard,1)
}
}

