function Soma() {
    var e1 = parseInt(document.getElementById("v1").value);
    var e2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: " + (e1 + e2);
}

function testLocalStorage() {
    var nome = document.getElementById("name").value;
    localStorage.setItem("name", nome);
    document.getElementById("local").innerHTML = localStorage.getItem("name");
}

function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `https://viacep.com.br/ws/${cep}/json/`;
            fetch(URL)
                .then(resposta => resposta.json())
                .then(data => mostrarResposta(data))
                .catch(erro => console.error(erro));
        }
    }

}

function mostrarResposta(cep) {
    const mensagem = `
        CEP: ${cep.cep} <br>
        Logradouro: ${cep.logradouro} <br>
        Complemento: ${cep.complemento} <br>
        Bairro: ${cep.bairro} <br>
        Localidade: ${cep.localidade} <br>
        Estado: ${cep.uf} 
    `;
    document.getElementById("resultCep").innerHTML = mensagem
}