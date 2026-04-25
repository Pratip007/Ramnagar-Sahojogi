// main.js

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar with Glassmorphism
  const navbar = document.getElementById('navbar');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check on load

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinksContainer.classList.toggle('nav-active');
    });

    // Close menu when a link is clicked
    const links = navLinksContainer.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinksContainer.classList.remove('nav-active');
      });
    });
  }

  // Active Link Highlighting based on current page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    // Remove active class from all
    link.classList.remove('active');
    // Add to current
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath) {
      link.classList.add('active');
    }
  });

  // Scroll Reveal Animations with smooth cubic-bezier
  const revealElements = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150; // Trigger slightly earlier for smoother experience

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      }
    });
  };

  // Trigger once on load
  revealOnScroll();
  
  // Trigger on scroll
  window.addEventListener('scroll', revealOnScroll);
});
