const experienciasProfissionais = [
    {
        empresa: "Nome da Empresa 1",
        cargo: "Cargo 1",
        data: "Data 1",
        descricao: "Descrição 1"
    },
    {
        empresa: "Nome da Empresa 2",
        cargo: "Cargo 2",
        data: "Data 2",
        descricao: "Descrição 2"
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
        instituicao: "Nome da Instituição 1",
        curso: "Curso 1",
        data: "Data 1"
    },
    {
        instituicao: "Nome da Instituição 2",
        curso: "Curso 2",
        data: "Data 2"
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
    "Habilidade 1",
    "Habilidade 2",
    "Habilidade 3",
];

const habilidadesList = document.getElementById("habilidades");

habilidades.forEach((habilidade) => {
    const item = document.createElement("li");
    item.textContent = habilidade;
    habilidadesList.appendChild(item);
});
