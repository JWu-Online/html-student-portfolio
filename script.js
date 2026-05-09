// Tab navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');

      // Hide all tab contents
      tabContents.forEach(content => {
        content.classList.remove('active');
      });

      // Remove active class from all buttons
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
      });

      // Show selected tab content
      document.getElementById(tabName).classList.add('active');

      // Add active class to clicked button
      this.classList.add('active');
    });
  });

  // Gallery modal functionality
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeButton = document.querySelector('.close-button');
  const galleryImages = document.querySelectorAll('.gallery-image');

  // Open modal when gallery image is clicked
  galleryImages.forEach(image => {
    image.addEventListener('click', function() {
      modal.style.display = 'flex';
      modalImage.src = this.src;
    });
  });

  // Close modal when close button is clicked
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside the image
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });
});