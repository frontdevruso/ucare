if(document.querySelectorAll('.form-title')) {
    const allBtns = document.querySelectorAll('.form-title');
    const modalTitle = document.querySelector('.modal-title');
    allBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalTitle.innerHTML = btn.innerHTML;
        });
    })
}