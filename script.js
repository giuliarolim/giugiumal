// Configuração das datas alvo
const dates = {
    timer1: new Date().getTime() + (365 * 24 * 60 * 60 * 1000), // 1 ano
    timer2: new Date().getTime() + (10 * 365 * 24 * 60 * 60 * 1000), // 10 anos
    timer3: new Date().getTime() + (1 * 24 * 60 * 60 * 1000) // 1 dia
};

function updateCountdowns() {
    const now = new Date().getTime();

    for (let id in dates) {
        const distance = dates[id] - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(id).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// Criar elementos decorativos (Corações e Estrelas)
function createDecorations() {
    const symbols = [
        { char: '💙', class: 'heart', color: '#a0ced9' },
        { char: '⭐', class: 'star', color: '#ffecb3' }
    ];

    for (let i = 0; i < 30; i++) {
        const type = symbols[Math.floor(Math.random() * symbols.length)];
        const el = document.createElement('div');
        el.innerHTML = type.char;
        el.className = type.class;
        el.style.left = Math.random() * 100 + 'vw';
        el.style.top = Math.random() * 100 + 'vh';
        el.style.fontSize = (Math.random() * 20 + 10) + 'px';
        el.style.animationDelay = (Math.random() * 5) + 's';
        el.style.opacity = '0.6';
        document.body.appendChild(el);
    }
}

setInterval(updateCountdowns, 1000);
createDecorations();
updateCountdowns();
