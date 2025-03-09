
document.addEventListener('DOMContentLoaded', function() {
  // Tab Switching Logic
  const tabButtons = document.querySelectorAll('.tab-button');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all tabs
      tabButtons.forEach(tab => tab.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
    });
  });
  
  // Animate items when page loads
  const animateItems = document.querySelectorAll('.glass-card');
  
  animateItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Add click effect to buttons
  const buttons = document.querySelectorAll('.button, .icon-button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 100);
    });
  });
  
  // Highlight active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.sidebar-link');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
