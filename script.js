const images = [
    { src: 'image1.jpg', text: 'Texto romántico 1' }, // Reemplaza con los nombres de tus imágenes y textos
    { src: 'image2.jpg', text: 'Texto romántico 2' },
    { src: 'image3.jpg', text: 'Texto romántico 3' },
    { src: 'image4.jpg', text: 'Texto romántico 4' },
    { src: 'image5.jpg', text: 'Texto romántico 5' }
];

let currentIndex = 0;

document.getElementById('showImageBtn').addEventListener('click', function() {
    if (currentIndex < images.length) {
        document.getElementById('image').src = images[currentIndex].src;
        document.getElementById('imageText').textContent = images[currentIndex].text;
        document.getElementById('imageContainer').classList.remove('hidden');
        currentIndex++;
    } else {
        document.getElementById('imageContainer').classList.add('hidden');
        document.getElementById('finalMessage').classList.remove('hidden');
    }
});
