let score = 0
let turn = 0
let playerID = document.getElementById('player' + turn)

const pigs = ["yesDot", "noDot", "trotter", "razorBack", "snouter", "leaningJowler"]


function handleClick(buttonId) {
    console.log(buttonId)
    if (buttonId.includes("PassButton")) {
        passPigs();
    } else if (buttonId.includes("RollButton")) {
        rollTwoPigs();
    } else if (buttonId.includes("replay")) {
        replay();
    }
}
function rollPigs() {
    let x = (Math.random(1) * 100)
    console.log("roll")
    // console.log(x)
    if (x < 35) {
        y = pigs[0]
    } else if (x > 35 && x < 68.1) {
        y = pigs[1]
    } else if (x > 68.1 && x < 90.5) {
        y = pigs[2]
    } else if (x > 90.5 && x < 99.3) {
        y = pigs[3]
    } else {
        y = pigs[4]
    }
    return y
}
function rollTwoPigs() {
    let pig1 = rollPigs()
    let pig2 = rollPigs()
    console.log(pig1)
    console.log(pig2)
    scorePigs(pig1, pig2)
}
function passPigs() {
    console.log("pass")
    changeBackground()
}
function changeBackground() {
    playerID.setAttribute = ('class', 'w3-card w3-container w3-light-gray w3-round-large')
    if (turn == 3){
        turn = 0
    } else {
        turn++
    }
    playerID.setAttribute = ('class', 'w3-card w3-container w3-dark-gray w3-round-large')
    console.log(turn)
}
function scorePigs(p1, p2){
    let scoreTurn = (playerID + "HandScore")
    if (p2 == "trotter"){
        score =+ 5
    } else if (p1 == "trotter") {
        score =+ 5
    }
    scoreTurn.innerHTML = "Score: " + score
}
function replay() {
    console.log("reset")
    score = 0
}