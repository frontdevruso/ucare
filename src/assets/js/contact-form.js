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
            const formFile = form.querySelector('[data-validate-field="file"]');
            
            const formCheckbox = form.querySelector('[data-validate-field="checkbox"]');
        
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
    
                if(formName) {
                    if (formName.value.length === 0) {
                        formName.parentElement.classList.add('g-input-error');
                        errCount++;
                    } else { formName.parentElement.classList.remove('g-input-error') }
                } 
    
                if(formSurname) {
                    if (formSurname.value.length === 0) {
                        formSurname.parentElement.classList.add('g-input-error');
                        errCount++;
                    } else { formSurname.parentElement.classList.remove('g-input-error') }
                } 
    
                if(formOrg) {
                    if (formOrg.value.length === 0) {
                        formOrg.parentElement.classList.add('g-input-error');
                        errCount++;
                    } else { formOrg.parentElement.classList.remove('g-input-error') }
                } 
    
                if(formSocial) {
                    if (formSocial.value.length === 0) {
                        formSocial.parentElement.classList.add('g-input-error');
                        errCount++;
                    } else { formSocial.parentElement.classList.remove('g-input-error') }
                } 
    
                if(formCountry) {
                    if (formCountry.value.length === 0) {
                        formCountry.parentElement.classList.add('g-input-error');
                        errCount++;
                    } else { formCountry.parentElement.classList.remove('g-input-error') }
                } 
    
                if(formMail) {
                    if (formMail.value.length === 0 || !regx.test(formMail.value)) {
                        formMail.parentElement.classList.add('g-input-error');
                        errCount++;
                    } else { formMail.parentElement.classList.remove('g-input-error') }
                } 
    
                if(formPhone) {
                    if (formPhone.value.length >= 24 || formPhone.value.length === 0 || formPhone.value.length < 15) {
                        formPhone.parentElement.classList.add('g-input-error');
                        errCount++;
                    } else { formPhone.parentElement.classList.remove('g-input-error') }
                } 
    
                if(formFile) {
                    if (allFiles.length === 0) {
                        formFile.parentElement.parentElement.classList.add('file-input-error');
                        errCount++;
                    } else { formFile.parentElement.parentElement.classList.remove('file-input-error') }
                } 
                    
                if(form.querySelector('.select-box')) {
                    if (hasSelected === false) {
                        form.querySelector('.select-box').classList.add('g-select-error');
                        errCount++;
                    } else {
                        form.querySelector('.select-box').classList.remove('g-select-error');
                    }
                } 

                if(formCheckbox) {
                    if (formCheckbox.checked == false) {
                        errCount++;
                        formCheckbox.parentElement.classList.add('policy-error');
                    } else { formCheckbox.classList.remove('policy-error') }
                } 
    
                if (errCount === 0) {
                    // HERE YOU CAN ADD A AJAX REQUEST TO SEND DATA
                    document.querySelector('.modal--form').classList.remove('modal--open');
                    document.querySelector('.modal--form-regular').classList.remove('modal--open');
                    setTimeout(function() {
                        document.querySelector('.modal--succes').classList.add('modal--open');
                    }, 200);
                }
            });


            // SELECT-BOX
            
            const selected = document.querySelector("#selectBoxCurrent");
            const optionsContainer = document.querySelector(".options-container");
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
                optionsContainer.classList.add("active");
                selectArrow.classList.toggle("select-box-arrow-opened");
                document.querySelector('.select-box').classList.remove('g-select-error');
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

            if (form.querySelector('[data-validate-field="file"]')) {
                inputFile.addEventListener('click', function() {
                    inputFile.parentElement.parentElement.classList.remove('file-input-error');
                });
    
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

                    console.log(allFiles);
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
            }
        })
    }
});