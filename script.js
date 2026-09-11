const imagens = [
    {
        nome: "Aurora Lake",
        arquivo: "aurora-lake.jpg",
        descricao: "Um lago tranquilo iluminado pelas cores da aurora.",
        tags: ["natureza", "paisagem", "calmo"]
    },

    {
        nome: "Misty Forest",
        arquivo: "misty-forest.jpg",
        descricao: "Uma floresta coberta por uma camada suave de neblina.",
        tags: ["natureza", "calmo", "paisagem"]
    },

    {
        nome: "Moonlit City",
        arquivo: "moonlit-city.jpg",
        descricao: "A cidade durante uma noite silenciosa sob a luz da lua.",
        tags: ["cidade", "noite"]
    },

    {
        nome: "Summer Garden",
        arquivo: "summer-garden.jpg",
        descricao: "Um jardim colorido durante uma tarde tranquila de verão.",
        tags: ["natureza", "calmo"]
    },

    {
        nome: "Ocean Breeze",
        arquivo: "ocean-breeze.jpg",
        descricao: "O mar encontrando a costa em uma manhã serena.",
        tags: ["natureza", "paisagem", "calmo"]
    },

    {
        nome: "Autumn Path",
        arquivo: "autumn-path.jpg",
        descricao: "Um caminho cercado por árvores durante o outono.",
        tags: ["natureza", "paisagem"]
    },

    {
        nome: "Peaceful Mountains",
        arquivo: "peaceful-mountains.jpg",
        descricao: "Montanhas distantes sob um céu limpo e tranquilo.",
        tags: ["natureza", "paisagem", "calmo"]
    },

    {
        nome: "Rainy Window",
        arquivo: "rainy-window.jpg",
        descricao: "Gotas de chuva escorrendo por uma janela em uma noite calma.",
        tags: ["noite", "calmo"]
    },

    {
        nome: "Lavender Field",
        arquivo: "lavender-field.jpg",
        descricao: "Um campo de lavanda se estendendo até o horizonte.",
        tags: ["natureza", "paisagem", "calmo"]
    },

    {
        nome: "Starry Night",
        arquivo: "starry-night.jpg",
        descricao: "Um céu estrelado sobre uma paisagem silenciosa.",
        tags: ["noite", "paisagem", "calmo"]
    }
];


const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");
const modalClose = document.getElementById("modalClose");

let tagAtual = "all";


/* CRIA OS CARDS */

function renderGallery() {

    const pesquisa = searchInput.value
        .toLowerCase()
        .trim();


    const resultados = imagens.filter(imagem => {

        const correspondeTag =
            tagAtual === "all" ||
            imagem.tags.includes(tagAtual);


        const textoBusca = [
            imagem.nome,
            imagem.descricao,
            ...imagem.tags
        ]
            .join(" ")
            .toLowerCase();


        const correspondeBusca =
            !pesquisa ||
            textoBusca.includes(pesquisa);


        return correspondeTag && correspondeBusca;

    });


    gallery.innerHTML = "";


    resultados.forEach(imagem => {

        const card = document.createElement("article");

        card.className = "card";

        card.innerHTML = `

            <img
                class="card-image"
                src="imagens/${imagem.arquivo}"
                alt="${imagem.nome}"
                loading="lazy"
            >

            <div class="card-info">

                <h3 class="card-title">
                    ${imagem.nome}
                </h3>

                <p class="card-description">
                    ${imagem.descricao}
                </p>

                <div class="card-tags">

                    ${imagem.tags.map(tag => `
                        <span class="card-tag">
                            #${tag}
                        </span>
                    `).join("")}

                </div>

            </div>
        `;


        card.addEventListener("click", () => {

            abrirModal(imagem);

        });


        gallery.appendChild(card);

    });


    resultCount.textContent =
        `${resultados.length} ${resultados.length === 1 ? "imagem" : "imagens"}`;


    emptyState.classList.toggle(
        "visible",
        resultados.length === 0
    );


    clearSearch.style.display =
        pesquisa ? "block" : "none";
}


/* MODAL */

function abrirModal(imagem) {

    modalImage.src = `imagens/${imagem.arquivo}`;

    modalImage.alt = imagem.nome;

    modalTitle.textContent = imagem.nome;

    modalDescription.textContent =
        imagem.descricao;


    modalTags.innerHTML = imagem.tags
        .map(tag => `
            <span class="card-tag">
                #${tag}
            </span>
        `)
        .join("");


    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function fecharModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* PESQUISA */

searchInput.addEventListener(
    "input",
    renderGallery
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        renderGallery();

        searchInput.focus();

    }
);


/* TAGS */

document.querySelectorAll(".tag").forEach(botao => {

    botao.addEventListener("click", () => {

        document
            .querySelectorAll(".tag")
            .forEach(tag => {
                tag.classList.remove("active");
            });


        botao.classList.add("active");

        tagAtual = botao.dataset.tag;

        renderGallery();

    });

});


/* MODAL */

modalClose.addEventListener(
    "click",
    fecharModal
);


modal.addEventListener("click", evento => {

    if (evento.target === modal) {
        fecharModal();
    }

});


document.addEventListener("keydown", evento => {

    if (evento.key === "Escape") {
        fecharModal();
    }

});


/* INICIALIZA */

renderGallery();