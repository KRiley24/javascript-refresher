let message = Array.from('hellothere')
let mlength = message.length
let bopMessage = message


for (let i = 0; i < message.length; i++) {
    if (bopMessage[i] == 'e'||bopMessage[i] == 'a'||bopMessage[i] == 'i'||bopMessage[i] == 'o'||bopMessage[i] == 'u'||bopMessage[i] == 'y') {
        console.log(bopMessage[i])
    } else {
        console.log(bopMessage[i] + 'op')
    }
}