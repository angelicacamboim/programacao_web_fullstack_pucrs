function Soma() {
    var e1 = parseInt(document.getElementById("v1").value);
    var e2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: " + (e1 + e2);
}

function testLocalStorage(){
    var nome = document.getElementById("name").value;
    localStorage.setItem("name",nome);
    document.getElementById("local").innerHTML = localStorage.getItem("name");
}


