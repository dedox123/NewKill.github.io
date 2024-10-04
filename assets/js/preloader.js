document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preloader');
  const spinner = preloader.querySelector('.spinner');

  setTimeout(() => {
    preloader.classList.add('fade-out');
    spinner.style.display = 'none';
  }, 1000);
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 200);
});
