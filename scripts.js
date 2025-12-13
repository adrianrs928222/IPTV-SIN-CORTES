// Efecto de animación de desvanecimiento en los botones flotantes
const buttons = document.querySelectorAll('.button-floating');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});