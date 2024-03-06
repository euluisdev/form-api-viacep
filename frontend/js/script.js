'use strict';

const cep = document.querySelector('#cep');
const endereco = document.querySelector('#endereco');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');

const limparForm = (dados) => {
    endereco.value = '';
    bairro.value = '';
    cidade.value = '';
    estado.value = '';
};

const completForm = (dados) => {
    endereco.value = dados.logradouro;
    bairro.value = dados.bairro;
    cidade.value = dados.localidade;
    estado.value = dados.uf;
};

const eNumero = (numero) => /^[0-9]+$/.test(numero); 

const cepValido = (inputCep) => inputCep.length == 8 && eNumero(inputCep);

const pesquisarCep = async () => {
    limparForm();

    const inputCep = cep.value;
    const url = `http://viacep.com.br/ws/${inputCep}/json/`;
    if (cepValido(inputCep)) {
        const response = await fetch(url);
        const dados = await response.json();

        if (dados.hasOwnProperty('erro')) {
        endereco.value = 'CEP não encontrado!';
        } else {
            completForm(dados); 
        } 
    } else {
        endereco.value = 'CEP incorreto, Digite um CEP válido!';
    }
    
};

cep.addEventListener('focusout', pesquisarCep); 