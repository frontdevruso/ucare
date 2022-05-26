if (document.querySelector('.cookies')) {
    document.getElementById('cookiesBtn').addEventListener('click', function() {
        document.querySelector('.cookies').classList.add('cookies--hidden');
    });
}