document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentImageIndex = 0;

    // Function to display a specific image
    function showImage(index) {
        // Hide all images
        images.forEach(img => img.classList.remove('active'));
        // Show the image at the current index
        images[index].classList.add('active');
    }

    // Function to show the next image
    function showNextImage() {
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0; // Loop back to the first image
        }
        showImage(currentImageIndex);
    }

    // Function to show the previous image
    function showPrevImage() {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1; // Loop back to the last image
        }
        showImage(currentImageIndex);
    }

    // Event listeners for buttons
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    // Initialize by showing the first image
    showImage(currentImageIndex);
});