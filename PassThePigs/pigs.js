const score0 = 0
const score1 = 0
const score2 = 0
const score3 = 0

const pigs = ["yesDot", "noDot", "trotter", "razorBack", "snouter", "leaningSnouter"]


function handleClick(buttonId) {
    console.log(buttonId)
    if (buttonId.includes("PassButton")) {
        passPigs();
    } else if (buttonId.includes("RollButton")) {
        rollPigs();
    } else if (buttonId.includes("replay")) {
        replay();
    }
}
function rollPigs() {
    let x = (Math.random(1) * 100)
    console.log("roll")
    console.log(x)
    if (x < 35){
        console.log(pigs[0])
    } else if(x > 35 && x < 65.2){
        console.log(pigs[1])
    }else if (x > 65.3 && x < 91.7){
        console.log(pigs[2])
    }else if (x > 91.8 && x < 99.7){
        console.log(pigs[3])
    } else {
        console.log(pigs[4])
    }
}
function passPigs() {
    let newPlayer = document.getElementById('player3')
    console.log("pass")
    newPlayer.setAttribute = ('class', 'w3-card w3-container w3-dark-gray w3-round-large')
    updateTotalScore()
}
function updateTotalScore() {
    console.log("score")
}
function replay() {
    console.log("reset")
}