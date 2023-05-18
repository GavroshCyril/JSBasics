const openModalButton = document.getElementById('open-modal'),
        modalWindowOverlay = document.getElementById('modal-overlay'),
        closeModalButton = document.getElementById('close-modal');

const showModalWindow = () => {
    modalWindowOverlay.style.display = "flex";
    setTimeout(() => {
        modalWindowOverlay.style.opacity = 1;
    }, 40);
};

const hideModalWindow = () => {
    modalWindowOverlay.style.opacity = 0;
    setTimeout(() => {
        modalWindowOverlay.style.display = 'none';
    }, 400);
};

openModalButton.addEventListener("click", showModalWindow);
closeModalButton.addEventListener("click", hideModalWindow);
modalWindowOverlay.addEventListener("click", (e) => {
    if(e.target === e.currentTarget) {
        hideModalWindow();
    }
});