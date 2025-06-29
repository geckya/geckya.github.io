// Simplified - no hover effects
function flipCard(card) {
    card.classList.toggle('flipped');
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const toggle = document.querySelector('.theme-toggle i');
    const isLight = document.body.classList.contains('light-mode');
    
    if (isLight) {
        toggle.classList.remove('fa-sun');
        toggle.classList.add('fa-moon');
    } else {
        toggle.classList.remove('fa-moon');
        toggle.classList.add('fa-sun');
    }
}

// Randomize card order on page load
function shuffleCards() {
    const grid = document.querySelector('.cards-grid');
    const cards = Array.from(grid.children);
    
    // Fisher-Yates shuffle
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    
    // Clear grid and append shuffled cards
    grid.innerHTML = '';
    cards.forEach(card => grid.appendChild(card));
}

// Run shuffle when page loads
document.addEventListener('DOMContentLoaded', shuffleCards);