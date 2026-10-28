//ACORDEÃO (ABRIR E FECHAR CONTEÚDOS)
document.querySelectorAll(".titulo-acordeao").forEach(botao => {
    botao.addEventListener("click", () => {
        let conteudo = botao.nextElementSibling; //pegue o próximo elemento
        let simbolo = botao.querySelector("span");

        // Alterna entre block e none usando operador ternário
        conteudo.style.display = conteudo.style.display === "block" ? "none" : "block";
        simbolo.textContent = conteudo.style.display === "block" ? "−" : "+";
    });
});

//BOTÕES
function mostrarConteudo(id) {
    let conteudo = document.getElementById(id);
    let estavaAberto = conteudo.style.display === "block";

    // Fecha todos os blocos de guerra em uma linha
    document.querySelectorAll(".conteudo").forEach(bloco => bloco.style.display = "none");

    // Só reabre se ele já não estivesse aberto antes
    if (!estavaAberto) conteudo.style.display = "block";
}

//QUIZ (DADOS E LÓGICA)
const perguntas = [
    {
        pergunta: "O que é isomeria plana?",
        alternativas: ["Fenômeno em que substâncias possuem fórmulas moleculares diferentes.", "Fenômeno em que substâncias possuem a mesma fórmula molecular, mas estruturas diferentes.", "Fenômeno em que substâncias possuem apenas átomos diferentes.", "Fenômeno em que substâncias apresentam sempre as mesmas propriedades."],
        correta: 1,
        explicacao: "A isomeria plana ocorre quando dois ou mais compostos apresentam a mesma fórmula molecular, mas diferem na maneira como seus átomos estão ligados, formando estruturas diferentes."
    },
    {
        pergunta: "Qual tipo de isomeria ocorre entre o etanol e o dimetil éter?",
        alternativas: ["Isomeria de cadeia.", "Isomeria de posição.", "Isomeria de função.", "Isomeria de compensação."],
        correta: 2,
        explicacao: "O etanol pertence à função álcool, enquanto o dimetil éter pertence à função éter. Apesar de apresentarem a mesma fórmula molecular (C₂H₆O), possuem grupos funcionais diferentes."
    },
    {
        pergunta: "Qual tipo de isomeria ocorre entre o but-1-eno e o but-2-eno?",
        alternativas: ["Isomeria de função.", "Isomeria de posição.", "Isomeria de cadeia.", "Isomeria de compensação."],
        correta: 1,
        explicacao: "Os dois compostos possuem a mesma fórmula molecular e a mesma função orgânica, mas a ligação dupla está localizada em posições diferentes na cadeia carbônica."
    },
    {
        pergunta: "Qual alternativa apresenta um exemplo de isomeria de cadeia?",
        alternativas: ["Butano e 2-metilpropano.", "Etanol e dimetil éter.", "Propanal e propanona.", "Propan-1-ol e propan-2-ol."],
        correta: 0,
        explicacao: "O butano possui cadeia carbônica normal, enquanto o 2-metilpropano apresenta cadeia ramificada. Os dois possuem a mesma fórmula molecular (C₄H₁₀), caracterizando a isomeria de cadeia."
    },
    {
        pergunta: "Qual tipo de isomeria ocorre entre o propanal e a propanona?",
        alternativas: ["Isomeria de posição.", "Isomeria de cadeia.", "Isomeria de compensação.", "Isomeria de função."],
        correta: 3,
        explicacao: "O propanal é um aldeído, enquanto a propanona é uma cetona. Como apresentam a mesma fórmula molecular (C₃H₆O), mas pertencem a funções orgânicas diferentes, são isômeros de função."
    },
    {
        pergunta: "O que caracteriza a isomeria de compensação, também chamada de metameria?",
        alternativas: ["A mudança da posição da ligação dupla.", "A diferença na distribuição dos carbonos em torno de um heteroátomo.", "A presença de funções orgânicas diferentes.", "A mudança na fórmula molecular dos compostos."],
        correta: 1,
        explicacao: "Na isomeria de compensação, os compostos apresentam a mesma fórmula molecular e a mesma função orgânica, mas possuem diferentes distribuições das cadeias carbônicas ao redor de um heteroátomo, como o oxigênio ou o nitrogênio."
    },
    {
        pergunta: "Qual alternativa apresenta um par de compostos que possuem isomeria de posição?",
        alternativas: ["Etanol e dimetil éter.", "Butano e 2-metilpropano.", "Propan-1-ol e propan-2-ol.", "Propanal e propanona."],
        correta: 1,
        explicacao: "Os dois compostos são álcoois com a mesma fórmula molecular (C₃H₈O), mas o grupo hidroxila (OH) está ligado a carbonos diferentes: no carbono 1, no propan-1-ol, e no carbono 2, no propan-2-ol."
    },
    {
        pergunta: "Dois compostos apresentam a mesma fórmula molecular (C₄H₁₀O): butan-1-ol e etoxietano. Qual tipo de isomeria existe entre eles?",
        alternativas: ["Isomeria de cadeia.", "Isomeria de posição.", "Isomeria de compensação.", "Isomeria de função."],
        correta: 3,
        explicacao: "O butan-1-ol pertence à função álcool, enquanto o etoxietano pertence à função éter. Como possuem a mesma fórmula molecular, mas diferentes funções orgânicas, apresentam isomeria de função."
    },
    {
        pergunta: "Dois compostos possuem a mesma fórmula molecular e a mesma função orgânica, mas apresentam diferenças na estrutura da cadeia carbônica. Qual tipo de isomeria ocorre nesse caso?",
        alternativas: ["Isomeria de função.", "Isomeria de cadeia.", "Isomeria de posição.", "Isomeria de compensação."],
        correta: 1,
        explicacao: "A isomeria de cadeia acontece quando os compostos apresentam a mesma fórmula molecular e a mesma função orgânica, mas diferem na organização da cadeia carbônica, que pode ser normal ou ramificada, por exemplo."
    },
    {
        pergunta: "Qual alternativa diferencia corretamente a isomeria de posição da isomeria de compensação?",
        alternativas: ["Na isomeria de posição, muda a função orgânica; na compensação, muda a fórmula molecular.", "Na isomeria de posição, muda a cadeia principal; na compensação, muda a ligação dupla.", "Na isomeria de posição, muda a localização de uma insaturação ou grupo funcional; na compensação, muda a distribuição das cadeias em torno de um heteroátomo.", "Na isomeria de posição, os compostos possuem fórmulas moleculares diferentes; na compensação, são iguais."],    
        correta: 2,
        explicacao: "Na isomeria de posição, uma ligação dupla, tripla ou um grupo funcional ocupa posições diferentes na estrutura. Já na isomeria de compensação, a distribuição dos carbonos ao redor de um heteroátomo é diferente, mantendo a mesma fórmula molecular e a mesma função orgânica."
    }
];

