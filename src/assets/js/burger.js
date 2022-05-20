document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const body = document.body;
    
    burger.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("isOpen");
        body.classList.toggle('m-open');
    });
});