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
        })
    }
});