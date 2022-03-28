const modalWindow = document.getElementById('modal');
const openModal = document.querySelectorAll('.modal__button');
const body = document.querySelector('body');

openModal.forEach(btn => {
    btn.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        const oldWidth = document.documentElement.clientWidth;
        body.classList.add('noscroll');
        body.style.width = oldWidth + 'px';
    })
})

modalWindow.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.modal__inner') || target.closest('.modal__close')) {
        modalWindow.style.display = 'none';
        body.classList.remove('noscroll');
        body.style.width = 'initial';
    }
})