let message = Array.from('hello there')
let mlength = message.length
let bopMessage = message


for (let i = 0; i < message.length; i++) {
    if (bopMessage[i] == 'e'||bopMessage[i] == 'a'||bopMessage[i] == 'i'||bopMessage[i] == 'o'||bopMessage[i] == 'u'||bopMessage[i] == 'y'||bopMessage[i] == ' ') {
        console.log(bopMessage[i])
    } else {
        console.log(bopMessage[i] + 'op')
    }
}