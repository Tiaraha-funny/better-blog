console.log('it works');

//Calling the neccessary elements

const container = document.querySelector('.container');
const post = document.querySelector('#post-list');
const card = document.querySelector('.card');
const image = document.querySelector('.card-img-top');
const cardBody = document.querySelector('.card-body');
const header = document.querySelector('.card-title');
const paragraph = document.querySelector('.card-text');
const button = document.querySelector('.btn-delete');
const submitBtn = document.querySelector('.btn-primary');

const input = document.querySelectorAll('.form-control');

//creating elements
function createNewPost () {
    let img = document.createComment('img');
    img.src = `https://picsum.photos/500/200`;
    img.alt = 'Card image cap';

    let newPost = document.createElement('div');
    newPost.classList.add('#post-list');

    let newCard = document.createElement('div');
    newCard.classList.add('card');

    let newCardBody = document.createElement('div');
    newCardBody.classList.add('card-body');

    let newHeader = document.createElement('h5');
    newHeader.classList.add('card-title');

    let newParagraph = document.createElement('p');
    newParagraph.classList.add('card-text');

    newHeader.textContent = `${header}`;
    newParagraph.textContent = `${paragraph}`;

    // append child of those elements
    newPost.appendChild(newCard);
    newCard.appendChild(img);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newHeader);
    newCardBody.appendChild(newParagraph);

}

submitBtn.addEventListener('click', () => {
    const myPost = createNewPost();
    myPost.insertAdjacentElement('beforebegin', newPost);
})