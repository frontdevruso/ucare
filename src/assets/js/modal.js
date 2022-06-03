if(document.querySelector('.modal')) {
    const modalWindow = document.querySelectorAll('.modal');
    const modalOpenBtns = document.querySelectorAll('.open-modal-form');
    const modalOpenRegularFormBtn = document.querySelector('.open-regular-modal-form');
    const modalOpenPartnersFormBtn = document.querySelector('.open-partners-modal-form');

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

            document.querySelector('.select-box--partners').classList.add('none');
            document.querySelector('.select-box--partners').classList.remove('select-box-init')
            document.querySelector('.select-box--request').classList.add('select-box-init');
            document.querySelector('.select-box--request').classList.remove('none');
        });
    })
    
    modalOpenRegularFormBtn.addEventListener('click', function() {
        document.querySelector('body').classList.add('m-hidden');
        document.querySelector('.modal--form-regular').classList.add('modal--open');
    });
    
    modalOpenPartnersFormBtn.addEventListener('click', function() {
        document.querySelector('body').classList.add('m-hidden');
        document.querySelector('.modal--form').classList.add('modal--open');

        document.querySelectorAll('.contact-form__wrapper-form-files p').forEach(function(p) {
            p.classList.toggle('none');
        });

        document.querySelector('.select-box--partners').classList.remove('none');
        document.querySelector('.select-box--partners').classList.add('select-box-init')
        document.querySelector('.select-box--request').classList.remove('select-box-init');
        document.querySelector('.select-box--request').classList.add('none');
    });
}