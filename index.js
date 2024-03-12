let button = document.querySelector('button')
let name = document.getElementById("name")
let student = ["Sübhan", "Royal", "Pakizə", "Aqşin", "Dmitri", "Aysel", "Elnur","Emil","Faiq","Fidan G.", "Fidan A.","Hacı","İbrahim","Leyla","Bayram","Namiq","Nazənin","Nigar","Rauf","Səməndər","Elvin","Günay","Ayla","Brilliant",]
let randomStudent = function(){
    let  index = Math.floor(Math.random() * student.length)
    return student[index];
}
button.addEventListener("click", function() {
    name.textContent = randomStudent();
});