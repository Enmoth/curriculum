const experienciasProfissionais = [
    {
        empresa: "Aramart",
        cargo: "Programador CNC",
        data: "2020",
        descricao: "Programava CNCs no chão de fábrica"
    },
    {
        empresa: "Sponte",
        cargo: "QA",
        data: "2022",
        descricao: "Testava bugs e implementações, além de programar testes automatizados em Java Script"
    },

];

const experienciaProfissionalList = document.getElementById("experiencia-profissional");

experienciasProfissionais.forEach((experiencia) => {
    const item = document.createElement("li");
    item.innerHTML = `
        <h3>${experiencia.empresa}</h3>
        <p>${experiencia.cargo} - ${experiencia.data}</p>
        <p>${experiencia.descricao}</p>
    `;
    experienciaProfissionalList.appendChild(item);
});

const formacaoAcademica = [
    {
        instituicao: "Unimater",
        curso: "Sistemas de Informação",
        data: "Ongoing"
    },
];

const formacaoAcademicaList = document.getElementById("formacao-academica");

formacaoAcademica.forEach((formacao) => {
    const item = document.createElement("li");
    item.innerHTML = `
        <h3>${formacao.instituicao}</h3>
        <p>${formacao.curso} - ${formacao.data}</p>
    `;
    formacaoAcademicaList.appendChild(item);
});

const habilidades = [
    "Conhecimento em Java, Java Script, Python, C e C#",
    "Noção de testes para qualidade de código e de funcionalidade",
    "Fluente em português e entendo inglês",
];

const habilidadesList = document.getElementById("habilidades");

habilidades.forEach((habilidade) => {
    const item = document.createElement("li");
    item.textContent = habilidade;
    habilidadesList.appendChild(item);
});
