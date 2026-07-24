const mainnav = document.querySelector('.navegacao');
const hambutton = document.querySelector('#botao-menu');

hambutton.addEventListener('click', (e) => {
    e.preventDefault();
    mainnav.classList.toggle('mostrar'); 
    hambutton.classList.toggle('mostrar');
});

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-08-07",
        area: 11500,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888-05-21",
        area: 74792,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015-06-07",
        area: 96630,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-05-02",
        area: 6861,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974-11-19",
        area: 156558,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-01-10",
        area: 9600,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-12-02",
        area: 116642,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Madrid, Espanha",
        localizacao: "Madrid, Espanha",
        consagracao: "1999-03-21",
        area: 45800,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    },
    {
        nomeDoTemplo: "Belo Horizonte, Brasil",
        localizacao: "Belo Horizonte, Brasil",
        consagracao: "2026-08-16",
        area: 28686,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/belo-horizonte-brazil-temple/belo-horizonte-brazil-temple-71963-main.jpg"
    },
    {
        nomeDoTemplo: "Nashville, Tennessee",
        localizacao: "Nashville, Tennessee, Estados Unidos",
        consagracao: "2000-05-21",
        area: 10700,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/nashville-tennessee-temple/nashville-tennessee-temple-38227-main.jpg"
    }
];

document.querySelector('#pagina-inicial').addEventListener('click', () => {
    createTempleCard(templos);
});

document.querySelector('#antigo').addEventListener('click', () => {
    toggleActive(document.querySelector('#antigo'));
    createTempleCard(templos.filter(temple => new Date(temple.consagracao) < new Date('1950-01-01')));
});

document.querySelector('#novo').addEventListener('click', () => {
    toggleActive(document.querySelector('#novo'));
    createTempleCard(templos.filter(temple => new Date(temple.consagracao) >= new Date('1950-01-01')));
});

document.querySelector('#grande').addEventListener('click', () => {
    toggleActive(document.querySelector('#grande'));
    createTempleCard(templos.filter(temple => temple.area >= 90000));
});

document.querySelector('#pequeno').addEventListener('click', () => {
    toggleActive(document.querySelector('#pequeno'));
    createTempleCard(templos.filter(temple => temple.area < 10000));
});

// Função para criar os Cards no HTML
function createTempleCard(templos) {
    document.querySelector('.grade-templos').innerHTML = "";

    templos.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.nomeDoTemplo;
        location.innerHTML = `<span class="rotulo">Localização:</span> ${temple.localizacao}`;
        dedication.innerHTML = `<span class="rotulo">Dedicado:</span> ${temple.consagracao}`;
        area.innerHTML = `<span class="rotulo">Tamanho:</span> ${temple.area} pés²`;

        img.setAttribute("src", temple.urlDaImagem);
        img.setAttribute("alt", `Templo ${temple.nomeDoTemplo}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".grade-templos").appendChild(card);
    });
}

createTempleCard(templos);

function toggleActive(element) {
    document.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');
    });

    element.classList.add("active");
}

const anoatual = new Date().getFullYear();
document.getElementById("ano-atual").textContent = anoatual;

const ultimaModificacao = new Date(document.lastModified);
document.getElementById("ultima-modificacao").textContent = ultimaModificacao;