function carregarAfazeres() {

    const afazeres = document.querySelectorAll(".afazer");

    afazeres.forEach(afazer => {

        const id = afazer.dataset.id;
        const confirmado = localStorage.getItem(`afazer_${id}`);

        if (confirmado === "true") {

            const botao = afazer.querySelector(".confirmar");

            botao.classList.remove("confirmar");
            botao.classList.add("confirmado");
        }
    });
}

function confirmarBotao(event) {

    const botao = event.currentTarget;
    const afazer = botao.parentElement;
    const id = afazer.dataset.id;

    if (botao.classList.contains("confirmar")) {

        botao.classList.remove("confirmar");
        botao.classList.add("confirmado");

        localStorage.setItem(`afazer_${id}`, "true");

    } else {

        botao.classList.add("confirmar");
        botao.classList.remove("confirmado");

        localStorage.setItem(`afazer_${id}`, "false");
    }

}


function configurarBotoes() {

    const botoes = document.querySelectorAll(".confirmar");

    botoes.forEach(botao => {
        botao.addEventListener("click", confirmarBotao);
    });

    console.log(botoes);
}




configurarBotoes();
carregarAfazeres();