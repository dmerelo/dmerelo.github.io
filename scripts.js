$(document).ready(function() {
    // Navegação suave entre as seções
    $('a.scrolly').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

    // Animação de fade-in quando a página carrega
    $('body').addClass('is-preload');
    window.setTimeout(function() {
        $('body').removeClass('is-preload');
    }, 100);
});