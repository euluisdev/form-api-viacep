'use strict';

const cep = document.querySelector("#cep");

const pesquisarCep = () => {
    const inputCep = cep.value;
    const url = `http://viacep.com.br/ws/${inputCep}/json/`;
    fetch(url)
        .then(response => {  //return promess assync
            return console.log(response.json());
        })  

};

cep.addEventListener('focusout', pesquisarCep); 