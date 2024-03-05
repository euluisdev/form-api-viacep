'use strict';

const cep = document.querySelector('#cep');
const endereco = document.querySelector('#endereco');

const completForm = (dadosAll) => {
    endereco.value = dadosAll.logradouro;
    
};

const pesquisarCep = async () => {
    const inputCep = cep.value;
    const url = `http://viacep.com.br/ws/${inputCep}/json/`;
    const dados = await fetch(url);
    const dadosAll = await dados.json();
    completForm(dadosAll);
};

cep.addEventListener('focusout', pesquisarCep); 