// variavel slideindex
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
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let pontos = document.getElementsByClassName("ponto");
//verifica se n maior que o numero atual do slide atual
    if (n > slides.length) { 
        slideIndex = 1 // retorna ao primeiro slide
    }
    //
    if (n < 1) { 
        slideIndex = slides.length 
    }
    //for é usada quando você sabe antecipadamente quantas vezes deseja que o loop seja executado
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //for é usada quando você sabe antecipadamente quantas vezes deseja que o loop seja executado
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" active", "");
    }
    // seleciona o item para modificalo no css 
    slides[slideIndex - 1].style.display = "block";
    // seleciona o item para modificalo no css
    pontos[slideIndex - 1].className += " active";
}