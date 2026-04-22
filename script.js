
const textoParaDigitar = "Eu construo coisas com programação.";
const elementoTexto = document.getElementById("efeito-maquina");
let index = 0;

function digitar() {
    if (index < textoParaDigitar.length) {
        elementoTexto.innerHTML += textoParaDigitar.charAt(index);
        index++;
        setTimeout(digitar, 100);
    } else {
        elementoTexto.style.borderRight = "2px solid var(--accent-color)";
        setInterval(() => {
            elementoTexto.style.borderRightColor = elementoTexto.style.borderRightColor === 'transparent' ? 'var(--accent-color)' : 'transparent';
        }, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(digitar, 500);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('section').forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});