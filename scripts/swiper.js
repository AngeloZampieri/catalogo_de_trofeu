const catalogoItens = [
    {
        nome: "Troféu modelo 01",
        precos: "30cm - R$ 30,00 | 20cm - R$ 20,00  25cm - R$ 25,00 | 15cm - R$ 10,00",
        slides: [
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png"
        ]
    },
    {
        nome: "Troféu modelo 02",
        precos: "30cm - R$ 30,00 | 20cm - R$ 20,00  25cm - R$ 25,00 | 15cm - R$ 10,00",
        slides: [
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png"
        ]
    },
    {
        nome: "Troféu modelo 03",
        precos: "30cm - R$ 34,00 | 20cm - R$ 24,00  25cm - R$ 29,00 | 15cm - R$ 14,00",
        slides: [
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png"
        ]
    },
    {
        nome: "Troféu modelo 04",
        precos: "30cm - R$ 34,00 | 20cm - R$ 24,00  25cm - R$ 29,00 | 15cm - R$ 14,00",
        slides: [
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png"
        ]
    },
    {
        nome: "Troféu modelo 05",
        precos: "30cm - R$ 34,00 | 20cm - R$ 24,00  25cm - R$ 29,00 | 15cm - R$ 14,00",
        slides: [
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png"
        ]
    },
        {
        nome: "Troféu modelo 06",
        precos: "30cm - R$ 34,00 | 20cm - R$ 24,00  25cm - R$ 29,00 | 15cm - R$ 14,00",
        slides: [
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png"
        ]
    },
        {
        nome: "Troféu modelo 07",
        precos: "30cm - R$ 34,00 | 20cm - R$ 24,00  25cm - R$ 29,00 | 15cm - R$ 14,00",
        slides: [
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png"
        ]
    },
        {
        nome: "Troféu modelo 08",
        precos: "30cm - R$ 34,00 | 20cm - R$ 24,00  25cm - R$ 29,00 | 15cm - R$ 14,00",
        slides: [
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png"
        ]
    },
        {
        nome: "Troféu modelo 09",
        precos: "30cm - R$ 34,00 | 20cm - R$ 24,00  25cm - R$ 29,00 | 15cm - R$ 14,00",
        slides: [
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png"
        ]
    },
        {
        nome: "Troféu modelo 10",
        precos: "30cm - R$ 34,00 | 20cm - R$ 24,00  25cm - R$ 29,00 | 15cm - R$ 14,00",
        slides: [
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png",
            "./imagens/Ag_Impressões.png"
        ]
    },

];

const catalogoContainer = document.querySelector('.catalogo');
let swiperInstances = [];

catalogoItens.forEach((item, index) => {
    const slidesHTML = item.slides.map(src =>
        `<div class="swiper-slide"><img src="${src}" alt="${item.nome}"></div>`
    ).join('');

    const modeloHTML = `
        <div class="modelo-item modelo-${index + 1}">
            <div class="swiper swiper-${index + 1}"> 
                <div class="swiper-pagination"></div>
                
                <div class="swiper-wrapper">
                    ${slidesHTML}
                </div>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>

        <div class="preco_container">
            <p class="preco_texto"> 
            <b class="titulo_destaque">${item.nome}:</b> 
            <br> 
            <span class="modelo-precos">${item.precos}</span>
            </p>
        </div>
    `;

    // Adiciona o HTML ao container do catálogo
    catalogoContainer.insertAdjacentHTML('beforeend', modeloHTML);
});

// 2. Inicialização do Swiper (Loop com Configuração Completa)
catalogoItens.forEach((item, index) => {
    const swiperSelector = `.swiper-${index + 1}`;

    // Inicializa uma nova instância do Swiper com a configuração Coverflow
    const newSwiper = new Swiper(swiperSelector, {
        loop: true, // Habilita o loop
        slidesPerView: 1,


        // Paginação
        pagination: {
            el: `${swiperSelector} .swiper-pagination`,
            type: 'bullets',
            clickable: true,
        },

        // Navegação
        navigation: {
            nextEl: `${swiperSelector} .swiper-button-next`,
            prevEl: `${swiperSelector} .swiper-button-prev`,
        },

    });

    swiperInstances.push(newSwiper);
}); 