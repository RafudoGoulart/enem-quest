const materias = {

    matematica: {

        titulo: "📐 Matemática",

        modulos: [

            "Álgebra",

            "Geometria",

            "Funções",

            "Trigonometria",

            "Estatística",

            "Probabilidade"

        ]

    },

    humanas: {

        titulo: "🌎 Ciências Humanas",

        modulos: [

            "História",

            "Geografia",

            "Filosofia",

            "Sociologia"

        ]

    },

    linguagens: {

        titulo: "📖 Linguagens",

        modulos: [

            "Gramática",

            "Interpretação",

            "Literatura",

            "Inglês"

        ]

    },

    natureza: {

        titulo: "🧪 Ciências da Natureza",

        modulos: [

            "Biologia",

            "Química",

            "Física"

        ]

    },

    redacao: {

        titulo: "✍ Redação",

        modulos: [

            "Competência 1",

            "Competência 2",

            "Competência 3",

            "Competência 4",

            "Competência 5"

        ]

    }

};

const parametros = new URLSearchParams(window.location.search);

const materiaSelecionada = parametros.get("materia");

const materia = materias[materiaSelecionada];

document.getElementById("tituloMateria").textContent =
materia.titulo;

const lista = document.getElementById("listaModulos");

materia.modulos.forEach((modulo) => {

    lista.innerHTML += `
    
        <div class="materia">

            <h3>📂 ${modulo.nome}</h3>

            <p>Progresso: ${modulo.progresso}%</p>

            <div class="barra">

                <div class="prog" style="width:${modulo.progresso}%"></div>

            </div>

        </div>

    `;

});