document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('main-header');
    fetch('../html/header.html')
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
            const initialLang = localStorage.getItem('user-language') || LANGUAGES.POLISH;
            generateLanguageDropdown();
            loadAndApplyTranslations(initialLang);
            const dropdownToggle = document.querySelector('.nav-link.dropdown-toggle');
            setupLanguageHandlers(dropdownToggle);
            if (dropdownToggle) dropdownToggle.textContent = initialLang;
        });
});

function generateLanguageDropdown() {
    let html = '';
    Object.values(LANGUAGES).forEach(key => {
        html += `<li><a class="dropdown-item" href="#">${key}</a></li>`;
    });
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu) {
        dropdownMenu.innerHTML = html;
    }
}