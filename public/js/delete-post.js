const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
      // Collect values from the delete button
    const id = event.target.getAttribute('data-id');

    // Send a POST request to the API endpoint
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);