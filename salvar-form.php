<?php 
        switch ($_POST["acao"]) {
            case 'cadastrar':
                $nome = filter_var($_POST['nome'], FILTER_SANITIZE_STRING);
                $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
                $cep = filter_var($_POST['cep'], FILTER_SANITIZE_NUMBER_INT);
                $endereco = filter_var($_POST['endereco'], FILTER_SANITIZE_STRING);
                $numero = filter_var($_POST['numero'], FILTER_SANITIZE_STRING);
                $bairro = filter_var($_POST['bairro'], FILTER_SANITIZE_STRING);
                $cidade = filter_var($_POST['cidade'], FILTER_SANITIZE_STRING);
                $estado = filter_var($_POST['estado'], FILTER_SANITIZE_STRING);

                define('HOST', 'localhost');
                define('USER', 'root');
                define('PASS', '');
                define('BASE', 'viacep');

                $conn =  new mysqli(HOST, USER, PASS, BASE);
                break;
        }