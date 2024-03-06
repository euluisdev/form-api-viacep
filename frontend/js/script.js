/* 'use strict';

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

cep.addEventListener('focusout', pesquisarCep);  */



                    // #POO
'use strict';  

class FormCep {
    constructor() {
        this.cep = document.querySelector('#cep');
        this.endereco = document.querySelector('#endereco');
        this.bairro = document.querySelector('#bairro');
        this.cidade = document.querySelector('#cidade');
        this.estado = document.querySelector('#estado');

        this.cep.addEventListener('focusout', this.pesquisarCep);
    }

    limparForm = (dados) => {
        this.endereco.value = '';
        this.bairro.value = '';
        this.cidade.value = '';
        this.estado.value = '';
    }

    completForm = (dados) => {
        this.endereco.value = dados.logradouro;
        this.bairro.value = dados.bairro;
        this.cidade.value = dados.localidade;
        this.estado.value = dados.uf;
    }

    eNumero = (numero) => /^[0-9]+$/.test(numero);

    validarCep = (inputCep) => inputCep.length == 8 && this.eNumero(inputCep);

    pesquisarCep = async () => {
        this.limparForm();

        const inputCep = this.cep.value;
        const url = `http://viacep.com.br/ws/${inputCep}/json/`;

        if (this.validarCep(inputCep)) {
            const response = await fetch(url);
            const dados = await response.json();

            if (dados.hasOwnProperty('erro')) {
                this.endereco.value = `CEP não encontrado!`;
            } else {
                this.completForm(dados);
            }
        } else {
            this.endereco.value = `CEP incorreto! Digite um CEP válido.`
        }

    }
};

const form = new FormCep();
