'use strict';

const cep = document.querySelector('#cep');
const endereco = document.querySelector('#endereco');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');


const completForm = (dadosAll) => {
    endereco.value = dadosAll.logradouro;
    bairro.value = dadosAll.bairro;
    cidade.value = dadosAll.localidade;
    estado.value = dadosAll.uf;
};

const pesquisarCep = async () => {
    const inputCep = cep.value;
    const url = `http://viacep.com.br/ws/${inputCep}/json/`;
    const dados = await fetch(url);
    const dadosAll = await dados.json();
    completForm(dadosAll);
};

cep.addEventListener('focusout', pesquisarCep); 