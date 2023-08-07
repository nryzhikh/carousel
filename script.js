const allImages = [
    'img1.jpg',
    'img2.jpeg',
    'img3.jpeg',
    'img4.jpeg',
    'img5.jpeg',
    'img7.jpeg',
    'img8.jpeg',
    'img9.jpeg'];

let currentImageCounter = 0;
const currentImageContainer = document.getElementById('current-image');

function showActiveImage() {
    currentImageContainer.innerHTML = `<img src="${allImages[currentImageCounter]}" alt="image">`;
}

const previousImagesContainer = document.getElementById('previous-images');
const nextImagesContainer = document.getElementById('next-images');

function showPreviousImages() {
    previousImagesContainer.innerHTML = '';
    for (let i = currentImageCounter - 1; i >= 0; i--) {
        previousImagesContainer.innerHTML += '<img src="' + allImages[i] + '" alt="image">';
    };

 
}

function showNextImages() {
    nextImagesContainer.innerHTML = '';
    for (let i = currentImageCounter + 1; i < allImages.length; i++) {
        nextImagesContainer.innerHTML += '<img src="' + allImages[i] + '" alt="image">'
    };
}

function nextImage() {
    if (currentImageCounter < allImages.length - 1) {
        currentImageCounter++;
    } else {
        currentImageCounter = 0;
    };
};

function previousImage() {
    if (currentImageCounter > 0) {
        currentImageCounter--;
    } else {
        currentImageCounter = allImages.length - 1;
    };
};


document.getElementById('next').addEventListener('click', function () {
    nextImage();
    showActiveImage();
    showPreviousImages();
    showNextImages();
});

document.getElementById('prev').addEventListener('click', function () {
    previousImage();
    showActiveImage();
    showPreviousImages();
    showNextImages();
});


showActiveImage();
showPreviousImages();
showNextImages();

