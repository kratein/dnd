function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

let currentLanguage = 'en'; // Langue par défaut

function changeLanguage(language) {
    if (typeof language !== 'string') {
        console.error('Invalid language parameter:', language);
        return;
    }

    currentLanguage = language;

    // Recharger le contenu Markdown en fonction de la langue
    if (typeof loadMarkdown === 'function') {
        const filePath = language === 'fr'
            ? 'https://kratein.github.io/dnd/contents/playing_the_game_fr.md'
            : 'https://kratein.github.io/dnd/contents/playing_the_game.md';
        loadMarkdown(filePath);
    }
}