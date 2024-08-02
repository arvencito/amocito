const images = [
    'image1.jpg', // Reemplaza con los nombres de tus imágenes
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
];

let currentIndex = 0;

document.getElementById('showImageBtn').addEventListener('click', function() {
    if (currentIndex < images.length) {
        document.getElementById('image').src = images[currentIndex];
        document.getElementById('imageContainer').classList.remove('hidden');
        currentIndex++;
    } else {
        document.getElementById('imageContainer').classList.add('hidden');
        document.getElementById('finalMessage').classList.remove('hidden');
    }
});