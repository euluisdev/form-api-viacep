'use strict';

const cep = document.querySelector('#cep');
const endereco = document.querySelector('#endereco');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');

const completForm = (dados) => {
    endereco.value = dados.logradouro;
    bairro.value = dados.bairro;
    cidade.value = dados.localidade;
    estado.value = dados.uf;
};

const pesquisarCep = async () => {
    const inputCep = cep.value;
    const url = `http://viacep.com.br/ws/${inputCep}/json/`;
    if (cepValido(cep)) {
        const response = await fetch(url);
        const dados = await response.json();

        if (dados.hasOwnProperty('erro')) {
        endereco.value = 'CEP não encontrado!';
        } else {
            completForm(dados); 
        } 
    } else {
        endereco.value = 'CEP incorreto, tente novamente!';
    }
    
};

cep.addEventListener('focusout', pesquisarCep); 