// Portfolio Data and Functionality
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuToggle && mobileMenuOverlay) {
    mobileMenuToggle.addEventListener('click', function () {
      mobileMenuOverlay.classList.toggle('active');
      document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on overlay
    mobileMenuOverlay.addEventListener('click', function (e) {
      if (e.target === mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close mobile menu when clicking on nav links
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function () {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active navigation link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navigationLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navigationLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);

  // EmailJS Configuration
  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  // Initialize EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  // Contact form functionality
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');

      // Simple form validation
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Check if EmailJS is properly configured
      if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        alert('Email service is not configured. Please set up EmailJS credentials in data.js');
        return;
      }

      // Update button to show sending state
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;

      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;

      // Prepare email data
      const emailData = {
        from_name: name,
        from_email: email,
        to_email: 'kilobyte136@gmail.com',
        subject: subject,
        message: message,
        reply_to: email
      };

      // Send email using EmailJS
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData)
        .then(function (response) {
          console.log('Email sent successfully!', response);
          alert('Thank you for your message! I\'ll get back to you soon.');
          contactForm.reset();
        })
        .catch(function (error) {
          console.error('Email sending failed:', error);
          alert('Sorry, there was an error sending your message. Please try again or contact me directly at kilobyte136@gmail.com');
        })
        .finally(function () {
          // Reset button state
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        });
    });
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.project-card, .about-grid > *, .contact-content > *');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Typing effect for hero section (optional enhancement)
  const typingElement = document.querySelector('.hero-description');
  if (typingElement) {
    const originalText = typingElement.textContent;
    typingElement.textContent = '';

    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        typingElement.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    };

    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
  }

  // Navbar background on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
      } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
      }
    });
  }

  // Smooth reveal animations for sections
  const revealElements = document.querySelectorAll('.section-header, .hero-content');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // Add CSS for reveal animation
  const style = document.createElement('style');
  style.textContent = `
    .section-header, .hero-content {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .section-header.revealed, .hero-content.revealed {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  console.log('Portfolio loaded successfully!');
});

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Performance optimization
window.addEventListener('scroll', debounce(() => {
  // Any scroll-based functionality can be added here
}, 10));
