document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll ('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('grupos__lista--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('grupos__navegacao__botao--is-active');
        })
    }
    
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
    

    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');
    
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('grupos__navegacao__botao--is-active');
        }
    }
    
    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('grupos__lista--is-active');
        }
    }
    
    function abreOuFechaResposta(elemento) {
        const classe = 'faq__questions__item--is-open';
        const elementoPai = elemento.target.parentNode;
    
        elementoPai.classList.toggle(classe);
    }
})
