function salvarCadastro() {
    const dadosCadastro = {
        nome: document.querySelector("#nome").value,
        cpf: document.querySelector("#cpf").value,
        telefone: document.querySelector("#telefone").value,
        email: document.querySelector("#email").value,
        cep: document.querySelector("#cep").value,
        numero: document.querySelector("#numero").value,
        complemento: document.querySelector("#complemento").value,
        tipo: document.querySelector("#tipo").value
    };

    localStorage.setItem("cadastroONG", JSON.stringify(dadosCadastro));
}

function carregarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastroONG");

    if (dadosSalvos) {
        const dadosCadastro = JSON.parse(dadosSalvos);

        document.querySelector("#nome").value = dadosCadastro.nome || "";
        document.querySelector("#cpf").value = dadosCadastro.cpf || "";
        document.querySelector("#telefone").value = dadosCadastro.telefone || "";
        document.querySelector("#email").value = dadosCadastro.email || "";
        document.querySelector("#cep").value = dadosCadastro.cep || "";
        document.querySelector("#numero").value = dadosCadastro.numero || "";
        document.querySelector("#complemento").value = dadosCadastro.complemento || "";
        document.querySelector("#tipo").value = dadosCadastro.tipo || "";
    }
}

function ativarFormulario() {
    document.querySelectorAll("input").forEach(function(input) {

        input.addEventListener("input", function() {
            input.classList.add("foi-preenchido");
        });

    });

    if (document.querySelector("#cpf")) {

        document.querySelector("#cpf").addEventListener("input", function(event) {

            let cpf = event.target.value.replace(/\D/g, "");

            let parte1 = cpf.substring(0, 3);
            let parte2 = cpf.substring(3, 6);
            let parte3 = cpf.substring(6, 9);
            let parte4 = cpf.substring(9, 11);

            if (cpf.length >= 4) {
                parte1 += ".";
            }

            if (cpf.length >= 7) {
                parte2 += ".";
            }

            if (cpf.length >= 10) {
                parte3 += "-";
            }

            event.target.value = parte1 + parte2 + parte3 + parte4;

        });

    }

    if (document.querySelector("#cep")) {

        document.querySelector("#cep").addEventListener("input", function(event) {

            let cep = event.target.value.replace(/\D/g, "");

            let parte1 = cep.substring(0, 5);
            let parte2 = cep.substring(5, 8);

            if (cep.length >= 6) {
                parte1 += "-";
            }

            event.target.value = parte1 + parte2;

        });

    }

    if (document.querySelector("#telefone")) {

        document.querySelector("#telefone").addEventListener("input", function(event) {

            let telefone = event.target.value.replace(/\D/g, "");

            let parte1 = telefone.substring(0, 2);
            let parte2 = telefone.substring(2, 7);
            let parte3 = telefone.substring(7, 11);

            if (telefone.length >= 3) {
                parte1 = "(" + parte1 + ")";
            }

            if (telefone.length >= 8) {
                parte2 += "-";
            }

            event.target.value = parte1 + parte2 + parte3;

        });

    }

    if (document.querySelector("form")) {

        document.querySelector("form").addEventListener("submit", function(event) {

            event.preventDefault();

            salvarCadastro();

            document.querySelector(".alerta").style.display = "block";

            let toast = document.querySelector(".toast");

            toast.style.display = "block";

            setTimeout(function() {
                toast.style.display = "none";
            }, 3000);

        });

    }
}

export {
    salvarCadastro,
    carregarCadastro,
    ativarFormulario
};