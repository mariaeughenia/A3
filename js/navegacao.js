import { projetos } from "./projetos.js";
import { ativarFormulario, carregarCadastro } from "./formulario.js";

const conteudo = document.querySelector("#conteudo");
const linksNavegacao = document.querySelectorAll("nav a");

function mostrarPagina(pagina) {

    if (pagina === "#inicio") {

        conteudo.innerHTML = `
            <h1>Animais Sem Teto</h1>

            <section>
                <img src="../imagens/voluntarios.png" alt="Voluntários da ONG Animais Sem Teto" width="300">

                <div>
                    <h2>Quem somos</h2>
                    <p>A Animais Sem Teto é uma organização que atua no resgate e cuidado de animais em situação de abandono, buscando proporcionar uma nova oportunidade por meio da adoção responsável.</p>
                </div>
            </section>

            <section>
                <img src="../imagens/endereço.png" alt="Mapa com o endereço da ONG Animais Sem Teto" width="300">

                <div>
                    <h2>Endereço</h2>
                    <p>Rua das Flores, 123 – Curitiba, Paraná</p>
                </div>
            </section>

            <section>
                <div>
                    <h2>Contato</h2>
                    <p>Telefone: (41) 99999-9999</p>
                    <p>E-mail: contato@animaissemteto.org.br</p>
                </div>
            </section>
        `;

    }

    if (pagina === "#projetos") {

        let projetosHTML = `
            <h1>INICIATIVAS SOLIDÁRIAS</h1>
        `;

        projetos.forEach(function(projeto) {

            projetosHTML += `
                <section>
                    <h2>${projeto.titulo}</h2>

                    <span class="badge ${projeto.classe}">
                        ${projeto.categoria}
                    </span>

                    <p>${projeto.descricao}</p>
                </section>
            `;

        });

        conteudo.innerHTML = projetosHTML;

    }

    if (pagina === "#cadastro") {

        conteudo.innerHTML = `
            <h1>Cadastro</h1>

            <form>

                <fieldset>

                    <legend>Dados Pessoais</legend>

                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" required>

                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" required pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}">

                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" required pattern="\\([0-9]{2}\\)[0-9]{5}-[0-9]{4}">

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" required>

                </fieldset>

                <fieldset>

                    <legend>Endereço</legend>

                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" required pattern="[0-9]{5}-[0-9]{3}">

                    <label for="numero">Número</label>
                    <input type="number" id="numero" required>

                    <label for="complemento">Complemento</label>
                    <input type="text" id="complemento">

                </fieldset>

                <fieldset>

                    <legend>Tipo de colaborador</legend>

                    <label for="tipo">Voluntário ou doador:</label>
                    <input type="text" id="tipo" required>

                </fieldset>

                <input type="submit" value="Finalizar Cadastro">

            </form>

            <div class="alerta">
                <strong>Obrigado por se cadastrar e ajudar a nossa ONG ♡</strong>
            </div>

            <div class="toast">
                <p>Cadastro realizado com sucesso!</p>
            </div>
        `;

        ativarFormulario();
        carregarCadastro();

    }
}

function iniciarNavegacao() {

    if (document.querySelector(".hamburguer")) {

        document.querySelector(".hamburguer").addEventListener("click", function() {

            document.querySelectorAll("nav a").forEach(function(link) {
                link.classList.toggle("menu-aberto");
            });

        });

    }

    linksNavegacao.forEach(function(link) {

        link.addEventListener("click", function(event) {

            event.preventDefault();

            const pagina = link.getAttribute("href");

            mostrarPagina(pagina);

        });

    });

    mostrarPagina("#inicio");
}

export {
    mostrarPagina,
    iniciarNavegacao
};