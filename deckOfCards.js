let suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
let faces = ["Jack", "Queen", "King", "Ace"]

for (let suit of suits) {
    for (let i = 2; i < 11; i++) {
        console.log(i + " of " + suit)
    }
    for (let face of faces) {
        console.log(face + " of " + suit)
    }
}
