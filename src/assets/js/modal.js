if(document.querySelector('.modal')) {
    const modalWindow = document.querySelectorAll('.modal');
    const modalOpenBtns = document.querySelectorAll('.open-modal-form');

    modalWindow.forEach(function(item) {
        if(item.querySelector('.modal-close')) {
            item.querySelector('.modal-close').addEventListener('click', function() {
                item.classList.remove('modal--open');
                document.querySelector('body').classList.remove('m-hidden');
            });
        }
        if(item.querySelector('.modal__btn')) {            
            item.querySelector('.modal__btn').addEventListener('click', function() {
                item.classList.remove('modal--open');
                document.querySelector('body').classList.remove('m-hidden');
            });
        }
    })

    modalOpenBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelector('body').classList.add('m-hidden');
            document.querySelector('.modal--form').classList.add('modal--open');
        });
    })
}