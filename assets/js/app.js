document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const body = document.body;
    
    burger.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("isOpen");
        body.classList.toggle('m-open');
    });
});

if(document.querySelectorAll('.form-title')) {
    const allBtns = document.querySelectorAll('.form-title');
    const modalTitle = document.querySelector('.modal-title');
    allBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalTitle.innerHTML = btn.innerHTML;
        });
    })
}

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelectorAll('.contact-form');
    if (contactForm) {
        contactForm.forEach(function(form) {
            const formPhone = form.querySelector('[data-validate-field="tel"]');
            const formName = form.querySelector('[data-validate-field="name"]');
            const formSurname = form.querySelector('[data-validate-field="surname"]');
            const formOrg = form.querySelector('[data-validate-field="org"]');
            const formSocial = form.querySelector('[data-validate-field="social"]');
            const formCountry = form.querySelector('[data-validate-field="country"]');
            const formMail = form.querySelector('[data-validate-field="mail"]');

            const formCheckbox = document.querySelector('[data-validate-field="checkbox"]');
            const selectBox = document.getElementById('selectBoxForm');
        
            const formAllInput = form.querySelectorAll('[data-validate-field]');
            const contactFormSubmitBtn = form.querySelector('.contact-form-submit');
            let hasSelected = false;

            let regx = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
            
            formAllInput.forEach(function(item) {
                item.addEventListener('focus', function() {
                    item.parentElement.classList.remove('g-input-error');
                    item.parentElement.classList.remove('policy-error');
                })
            });

            formCheckbox.addEventListener('change', function() {
                if(this.checked) {
                    formCheckbox.parentElement.classList.remove('policy-error');
                }
            });
        
            contactFormSubmitBtn.addEventListener('click', function(e) {
                e.preventDefault();
                let errCount = 0;
    
                if (formName.value.length === 0) {
                    formName.parentElement.classList.add('g-input-error');
                    errCount++;
                } else { formName.parentElement.classList.remove('g-input-error') }
    
                if (formSurname.value.length === 0) {
                    formSurname.parentElement.classList.add('g-input-error');
                    errCount++;
                } else { formSurname.parentElement.classList.remove('g-input-error') }
    
                if (formOrg.value.length === 0) {
                    formOrg.parentElement.classList.add('g-input-error');
                    errCount++;
                } else { formOrg.parentElement.classList.remove('g-input-error') }
    
                if (formSocial.value.length === 0) {
                    formSocial.parentElement.classList.add('g-input-error');
                    errCount++;
                } else { formSocial.parentElement.classList.remove('g-input-error') }
    
                if (formCountry.value.length === 0) {
                    formCountry.parentElement.classList.add('g-input-error');
                    errCount++;
                } else { formCountry.parentElement.classList.remove('g-input-error') }
    
                if (formMail.value.length === 0 || !regx.test(formMail.value)) {
                    formMail.parentElement.classList.add('g-input-error');
                    errCount++;
                } else { formMail.parentElement.classList.remove('g-input-error') }
    
                if (formPhone.value.length >= 24 || formPhone.value.length === 0 || formPhone.value.length < 15) {
                    formPhone.parentElement.classList.add('g-input-error');
                    errCount++;
                } else { formPhone.parentElement.classList.remove('g-input-error') }
                    
                if (hasSelected === false) {
                    selectBox.classList.add('g-select-error');
                    errCount++;
                } else {
                    selectBox.classList.remove('g-select-error');
                }

                if (formCheckbox.checked == false) {
                    errCount++;
                    formCheckbox.parentElement.classList.add('policy-error');
                } else { formCheckbox.classList.remove('policy-error') }
    
                if (errCount === 0) {
                    // HERE YOU CAN ADD A AJAX REQUEST TO SEND DATA
                    document.querySelector('.modal--form').classList.remove('modal--open');
                    setTimeout(function() {
                        document.querySelector('.modal--succes').classList.add('modal--open');
                    }, 200);
                }
            });


            // SELECT-BOX
            
            const selected = document.getElementById("selectBoxCurrent");
            const optionsContainer = document.getElementById("optionsContainer");
            const selectArrow = document.getElementById("selectBoxArrow");
            const optionsList = document.querySelectorAll(".option");
        
            document.addEventListener('click', (event) => {
                let isClickInsideElement = selected.contains(event.target); 
                if (!isClickInsideElement) {
                    optionsContainer.classList.remove("active");
                    selectArrow.classList.remove("select-box-arrow-opened");
                }
            });
        
            selected.addEventListener("click", () => {
                optionsContainer.classList.toggle("active");
                selectArrow.classList.toggle("select-box-arrow-opened");
                selectBox.classList.remove('g-select-error');
            });
        
            optionsList.forEach(o => {
                o.addEventListener("click", () => {
                    hasSelected = true;
                    selected.innerHTML = o.querySelector("label").innerHTML;
                    optionsContainer.classList.remove("active");
                    selectArrow.classList.remove("select-box-arrow-opened");
                });
            });


            // INPUT TYPE="FILE"

            const inputFile = document.querySelector('.contact-form__wrapper-form-files main input');
            const allFiles = [];
            let allFileSize = 0;

            inputFile.addEventListener('change', function() {
                if (inputFile.files[0]) {
                    if (inputFile.files[0].size > 5 * 1024 * 1024) {
                        alert('Ваш файл должен весить меншье 5 МБ!');
                        return;
                    } else if ((allFiles.length + 1) > 20) {
                        alert('Вы не можете добавить больше 20 файлов');
                        return;
                    } else if (!['image/jpeg', 'image/jpg', 'image/png', 'application/vnd.ms-excel', 'application/pdf', ''].includes(inputFile.files[0].type)) {
                        alert('Вы можете прикрепить только такие форматы: pdf, jpg, png, ppt, doc, xls.');
                        return;
                    } else {
                        allFiles.push(inputFile.files[0]);
                        allFiles.forEach(function(eachitem) {
                            allFileSize += eachitem.size;
                        })
                    }
                }
                
                if (allFileSize > 30 * 1024 * 1024) {
                    alert('Ваши файлы должен весить меншье 30 МБ');
                    return;
                }

                uploadFile(inputFile.files[0]);
                showingFiles(inputFile.files[0].name);
                deletingFiles();
            });

            function uploadFile(file) {
                var reader = new FileReader();

                reader.onerror = function(e) { alert('Ошибка') }
                reader.readAsDataURL(file);
            }

            function showingFiles(fileName) {
                const filesContainer = document.querySelector('.contact-form__wrapper-form-files-preview');
                filesContainer.innerHTML +=
                `<li>` +
                    `<button data-file-name="${fileName}" type="button"><svg><use xlink:href="./assets/images/svg/sprite.svg#closeIcon"></use></svg></button>` +
                    `<span>${fileName}</span>` +
                `</li>`
            }

            function deletingFiles() {
                let allpreviewFiles = document.querySelectorAll('.contact-form__wrapper-form-files-preview li');
                allpreviewFiles.forEach(function(item) {
                    item.querySelector('button').addEventListener('click', function() {
                        const fileName = this.getAttribute('data-file-name');

                        allFiles.forEach(function(arrayFiles, index) {
                            if(arrayFiles.name === fileName) { allFiles.splice(index) }
                        }); 

                        item.remove();
                    });
                });
            }
        })
    }
});

const tels = document.querySelectorAll("input[type=\"tel\"]");

if (tels) {
    tels.forEach(el => {
        IMask(el, { mask: "+ {0} (000) 000 00 000 00" });
    });
}

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

const observer = lozad('.lozad', {
    loaded: function(img) {
        img.addEventListener('load', function() {
            img.classList.add('loaded');
        });
        
        if(img.hasAttribute('data-background-image')) {
            img.classList.add('loaded');
        };
    },
});


observer.observe();

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

if(document.querySelector('.partners__slider')) {
    let partnersSlider = new Swiper(".partners__slider", {
        slidesPerView: "auto",
        spaceBetween: 30,
        grabCursor: true,
        centeredSlides: true,
        loop: true,
    });
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
if (smoothLinks) {
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
    
            if (id === "#") return
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
}