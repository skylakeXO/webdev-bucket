const commentForm = document.querySelector('#commentForm');
const commentContainer = document.querySelector('#commentContainer');

commentForm.addEventListener('submit', function(e){
    e.preventDefault();
    const userName = commentForm.elements.username.value;
    const comments = commentForm.elements.comments.value;

    addComment(userName, comments);
    commentForm.elements.username.value = '';
    commentForm.elements.comments.value = '';

});

const addComment = (userName, comments) => {
    const newComment = document.createElement('li');
    const boldName = document.createElement('b');
    boldName.append(userName);
    newComment.append(boldName);
    newComment.append(` - ${comments}`);

    console.log(newComment);

    commentContainer.append(newComment);
}

commentContainer.addEventListener('click', function(e) {
    e.target.nodeName === 'LI' && e.target.remove();
})
