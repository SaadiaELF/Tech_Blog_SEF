const updateButtonHandler = async (event) => {
  event.preventDefault();

  // Collect values from the edit post form
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  const id = document.querySelector('#updateBtn').getAttribute("value");

  if (title && content) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ id, title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  }
};


document
  .querySelector('.edit-post-form')
  .addEventListener('submit', updateButtonHandler);
