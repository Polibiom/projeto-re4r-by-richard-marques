const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
const dots = document.querySelectorAll(".dot");

function atualizarSlider() {
    // Remove seleção de todos os cartões
    cartoes.forEach(cartao => {
        cartao.classList.remove("selecionado");
    });
    
    // Adiciona seleção ao cartão atual
    cartoes[cartaoAtual].classList.add("selecionado");
    
    // Atualiza os dots
    dots.forEach((dot, index) => {
        dot.classList.remove("active");
        if (index === cartaoAtual) {
            dot.classList.add("active");
        }
    });
}

btnAvancar.addEventListener("click", function() {
    if (cartaoAtual === cartoes.length - 1) return;
    cartaoAtual++;
    atualizarSlider();
});

btnVoltar.addEventListener("click", function() {
    if (cartaoAtual === 0) return;
    cartaoAtual--;
    atualizarSlider();
});

// Adiciona evento de clique nos dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
        if (index !== cartaoAtual) {
            cartaoAtual = index;
            atualizarSlider();
        }
    });
});

// Controle por teclado
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        if (cartaoAtual < cartoes.length - 1) {
            cartaoAtual++;
            atualizarSlider();
        }
    } else if (event.key === "ArrowLeft") {
        if (cartaoAtual > 0) {
            cartaoAtual--;
            atualizarSlider();
        }
    }
});

// Efeito de hover nas imagens (opcional)
document.querySelectorAll('.cartao .imagem-personagem').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});