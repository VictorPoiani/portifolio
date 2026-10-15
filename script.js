// Para adicionar um projeto, copie um item da lista abaixo e preencha os campos.
// destaque: true mostra o projeto em formato largo no topo (use em apenas um).
const projetos = [
    {
        id: "hero-whey",
        destaque: true,
        titulo: "Hero Whey: marca de suplementos",
        resumo: "Modelo de negócio criado na aula de Empreendedorismo, com análise de mercado, análise de riscos, pesquisa de interesses e valor de mercado.",
        tags: ["Empreendedorismo", "Branding", "Plano de negócios"],
        img: "img/projeto1.jpg",
        icone: "bi-lightning-charge",
        detalhes: [
            "<strong>Hero Whey</strong> é um protótipo de marca de suplementos alimentares, voltado a jovens atletas, estudantes e pessoas que buscam uma vida mais saudável. O lema: <strong>\"Desperte o Herói que Existe em Você\"</strong>.",
            "A marca une identidade visual marcante, apelo motivacional e responsabilidade com a saúde, destacando dedicação, autoconfiança e superação."
        ],
        feito: [
            "Plano de negócios, público-alvo e análise de concorrência",
            "Viabilidade financeira",
            "Identidade visual original e rótulos conceituais dos produtos",
            "Planejamento de divulgação e posicionamento no mercado fitness e escolar"
        ],
        links: [{
            rotulo: "Ver projeto no Canva",
            url: "https://www.canva.com/design/DAGjsUCScps/RdJZRXbZsFz4ulsDofSBkA/view?utm_content=DAGjsUCScps&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he19875f83a"
        }]
    },
    {
        id: "curriculos",
        titulo: "Meus currículos e certificados",
        resumo: "Reúne meus certificados válidos em todo o território nacional, com experiências em tecnologias diversas, gestão pessoal, automação e inglês intermediário.",
        tags: ["Certificações", "Automação", "Inglês"],
        icone: "bi-patch-check",
        detalhes: [
            "Espaço onde concentro minha formação complementar: cursos e certificados que comprovam o que estudo fora da sala de aula."
        ],
        feito: [
            "Tecnologias diversificadas",
            "Gestão pessoal",
            "Automação",
            "Inglês intermediário"
        ],
        links: [{ rotulo: "Ver meu GitHub", url: "https://github.com/VictorPoianii" }]
    },
    {
        id: "gamificacao",
        titulo: "Gamificação do aprendizado",
        resumo: "Aulas transformadas em RPG: os alunos viram personagens, cumprem missões ligadas ao conteúdo e sobem de nível ao aprender.",
        tags: ["Educação", "Gamificação", "RPG"],
        icone: "bi-controller",
        detalhes: [
            "O projeto usa jogos de RPG para tornar as aulas mais divertidas e envolventes. Os alunos viram personagens em uma história e precisam cumprir missões ligadas ao conteúdo das matérias.",
            "Ao aprender, eles ganham pontos, sobem de nível e desbloqueiam habilidades, estudando de forma mais animada e participativa."
        ],
        feito: [
            "Narrativa e missões conectadas ao conteúdo",
            "Sistema de pontos, níveis e habilidades"
        ],
        links: [{ rotulo: "Ver projeto no Canva", url: "https://www.canva.com/design/DAGpH5Ok2EQ/UN9pDgZBn6W9hive-66oNw/view" }]
    }
];

const capa = (p) => p.img
    ? `<img src="${p.img}" class="card-img-top" alt="Imagem do projeto ${p.titulo}" loading="lazy">`
    : `<div class="capa-icone" aria-hidden="true"><i class="bi ${p.icone}"></i></div>`;

const tags = (p) => p.tags.map((t) => `<span class="chip">${t}</span>`).join("");

const botaoDetalhes = (p) =>
    `<button type="button" class="btn-link-card" data-bs-toggle="modal" data-bs-target="#modalProjeto" data-id="${p.id}">Ver detalhes</button>`;

function cartaoDestaque(p) {
    return `
    <article class="card destaque">
        <div class="row g-0">
            <div class="col-md-5">${capa(p)}</div>
            <div class="col-md-7"><div class="card-body p-4">
                <p class="suave mb-1">Projeto em destaque</p>
                <h3 class="card-title h4">${p.titulo}</h3>
                <p class="card-text">${p.resumo}</p>
                <div class="mb-3">${tags(p)}</div>
                ${botaoDetalhes(p)}
            </div></div>
        </div>
    </article>`;
}

function cartaoProjeto(p) {
    return `
    <div class="col-md-6">
        <article class="card">
            ${capa(p)}
            <div class="card-body">
                <h3 class="card-title h5">${p.titulo}</h3>
                <p class="card-text">${p.resumo}</p>
                <div class="mb-3">${tags(p)}</div>
                ${botaoDetalhes(p)}
            </div>
        </article>
    </div>`;
}

const destaque = projetos.find((p) => p.destaque);
document.getElementById("projeto-destaque").innerHTML = destaque ? cartaoDestaque(destaque) : "";
document.getElementById("lista-projetos").innerHTML =
    projetos.filter((p) => !p.destaque).map(cartaoProjeto).join("");

// Preenche o modal com o projeto clicado
document.getElementById("modalProjeto").addEventListener("show.bs.modal", (e) => {
    const p = projetos.find((x) => x.id === e.relatedTarget?.dataset.id);
    if (!p) return;
    document.getElementById("modalTitulo").textContent = p.titulo;
    document.getElementById("modalCorpo").innerHTML = `
        ${p.img ? `<img src="${p.img}" class="img-fluid rounded mb-3" alt="Imagem do projeto ${p.titulo}">` : ""}
        ${p.detalhes.map((d) => `<p>${d}</p>`).join("")}
        <h6 class="mt-3">O que o projeto envolveu</h6>
        <ul>${p.feito.map((f) => `<li>${f}</li>`).join("")}</ul>`;
    document.getElementById("modalLinks").innerHTML = p.links
        .map((l) => `<a class="btn-destaque" href="${l.url}" target="_blank" rel="noopener">${l.rotulo}</a>`)
        .join("");
});

document.getElementById("ano").textContent = new Date().getFullYear();

const cursorLight = document.getElementById('cursor-light');

window.addEventListener('mousemove', (e) => {
    // Atualiza a posição da luz de acordo com a coordenada do mouse
    cursorLight.style.left = `${e.clientX}px`;
    cursorLight.style.top = `${e.clientY}px`;
});