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
