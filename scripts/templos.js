const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const anoatual = new Date().getFullYear();
document.getElementById("anoatual").textContent = anoatual;

const ultimaModificacao = new Date(document.lastModified);
document.getElementById("ultimaModificacao").textContent = ultimaModificacao;