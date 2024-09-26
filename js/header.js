function toggleDropDown(event) {
    const button = event.currentTarget;
    const arrow = button.querySelector('.drop-arrow');
    const ul = button.nextElementSibling;
    ul.classList.toggle('active');
    arrow.classList.toggle('active');
}

document.querySelectorAll('.footer-drop-btn').forEach(btn => {
    btn.addEventListener('click', toggleDropDown);
});
// header code

const openNavBtn = document.querySelector('#open-nav-btn');

function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
    document.body.classList.toggle('scroll');
};

openNavBtn.addEventListener('click', toggleNav);

// open subcategories

function toggleSubCat(event) {
    const button = event.currentTarget;
    const subCatId = button.getAttribute('id').split('-')[0];
    const currentCat = button.closest('ul');
    const subCat = document.getElementById(subCatId);

    currentCat.style.display = 'none';
    subCat.style.display = 'block';
};

document.querySelectorAll('.open-sub-btn').forEach(btn => {
    btn.addEventListener('click', toggleSubCat);
});

function goBack(event) {
    const button = event.currentTarget;
    const currentCat = button.closest('ul');
    const catData = currentCat.getAttribute('data-cat');
    const beforeCat = document.getElementById(catData);

    if (currentCat.getAttribute('data-level') == 1) {
        const mainCat = document.querySelector('#main-cat');
        mainCat.style.display = 'block';
        currentCat.style.display = 'none';
    } else {
        beforeCat.style.display = 'block';
        currentCat.style.display = 'none';
    };
};

document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', goBack);
});
