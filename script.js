// variavel slideindex, inicializa o indice do slide atual como 1, chama a função para exibir o slide atual definido pelo slideindex
let slideIndex = 1;
showSlides(slideIndex);
// Essa função avança ou retrocede os slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Essa função avança ou retrocede os slides
function currentSlide(n) {
    showSlides(slideIndex = n);
}
// aqui sao 3 variaveis i, slides, pontos 
// document.getElementsByClassName é um seletor de class
// função para exibir o slides baseado no indice fornecido
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");//obtem todos os elementos com a class myslides
    let pontos = document.getElementsByClassName("ponto");//obtem todos os elementos com a class pontos
//verifica se n maior que o numero atual do slide atual
    if (n > slides.length) { 
        slideIndex = 1 // retorna ao primeiro slide
    }
    // se o indice do slides for menor que 1, vai para o ultimo
    if (n < 1) { 
        slideIndex = slides.length 
    }
    //oculta todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //remove a class active de todos de todos os pontos
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" active", "");
    }
    // exibi o slide atual 
    slides[slideIndex - 1].style.display = "block";
    // adiciona a class active ao ponto correspondente do slide atual
    pontos[slideIndex - 1].className += " active";
}
//Esse script faz uma exibição de slides, usando três funções plusslides, currenrslide, showslides.
// showslides é responsavel por controlar qual slide é exibido e qual é ocultado e oculta a class active
//plusslides ajusta a função slidexindex com base no paramentro que indica quantos slides avança ou retrocede, ele chama a função showslides para atualizar a exibição dos slides
//currentslides essa função define diretamente o slideindex para um valor especifico e então chama a função showslides para exibir o slide correpondente. isso permite que navegue diretamente para um slide especifico, usando um conjuntos de pontos.