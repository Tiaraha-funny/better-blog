const showAndHideBtn = document.querySelector('#show-form');
const formCard = document.querySelector('#form-card');
const PostList = document.querySelector('#post-list');
const image = document.querySelector('[value="https://picsum.photos/500/200"]');
const cardBody = document.querySelector('card-body');
const heading = document.querySelector('#postTitle');
const paragraph = document.querySelector('[name="postContent"]');
const author = document.querySelector('[name="postAuthor"]');
const button = document.querySelector('.btn-delete');
const submitBtn = document.querySelector('.btn-primary');

const today = new Date();

/**
 *The button "Hide form" will hide the form. When the form is hidden, the text of the button is going to be "Add a post". And, when clicked again, the button will come back to the starting state ("Hide form" as the button text, and the form visible on the screen). There is a class of .hidden that you can reuse. To hide the form, you can hide the element with the id #form-card. 
 */
const showBtn = (e) => {
    e.preventDefault();
    if (formCard.classList.contains('hidden')) {
        formCard.classList.remove('hidden');
        formCard.textContent = 'hide a post';
    } else {
        formCard.classList.add('hidden');
        showBtn.textContent = 'hide a post';
    }
}
showAndHideBtn.addEventListener('click', showBtn);

//A blog post will consist of a title, an author, a content body, an image (500 x 200), a date on the footer, and a delete button as a bonus

const createNewHTML = () => {
    return `
    <div id="post-list">
        <div class="card">
            <img class="card-img-top" src="${image.value}" alt="Nice pic"/>
            <div class="card-body">
                <h5>${heading.value} <small> by ${author.value} </small> </h5>
                <p name="postContent">${paragraph.value} </p>
                <button class="btn-delete">delete entry</button>
                <div class="card-footer">${today.toLocaleDateString()}</div>
            </div>
        </div>
    </div>
`
}
//The latest post will appear on top of the post list.
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    PostList.insertAdjacentHTML('beforebegin', createNewHTML());
});

//The post content will consist of minimum 20 words. If the user enters less than that, add the class .is-invalid to the postContent textarea, and make the div with the class .invalid-feedback appear in the DOM.

const numOfWords = e.target.paragraph;
if(paragraph.contains = 20) {

}