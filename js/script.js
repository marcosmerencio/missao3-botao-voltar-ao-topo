document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById("backToTop");

    // Requisito: Mostrar o botão após 300px de scroll
    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.classList.replace("hidden", "visible");
        } else {
            backToTopButton.classList.replace("visible", "hidden");
        }
    };

    // Requisito: scrollTo com behavior smooth ao clicar
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});