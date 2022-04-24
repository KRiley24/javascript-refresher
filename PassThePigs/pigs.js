let score = 0
let turn = 0
let playerID =('player' + turn)

const pigs = ["Dot", "No Dot", "trotter", "razorBack", "snouter", "leaningJowler"]


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
    let playP1 = document.getElementById(playerID + "Pig1")
    let playP2 = document.getElementById(playerID + "Pig2")
    let pig1 = rollPigs()
    let pig2 = rollPigs()
    playP1.innerHTML = pig1
    playP2.innerHTML = pig2
    scorePigs(pig1, pig2)
}
function passPigs() {
    console.log("pass")
    changeBackground()
}
function changeBackground() {
    let playBG = document.getElementById(playerID)
    playBG.setAttribute = ('class', 'w3-card w3-container w3-light-gray w3-round-large')
    if (turn == 3){
        turn = 0
    } else {
        turn++
    }
    playBG.setAttribute = ('class', 'w3-card w3-container w3-red w3-round-large')
    console.log(turn)
}
function scorePigs(p1, p2){
    let scoreTurn = document.getElementById(playerID + "HandScore")
    if (p2 == "Dot" && p1 == "Dot"){
        score =+ 1
    } 
    if (p2 == "Dot" && p1 == "No Dot"){
        score = 0
        passPigs();
    }
    if (p1 == "Dot" && p2 == "No Dot"){
        score = 0
        passPigs();
    }
    if (p1 == "No Dot" && p2 == "No Dot"){
        score += 1
    }
    if (p1 == "trotter" && p2 == "trotter"){
        score += 20
    }
    if (p1 == "razorBack" && p2 == "razorBack"){
        score += 20
    }
    if (p1 == "snouter" && p2 == "snouter"){
        score += 40
    }
    if (p1 == "leaningJowler" && p2 == "leaningJowler"){
        score += 60
    }
    if (p1 == "trotter" && p2 == "No Dot"){
        score += 5
    }
    scoreTurn.innerHTML = "Score: " + score
}
function replay() {
    console.log("reset")
    score = 0
}