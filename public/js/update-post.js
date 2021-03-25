const updateButtonHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  const id =document.querySelector('#updateBtn').getAttribute("value");

  if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ id, title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  }
};


document
  .querySelector('.edit-post-form')
  .addEventListener('submit', updateButtonHandler);
