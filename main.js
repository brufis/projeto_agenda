const form = document.getElementById('form-contatos');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
    atualizaAgenda();
});

function adicionaContato(){

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (telefones.includes(inputNumeroContato.value)){
        alert(`O número ${inputNumeroContato.value} já está cadastrado.`);
    }

    else if (contatos.includes(inputNomeContato.value)){
            alert(`O contato ${inputNomeContato.value} já existe.`);
    }

    else{
        contatos.push(inputNomeContato.value);
        telefones.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha +=`<td>${inputNomeContato.value}</td>`;
        linha +=`<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaAgenda(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}