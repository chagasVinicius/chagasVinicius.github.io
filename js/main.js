// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Simple form submission handling
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      contactForm.reset();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
}

// Blog post interaction
document.querySelectorAll('.blog-card').forEach(card => {
  card.addEventListener('click', function (e) {
    if (!e.target.closest('.read-more')) {
      const link = this.querySelector('.read-more').href;
      window.location.href = link;
    }
  });
});

