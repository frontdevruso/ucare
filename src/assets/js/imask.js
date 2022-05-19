const tels = document.querySelectorAll("input[type=\"tel\"]");

if (tels) {
    tels.forEach(el => {
        IMask(el, { mask: "+ {0} (000) 000 00 000 00" });
    });
}