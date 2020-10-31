const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.closeModal');

openModal.addEventListener('click', modalOpener);
closeModal.addEventListener('click', close);

//Listen for  Outside click

window.addEventListener('click', clickOutside);

function modalOpener() {
    modal.style.display = 'block';
}

function close() {
    modal.style.display = 'none';
}

function clickOutside(e) {
    if (e.target == modal){
        modal.style.display = 'none';
    }
    
}