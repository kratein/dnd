function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function changeLanguage(language) {
    if (typeof language !== 'string') {
        console.error('Invalid language parameter:', language);
        return;
    }

    if (language === 'fr') {
        window.location.href = 'index.html';
    } else if (language === 'en') {
        window.location.href = 'index_en.html';
    } else {
        console.error('Unsupported language:', language);
    }
}