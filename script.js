/* =====================================================
   ENEM QUEST
   Script Principal
===================================================== */

/* =====================================================
   CONFIGURAÇÕES
===================================================== */

const usuario = "Rafael";

const progresso = 42;

const xpAtual = 1250;
const xpNivel = 2000;

const dataEnem = new Date("2026-11-08");

/* =====================================================
   FRASES
===================================================== */

const frases = [
    "🎯 Hoje é um ótimo dia para ficar mais perto da sua aprovação.",
    "📚 Cada questão resolvida fortalece seu conhecimento.",
    "🔥 A disciplina de hoje será o seu resultado amanhã.",
    "🚀 Você está construindo o futuro que deseja.",
    "💪 Não pare agora. Cada minuto estudado conta.",
    "🏆 Grandes conquistas começam com pequenas atitudes.",
    "🌟 Seu esforço de hoje será motivo de orgulho no futuro.",
    "📖 Estudar é investir em você mesmo.",
    "⚡ O sucesso é a soma de pequenos esforços diários.",
    "🎓 UTFPR e UENP estão cada vez mais perto!"
];

/* =====================================================
   FRASE DO DIA
===================================================== */

function atualizarFrase() {

    const hoje = new Date();

    const numeroDoDia =
        hoje.getFullYear() * 1000 +
        (hoje.getMonth() + 1) * 100 +
        hoje.getDate();

    const indice = numeroDoDia % frases.length;

    document.getElementById("fraseDia").textContent =
        frases[indice];

}

/* =====================================================
   SAUDAÇÃO
===================================================== */

function atualizarSaudacao() {

    const hora = new Date().getHours();

    let saudacao = "";

    if (hora >= 5 && hora < 12) {

        saudacao = `👋 Bom dia, ${usuario}!`;

    } else if (hora >= 12 && hora < 18) {

        saudacao = `☀️ Boa tarde, ${usuario}!`;

    } else {

        saudacao = `🌙 Boa noite, ${usuario}!`;

    }

    document.getElementById("saudacao").textContent =
        saudacao;

}

/* =====================================================
   PROGRESSO GERAL
===================================================== */

function atualizarProgresso() {

    document.getElementById("porcentagem").textContent =
        `${progresso}%`;

    document.getElementById("barraProgresso").style.width =
        `${progresso}%`;

}

/* =====================================================
   XP
===================================================== */

function atualizarXP() {

    const porcentagemXP = (xpAtual / xpNivel) * 100;

    document.getElementById("xpTexto").textContent =
        `${xpAtual} / ${xpNivel} XP`;

    document.getElementById("xpBarra").style.width =
        `${porcentagemXP}%`;

}

/* =====================================================
   CONTAGEM ENEM
===================================================== */

function atualizarDiasEnem() {

    const hoje = new Date();

    hoje.setHours(0, 0, 0, 0);

    const diferenca = dataEnem - hoje;

    const diasRestantes = Math.ceil(
        diferenca / (1000 * 60 * 60 * 24)
    );

    document.getElementById("diasEnem").textContent =
        `${diasRestantes} dias`;

}

/* =====================================================
   NÍVEL DO USUÁRIO
===================================================== */

function atualizarNivel() {

    let nivel = "";

    if (xpAtual < 500) {

        nivel = "🌱 Iniciante";

    } else if (xpAtual < 1500) {

        nivel = "📘 Estudante";

    } else if (xpAtual < 3000) {

        nivel = "🚀 Determinado";

    } else if (xpAtual < 5000) {

        nivel = "🏆 Focado";

    } else {

        nivel = "👑 Mestre do ENEM";

    }

    document.getElementById("nivelUsuario").textContent =
        `Nível: ${nivel}`;

}

/* =====================================================
   INICIALIZAÇÃO
===================================================== */

function iniciarDashboard() {

    atualizarFrase();

    atualizarSaudacao();

    atualizarProgresso();

    atualizarXP();

    atualizarDiasEnem();

    atualizarNivel();

}

iniciarDashboard();