document.querySelectorAll('.footer-drop').forEach(btn => {
    btn.addEventListener('click', function(event) {
        const button = event.currentTarget;
        const ul = button.nextElementSibling;
        const arrow = button.querySelector('.drop-down-btn');

        ul.classList.toggle('open');
        arrow.classList.toggle('open');
    });
});

