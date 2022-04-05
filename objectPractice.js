const Student1 = { fName: "Kate", lName: "Smith", GPA: 3.8, playsVol: false }
const Student2 = { fName: "Rachel", lName: 'Owens', GPA: 3.5, playsVol: true }
const Students = [Student1, Student2]
// console.table(Student1)

for (let i = 0; i < Students.length; i++){
    console.log("I know " + Students[i].fName + " " + Students[i].lName + ".")
if (!Students[i].playsVol) {
    console.log("She does not play volleyball.")
} else {
    console.log("She does play volleyball.")
}
console.log("She has a GPA of " + Students[i].GPA + '.')
console.log("------------------------------------------")
}

console.log(Students[1].fName, Students[1].lName)

