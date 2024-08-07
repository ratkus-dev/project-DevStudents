//smooth scroll
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (let link of links) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
});

//mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobMenu = document.getElementById('mobMenu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  mobMenu.classList.toggle('is-open');
});
