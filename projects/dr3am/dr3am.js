document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const count = carousel.querySelector('.slide-count');
  let current = 0;
  const update = () => {
    track.style.transform = `translateX(-${current * 100}%)`;
    count.textContent = `${current + 1} / ${slides.length}`;
  };
  carousel.querySelectorAll('.carousel-button').forEach(button => button.addEventListener('click', () => {
    current = button.dataset.direction === 'next' ? (current + 1) % slides.length : (current - 1 + slides.length) % slides.length;
    update();
  }));
});
