document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-nav-button]');

    const heroSection = document.querySelector('.hero');
    // pegando a altura do elemento
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero){
            ocultaElementosDoHeader();
        } else {
            exibirElementosDoHeader();
        } 
    })


    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', function (botao) {
            
            const abaAlvo = botao.target.dataset.navButton;
            const aba = document.querySelector(`[data-nav-id=${abaAlvo}]`);
            esconderTodasAsAbas();
            aba.classList.add('curiosity__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('curiosity__nav__button--is-active');
        })
    }
})

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibirElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}


function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-nav-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('curiosity__nav__button--is-active');
    }
}

function esconderTodasAsAbas() {
    const navContainer = document.querySelectorAll('[data-nav-id]');

    for (let i = 0; i < navContainer.length; i++) {
        navContainer[i].classList.remove('curiosity__list--is-active');
    }
}