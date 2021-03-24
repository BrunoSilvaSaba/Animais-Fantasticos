export default function initSelectLinks() {

}






























//==========================testes==================================//
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();
    event.target.classList.toggle('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink)
})