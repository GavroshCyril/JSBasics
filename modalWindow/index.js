const openModalButton = document.getElementById('open-modal')
const modalWindowOverlay = document.getElementById('modal-overlay')
const closeModalButton = document.getElementById('close-modal')

const showModalWindow = () => {
    modalWindowOverlay.style.display = "flex";
}

openModalButton.addEventListener("click",showModalWindow)


const hideModalWindow = () => {
    modalWindowOverlay.style.display = 'none';
}

closeModalButton.addEventListener("click", hideModalWindow);


const hideModalWindowOnBlur = (e) => {

    if(e.target === e.currentTarget) {
        hideModalWindow();
    }
}

modalWindowOverlay.addEventListener("click", hideModalWindowOnBlur)