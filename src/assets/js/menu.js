if (document.querySelector('.menu')) {
    document.querySelectorAll('.menu ul a').forEach(function(link) {
        link.addEventListener('click', function() {
            document.querySelector('body').classList.remove('m-open');
            document.querySelector('.burger').classList.remove('isOpen');
        })
    });
}