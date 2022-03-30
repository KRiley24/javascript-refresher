let flips = 20 
let heads = 0
let tails = flips - heads

flipACoin(flips)

function flipACoin(flip){
    for (let i = 0; i < flip; i++) {
    let outcome = Math.random()
    if (outcome == 1) {
        heads++
    }
}
return heads
}
console.log("You got " + heads + " out of " + flips + " flips.")