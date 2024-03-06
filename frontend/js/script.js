'use strict';

const cep = document.querySelector('#cep');
const endereco = document.querySelector('#endereco');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');

const limparForm = (dados) => { //this clear the form field
    endereco.value = '';
    bairro.value = '';
    cidade.value = '';
    estado.value = '';
};

const completForm = (dados) => { // this fill in the form fields
    endereco.value = dados.logradouro;
    bairro.value = dados.bairro;
    cidade.value = dados.localidade;
    estado.value = dados.uf;
};

const eNumero = (numero) => /^[0-9]+$/.test(numero);  //this check if a string is made up of numbers only


const cepValido = (inputCep) => inputCep.length == 8 && eNumero(inputCep);
// that checks if the CEP is valid

const pesquisarCep = async () => { //this searche the zip code and fill out the form
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