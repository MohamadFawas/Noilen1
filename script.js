document.getElementById('showPhotosBtn').addEventListener('click', function() {
    const photoContainer = document.getElementById('photoContainer');
    const message = document.getElementById('message');
    
    // List of photo URLs
    const photos = [
        'Capture8.PNG',
        'Capture2.PNG',
        'Capture7.PNG',
        'Capture3.PNG',
	'Capture9.PNG',
        'Capture5.PNG',
	'Capture10.PNG',
	'g1.PNG',
	'g2.PNG'
    ];

    // Clear any existing photos
    photoContainer.innerHTML = '';

    // Add photos to the container
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        photoContainer.appendChild(img);
    });

    // Display the photo container
    photoContainer.style.display = 'flex';

    // Show message
    message.style.display = 'block';
});
