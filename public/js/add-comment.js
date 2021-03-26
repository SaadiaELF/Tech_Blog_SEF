const commentHandler = async (event) => {
  event.preventDefault();

  // Collect values from the new comment form
  const content = document.querySelector('#comment').value.trim();
  const post_id = document.querySelector('#submitBtn').getAttribute("value");

  if (content, post_id) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, refresh the page
      document.location.replace(`/post/${post_id}`);
    } else {
      alert('Failed to create a comment');
    }
  }
};


document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentHandler);
