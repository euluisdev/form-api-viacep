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
            define('BASE', 'viacep');  // nome da base de dados mysql

            try {
                $conn = new mysqli (HOST, USER, PASS, BASE);

                if ($conn->connect_error) {
                    throw new Exception ("Conexão falhou: " . $conn->connect_error);
                }

                $sql = "INSERT INTO cep (nome, email, cep, endereco, numero, bairro, cidade, estado) VALUES ('{$nome}', '{$email}', '{$cep}', '{$endereco}', '{$numero}', '{$bairro}', '{$cidade}', '{$estado}')";
                $res = $conn->query($sql);

                if ($res === true) {
                    echo "<script>alert('Cadastrado realizado com sucesso!');</script>";
                    echo "<script>location.href='./index.php';</script>";
                } else {
                    echo "<script>alert('Não foi possível cadastrar.');</script>";
                    echo "<script>location.href='./index.php';</script>";
                }
            } catch (Exception $e) {
                if ($e->getCode() === '23000') {
                    echo "<script>alert('Ocorreu um erro: Já existe um registro com o mesmo email.');</script>";
                } else {
                    echo "<script>alert('Ocorreu um erro: " . $e->getMessage() . "');</script>";
                }
                echo "<script>location.href='./index.php';</script>";
            };

        break;
    }

