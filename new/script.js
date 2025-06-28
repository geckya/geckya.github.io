// Simplified - no hover effects
function flipCard(card) {
    card.classList.toggle('flipped');
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const toggle = document.querySelector('.theme-toggle');
    const isLight = document.body.classList.contains('light-mode');
    toggle.textContent = isLight ? '🌙' : '☀️';
}