document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll('[data-language-switcher]')) {
        const allLangSwitchers = document.querySelectorAll('[data-language-switcher]');
        const allLangSwitchersBtns = document.querySelectorAll('[data-language-item]');
    
        allLangSwitchersBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                const language = btn.getAttribute('data-language-item');
                const languageText = btn.getAttribute('data-language-text');
                allLangSwitchersBtns.forEach(function(everyBtn) { everyBtn.classList.remove('active') })
                btn.classList.add('active');
    
                allLangSwitchers.forEach(function(switcher) {
                    switcher.setAttribute('data-language-switcher', language);
                    switcher.querySelector('main span').innerHTML = languageText;
                })
            });
        })
    }
});