let perguntaAtual = 0;
let pontos = 0;

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual];
    
    document.getElementById("progresso").textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
    document.getElementById("pergunta").textContent = pergunta.pergunta;
    
    let alternativasContainer = document.getElementById("alternativas");
    alternativasContainer.innerHTML = ""; // Limpa anterior

    pergunta.alternativas.forEach((alternativa, indice) => {
        let botao = document.createElement("button");
        botao.textContent = alternativa;
        botao.onclick = () => verificarResposta(indice);
        alternativasContainer.appendChild(botao);
    });

    document.getElementById("feedback").textContent = "";
    document.getElementById("proxima").style.display = "none";
}

function verificarResposta(indice) {
    let pergunta = perguntas[perguntaAtual];
    let botoes = document.querySelectorAll("#alternativas button");

    botoes.forEach(btn => btn.disabled = true);

    if (indice === pergunta.correta) {
        botoes[indice].classList.add("correta");
        document.getElementById("feedback").textContent = `Resposta correta! ${pergunta.explicacao}`;
        pontos++;
    } else {
        botoes[indice].classList.add("errada");
        botoes[pergunta.correta].classList.add("correta");
        document.getElementById("feedback").textContent = `Resposta incorreta. ${pergunta.explicacao}`;
    }

    document.getElementById("proxima").style.display = "block";
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    let msg = pontos === perguntas.length ? "Excelente! Você acertou todas!" : 
              pontos >= 7 ? "Muito bom! Ótimo conhecimento." : "Vale a pena revisar o conteúdo.";

    document.getElementById("quiz-container").innerHTML = `
        <h3>Resultado final</h3>
        <p>Você acertou <strong>${pontos}</strong> de <strong>${perguntas.length}</strong> questões.</p>
        <p>${msg}</p>
        <button id='refazer' onclick='refazerQuiz()'>Refazer Quiz</button>
    `;
}

function refazerQuiz() {
    perguntaAtual = 0;
    pontos = 0;
    document.getElementById("quiz-container").innerHTML = `
        <p id="progresso"></p>
        <h3 id="pergunta"></h3>
        <div id="alternativas"></div>
        <p id="feedback"></p>
        <button id="proxima" onclick="proximaPergunta()">Próxima pergunta</button>
    `;
    mostrarPergunta();
}

// Inicialização automática do Quiz
if (document.getElementById("quiz-container")) {
    mostrarPergunta();
}
