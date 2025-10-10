const numA = document.getElementById("numA");
const numB = document.getElementById("numB");
const btn = document.getElementById("btn");
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    if (numB.value > numA.value){
        alert("Numero B é maior que o numero A, válido")
    }else{
        event.preventDefault();
        alert("Num B não é maior que Num A, inválido")
    }
})


