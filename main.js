const modalButton = document.querySelector('.footer__text');
const modal = document.querySelector('.modal');
const modal__content = document.querySelector('.modal__content');
const body = document.querySelector('body');
const closeButton = document.querySelector('.closeButton');

const closeModal = () => {
    modal__content.classList.remove('modal__content--open');
    modal.classList.remove('modal--open');
    body.style.overflow = 'unset';
}

modalButton.onclick = () => {
    modal__content.classList.add('modal__content--open');
    modal.classList.add('modal--open');
    body.style.overflow = 'hidden';
}

modal.onclick = (e) => {
    if (e.target !== modal) return;
    closeModal();
}

closeButton.onclick = () => {
    closeModal();
}
