document.getElementById('showPhotosBtn').addEventListener('click', function() {
    const photoContainer = document.getElementById('photoContainer');
    const message = document.getElementById('message');
    const userName = document.getElementById('userName');
    const nameInput = document.getElementById('nameInput').value;

    // List of photo URLs
    const photos = [
        'h1.jfif',
        'h2.jfif',
        'h3.jfif',
        'h4.jfif'
    ];

    // Clear any existing photos
    photoContainer.innerHTML = '';

    // Add photos to the container
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        img.classList.add('photo'); // Add a class to control styling if needed
        photoContainer.appendChild(img);
    });

    // Display the photo container
    photoContainer.style.display = 'flex';

    // Set the user's name in the message
    userName.textContent = nameInput ? nameInput : "you"; // Default to "you" if no name is provided

    // Show message
    message.style.display = 'block';
});
