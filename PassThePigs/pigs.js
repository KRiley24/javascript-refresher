const score0 = 0
const score1 = 0
const score2 = 0
const score3 = 0
const turn = 0

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
        console.log(pigs[0])
        y = pigs[0]
    } else if (x > 35 && x < 68.1) {
        console.log(pigs[1])
        y = pigs[1]
    } else if (x > 68.1 && x < 90.5) {
        console.log(pigs[2])
        y = pigs[2]
    } else if (x > 90.5 && x < 99.3) {
        console.log(pigs[3])
        y = pigs[3]
    } else {
        console.log(pigs[4])
        y = pigs[4]
    }
    return y
}
function rollTwoPigs() {
    let pig = []
    for (let i = 0; i < 2; i++) {
        rollPigs()
        pig.push(y)
    }
    if (pig[0] && pig[1] == "yesDot" || "notDot") {
        console.log(1)
    }
    if (pig[0] && pig[1] == "trotter" || "razorBack") {
        console.log(20)
    }
    if (pig[0] && pig[1] == "snouter") {
        console.log(40)
    }
    if (pig[0] && pig[1] == "leaningJowler") {
        console.log(60)
    }
    if (pig[0] == "yesDot" && pig[1] == "noDot" || pig[0] == "noDot" && pig[1] == "yesDot") {
        console.log("pig out")
        // passPigs()
    }
    if (pig[0] || pig[1] == "trotter" && pig[0] || pig[1] == "razorBack" || "noDot" || "yesDot" || "snouter" || "leandingJowler") {
        console.log(5)
    }
    if (pig[0] || pig[1] == "razorBack" && pig[0] || pig[1] == "trotter" || "noDot" || "yesDot" || "snouter" || "leandingJowler") {
        console.log(5)
    }
    if (pig[0] || pig[1] == "snouter" && pig[0] || pig[1] == "trotter" || "noDot" || "yesDot" || "razorBack" || "leaningJowler") {
        console.log(10)
    }
    if (pig[0] || pig[1] == "leaningJowler" && pig[0] || pig[1] == "trotter" || "noDot" || "yesDot" || "razorBack" || "snouter") {
        console.log(15)
    }
    console.log(pig[0])
    console.log(pig[1])
}
function passPigs() {
    let newPlayer = document.getElementById('player' + turn)
    console.log("pass")
    newPlayer.setAttribute = ('class', 'w3-card w3-container w3-dark-gray w3-round-large')
    turn=+ 1
    if (turn > 3){
        turn = 0
    }
    updateTotalScore()
}
function updateTotalScore() {
    console.log("score")
}
function replay() {
    console.log("reset")
}