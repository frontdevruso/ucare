if (document.querySelector('.header')) {
    const header = document.querySelector('.header');
    const headerHeight = parseInt(window.getComputedStyle(header).height);

    const checkingHeaderPosition = () => {    
        if (window.scrollY > headerHeight / 2) {
            header.classList.add('header--floating');
        } else {
            header.classList.remove('header--floating');
        }
    }

    checkingHeaderPosition();

    window.addEventListener("scroll", function() {
        checkingHeaderPosition();
    });
}