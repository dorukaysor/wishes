export function playConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.classList.add('confetti');
  document.body.appendChild(confettiContainer);

  // Confetti effect logic
  setTimeout(() => {
    confettiContainer.remove();
  }, 5000);
}

export function fadeIn(element) {
  element.style.opacity = 0;
  element.style.transition = 'opacity 2s ease-in-out';
  setTimeout(() => {
    element.style.opacity = 1;
  }, 100);
}

export function scrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  elements.forEach((el) => {
    const revealPosition = el.getBoundingClientRect().top - window.innerHeight + 150;
    if (revealPosition < 0) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', scrollReveal);