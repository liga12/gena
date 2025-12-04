const KEYS = Object.freeze({
    HOME: 'home',
    CONTACT: 'contact',
    GALLERY: 'gallery',
    DESCRIPTION: 'description', CONTACT_TITLE: 'contact_title', CONTACT_BODY: 'contact_body',
    EMAIL: 'gena@tgmail.com',
    PHONE: '+48 000',
});

const LANGUAGES = Object.freeze({
    POLISH: 'PL',
    ENGLISH: 'EN',
    RUSSIAN: 'RU'
});

let currentTranslations = {};

function setupLanguageHandlers(dropdownToggle) {
    document.addEventListener('click', function (event) {
        const item = event.target.closest('.dropdown-menu .dropdown-item');
        if (!item) return;
        event.preventDefault();
        const selectedLanguage = item.textContent.trim();
        if (dropdownToggle) dropdownToggle.textContent = selectedLanguage;
        loadAndApplyTranslations(selectedLanguage);
        localStorage.setItem('user-language', selectedLanguage);
    });
}

async function loadAndApplyTranslations(lang) {
    const response = await fetch(`.././translations/${lang.toLowerCase()}.json`);
    currentTranslations = await response.json();
    applyTranslations();
}

function applyTranslations() {
    document.querySelectorAll('[language_key]').forEach(el => {
        const key = el.getAttribute('language_key');
        const translationString = currentTranslations[key];

        if (translationString) {
            el.textContent = replaceConstanInTranslations(translationString);
        }
    });
}

function replaceConstanInTranslations(translationString) {
    return translationString
        .replace('{email}', KEYS.EMAIL)
        .replace('{phone}', KEYS.PHONE);
}

