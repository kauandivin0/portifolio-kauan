const formulario = document.getElementById("formContato"); // pega o formulário de contato pelo id

if (formulario) {   
    formulario.addEventListener("submit", function (evento) { // executa quando o formulário é enviado
        evento.preventDefault(); // impede que a página recarregue

        // valores do campo nome, email e mensagem
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let mensagem = document.getElementById("mensagem").value;

        if (nome === "" || email === "" || mensagem === "") { // verifica se algum campo está vazio
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) { // verificação simples de email
            alert("Digite um e-mail válido.");
            return;
        }

        alert("Mensagem enviada com sucesso!"); // confirmação 

        formulario.reset(); // limpa os campos do formulário
    });
}
