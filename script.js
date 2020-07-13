const showAndHideBtn = document.querySelector('#show-form');
const formCard = document.querySelector('.card');

showAndHideBtn.addEventListener('click', showBtn);
const showBtn = (e) => {
    if (formCard.classList.contains('hidden')) {
        formCard.classList.remove('hidden');
        formCard.textContent = 'hide a post';
    } else {
        formCard.classList.add('hidden');
        showAndHideBtn.textContent = 'hide a post';
    }
}