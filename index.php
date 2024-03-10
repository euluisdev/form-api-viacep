<!DOCTYPE html>
<html lang="pt_BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <script src="./script.js" defer></script>
    <title>Cadastro</title>
</head>

<body>
    <form id="formulario" action="./salvar-form.php" method="POST" class="container">
        <input type="hidden" name="acao" value="Cadastrar">
        <h1 class="title">Cadastro</h1>
        <div class="row">
            <div class="inputbox">
                <input type="text" id="nome" name="nome" required>
                <label for="nome">Nome</label>
            </div>
            <div class="inputbox">
                <input type="text" id="email" name="email" required>
                <label for="email">Email</label>
            </div>
        </div>
        <div class="row">
            <div class="inputbox">
                <input type="text" id="cep" name="cep" required>
                <label for="cep">CEP</label>
            </div>
            <div class="inputbox">
                <input type="text" id="endereco" name="endereco" required>
                <label for="endereco">Endereço</label>
            </div>
            <div class="inputbox">
                <input type="number" id="numero" name="numero" required>
                <label for="numero">Número</label>
            </div>

            <div class="inputbox">
                <input type="text" id="bairro" name="bairro" required>
                <label for="bairro">Bairro</label>  
            </div>
            <div class="inputbox">
                <input type="text" id="cidade" name="cidade" required>
                <label for="cidade">Cidade</label>
            </div>
            <div class="inputbox">
                <input type="text" id="estado" name="estado" required>
                <label for="estado">Estado</label>
            </div>
        </div>
        <div class="row">
            <button id="btn" type="submit">Salvar</button>
        </div>
    </form>
    <footer>
        euluis-dev
    </footer>

</body>

</html>