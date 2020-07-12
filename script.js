console.log('it works');

//Calling the neccessary elements

// const container = document.querySelector('.container');

const post = document.querySelector('#post-list');
const card = document.querySelector('.card');
const cardFooter = document.querySelector('.card-footer');

// const image = document.querySelector('.card-img-top');
const cardBody = document.querySelector('.card-body');

const header = document.querySelector('#postTitle');
const paragraph = document.querySelector('[name="postContent"]');
const author = document.querySelector('[name="postAuthor"]');
const image = document.querySelector('[value="https://picsum.photos/500/200"]');


const button = document.querySelector('.btn-delete');

const submitBtn = document.querySelector('.btn-primary');

const input = document.querySelectorAll('.form-control');


//creating elements
const createNewPost = () => {

    let img = document.createComment('img');
    img.src = `https://picsum.photos/500/200`;
    img.alt = 'Card image cap';

    let newCard = document.createElement('div');
    newCard.classList.add('card');

    let newCardBody = document.createElement('div');
    newCardBody.classList.add('card-body');

    let newHeader = document.createElement('h5');
    newHeader.classList.add('card-title');

    let newParagraph = document.createElement('p');
    newParagraph.classList.add('card-text');

    let deletebtn = document.createElement('button');
    deletebtn.classList.add('btn-delete');

    let newDateFooter = document.createElement('div');
    newDateFooter.classList.add('.card-footer');

    newHeader.textContent = `${header.value} by ${author.value}`;
    newParagraph.textContent = `${paragraph.value}`;
    img.textContent = `${image.value}`;
    newDateFooter.textContent = `${cardFooter.value}`;

    // append child of those elements
    post.appendChild(newCard);
    newCard.appendChild(img);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newHeader);
    newCardBody.appendChild(newParagraph);
    newCardBody.appendChild(deletebtn);
    newCard.appendChild(newDateFooter);

    return newCard;
}


submitBtn.addEventListener('click', () => {
    const newPosts = createNewPost();
    card.insertAdjacentHTML('beforebegin', newPosts);
})
