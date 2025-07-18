// Toggle menu
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById('menu');
  const nav = document.querySelector('.navigation');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.textContent = nav.classList.contains('open') ? 'X' : '☰';
  });

  // Footer Year
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent =
    `Last Modified: ${document.lastModified}`;
});