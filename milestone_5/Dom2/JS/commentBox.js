// Step 1: Set an event handler for the button
document.getElementById('btn-post-comment')
.addEventListener('click', function () {
    
    // Step 2: Get the text written in the comment text area 
    const commentTextBox = document.getElementById('comment-text-box'); // Fixed ID
    const newComment = commentTextBox.value; // Trim to remove extra spaces

    // Prevent empty comments from being added
    if (newComment === '') {
        alert("Comment cannot be empty!");
        return;
    }

    const commentContainer = document.querySelector('.comment-container'); // Fixed selector

    // Create a new comment element
    const commentElement = document.createElement('p');
    commentElement.classList.add('comment');
    commentElement.innerText = newComment;

    // Append the new comment to the container
    commentContainer.appendChild(commentElement);

    // Clear the text area after posting
    commentTextBox.value = '';
});
