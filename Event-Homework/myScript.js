let myMessage = document.getElementById("message")

function change(){
    let firstName = document.getElementById("name").value
    let animalOfChoice = document.getElementById("animal").value
    myMessage.innerHTML = "Hello " + firstName + ", dont't you want to be a " + animalOfChoice + "?"
}
function changeColor(){
    document.getElementById('name').style.backgroundColor = "red"
}