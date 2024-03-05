'use strict';

const cep = document.querySelector('#cep');
const rua = document.querySelector('#endereco')

const pesquisarCep = async () => {
    const inputCep = cep.value;
    const url = `http://viacep.com.br/ws/${inputCep}/json/`;
    const dados = await fatch(url);
    const dadosAll = await dados.json();
    completForm(dadosAll);
};

cep.addEventListener('focusout', pesquisarCep); 