const images = [
    { src: 'https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZsMjMxNDY4ODE2NTQtaW1hZ2Uta295NWoyeG4uanBn.jpg', category: 'nature' },
    { src: 'https://freerangestock.com/sample/159439/flat-lay-of-tech-gadgets-and-stationery.jpg', category: 'tech' },
    { src: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGR2YW5nb2doLXNudmdyb2IuanBn.jpg', category: 'art' },
    { src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c280be2d-de9f-469f-85f8-2effee43ee0c/dg6tc2s-d20415e0-37ec-4ff7-b92f-6bb38154fe88.jpg/v1/fill/w_900,h_450,q_75,strp/beautiful_nature_03_by_jonadav_dg6tc2s-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MyODBiZTJkLWRlOWYtNDY5Zi04NWY4LTJlZmZlZTQzZWUwY1wvZGc2dGMycy1kMjA0MTVlMC0zN2VjLTRmZjctYjkyZi02YmIzODE1NGZlODguanBnIiwiaGVpZ2h0IjoiPD00NTAiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2MyODBiZTJkLWRlOWYtNDY5Zi04NWY4LTJlZmZlZTQzZWUwY1wvam9uYWRhdi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.k1TPm38hiXrvpXaZREeXJSpm2QN9M6c7-K8jczPPiWo', category: 'nature' },
    { src: 'https://live.staticflickr.com/6231/6230392886_6a1d8c0547_b.jpg', category: 'tech' },
    { src: 'https://live.staticflickr.com/5678/22434439491_21ba238b3f_b.jpg', category: 'art' },
];

const gallery = document.getElementById('gallery');
const categoryFilter = document.getElementById('category');

// Função para carregar as imagens
function loadImages(filter = 'all') {
    gallery.innerHTML = '';
    const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);
    filteredImages.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        imgElement.alt = img.category;
        gallery.appendChild(imgElement);
    });
}

// Evento para filtrar as imagens
categoryFilter.addEventListener('change', (e) => {
    loadImages(e.target.value);
});

// Carrega todas as imagens inicialmente
loadImages();
