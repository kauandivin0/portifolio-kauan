const formulario = document.getElementById("formContato");

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let mensagem = document.getElementById("mensagem").value;

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Digite um e-mail válido.");
            return;
        }

        alert("Mensagem enviada com sucesso!");

        formulario.reset();
    });
}