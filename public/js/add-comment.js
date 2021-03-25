const commentHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#comment').value.trim();
  const post_id = document.querySelector('#submitBtn').getAttribute("value");

  if (content, post_id) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({content, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create a comment');
    }
  }
};


document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentHandler);
