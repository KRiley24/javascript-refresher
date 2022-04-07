console.log("Hello")
// window.alert("Hi")

 let PTag = document.getElementById("myPTag")

 function change(){
     let firstName = document.getElementById("nameInput").value
     PTag.innerHTML = "Hello " + firstName
 }