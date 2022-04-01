const vowel = ['a', 'e', 'i', 'o', 'u', 'y']
let message = Array.from('blob')
let mlength = message.length
let bopMessage = message


for (let i = 0; i < message.length; i++) {
    if (bopMessage[i] == vowel.some) {
        console.log(bopMessage[i])
    } else {
        console.log(bopMessage[i] + 'op')
    }
}