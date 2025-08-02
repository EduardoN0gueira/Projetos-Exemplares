document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg' }
    ];


    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', image: './img/album-white-noise.jpg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)', image: './img/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', image: './img/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', image: './img/album-hit-me.jpg' },
        { name: 'CAJU', image: './img/album-caju.jpg' },
        { name: 'Escândalo Íntimo', image: './img/album-escandalo.jpg' }
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>artista</p>
        `

        artistGrid.appendChild(artistCard)

    })



        albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <p>${album.name}</p>
        `

        albumsGrid.appendChild(albumCard)

    })




})




