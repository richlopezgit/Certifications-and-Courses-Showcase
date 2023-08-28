// Example JavaScript
const certificates = document.querySelectorAll('.certificate-item');
const modal = document.getElementById('certificate-modal');
const modalImage = document.getElementById('modal-image');
const closeModalBtn = document.getElementById('close-modal-btn');

certificates.forEach(certificate => {
  certificate.addEventListener('click', () => {
    modalImage.src = certificate.querySelector('img').src;
    modal.style.display = 'block';
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});