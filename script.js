// Image gallery functionality
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']; // Replace these with actual image paths
let currentIndex = 0;
const imgElement = document.querySelector('.gallery-img');

// Function to show the current image
function showImage() {
  imgElement.src = images[currentIndex];
}

// Function to show the next image
function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage();
}

// Function to show the previous image
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage();
}

// Initially show the first image
showImage();
