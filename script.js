console.log('it works');

//Calling the neccessary elements

// const container = document.querySelector('.container');

const post = document.querySelector('#post-list');
const card = document.querySelector('.card');
const cardFooter = document.querySelector('.card-footer');
const cardBody = document.querySelector('.card-body');
const header = document.querySelector('#postTitle').required;
const paragraph = document.querySelector('[name="postContent"]');
const author = document.querySelector('[name="postAuthor"]');
const image = document.querySelector('[name="postImg"]');
const button = document.querySelector('.btn-delete');
const submitBtn = document.querySelector('.btn-primary');
const input = document.querySelectorAll('.form-control');
const allDeleteBtn = document.querySelectorAll('btn-delete');
const showFormBtn = document.querySelector('#show-form');
const formCard = document.querySelector('#form-card');
const textAreaErrorMes = document.querySelector('#error-message');

const today = new Date();

//creating elements
const createNewPost = () => {

    let img = document.createElement('img');
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
    deletebtn.textContent = 'deleted entry';

    
    newDateFooter.textContent = `${today.toLocaleDateString()}`;

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

//instead of using this long code we can use the creating html but we have to put it in the return statement followed by backticks 


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const newPost = createNewPost(e.target);
    card.insertAdjacentElement('beforebegin', newPost);

    /*
     * The post content will consist of minimum 20 words. If the user enters less than that, add the class .is-invalid to the postContent textarea, and make the div with the class .invalid-feedback appear in the DOM.
    */

    const postContents = e.target.postContent;
    const numberOfWords = postContents.value.split('').length;

    if (numberOfWords < 20) {
        postContent.classList.add('is-invalid');
        textAreaErrorMes.classList.remove('hidden');
    } else {
        
/*
A blog post will consist of a title, an author, a content body, an image (500 x 200), a date on the footer, and a delete button as a bonus.
The latest post will appear on top of the post list.
*/

        // const newPost = createNewPost(e.target);
        // card.insertAdjacentElement('beforebegin', newPost);

        postContent.classList.remove('is-invalid');
        textAreaErrorMes.classList.add('hidden');
    }
})

/**
 * The button "Hide form" will hide the form. When the form is hidden, the text of the button is going to be "Add a post". And, when clicked again, the button will come back to the starting state ("Hide form" as the button text, and the form visible on the screen). There is a class of .hidden that you can reuse. To hide the form, you can hide the element with the id #form-card.
 */

//hide the form
const showForm = () => {
    if(formCard.classList.contains('hidden')) {
        formCard.classList.remove('hidden');
        formCard.textContent = 'hide form';
    } else {
        formCard.classList.add('hidden');
        showFormBtn.textContent = 'add a post';
    }
    
}

showFormBtn.addEventListener('click', showForm);

/**
 *  the delete button will delete the post from the DOM. This part here is a little bit more tricky than the examples we saw together. Try your best!
 */
// event delegation
const handleDelete = (e) => {
    if (e.target.classList.contains('btn-deleted')) {
        const deleted = e.target;
        deleted.closest('.card').remove();
    }
}
button.addEventListener('click', handleDelete);