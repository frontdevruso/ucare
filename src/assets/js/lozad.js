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