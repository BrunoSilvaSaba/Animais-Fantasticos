export default function initAnimationScroll() {

}













//===================================testes================================//

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
    const src = event.target.getAttribute('src');
    console.log(src);
}

imgs.forEach((img) => {
    img.addEventListener('click', imgSrc);
});



