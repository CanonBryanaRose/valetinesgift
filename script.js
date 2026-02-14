const viewGiftBtn = document.getElementById('viewGiftBtn');
const mainContainer = document.getElementById('mainContainer');
const transitionOverlay = document.getElementById('transitionOverlay');

// Add touch feedback
viewGiftBtn.addEventListener('touchstart', function() {
  this.style.transform = 'scale(0.95)';
});

viewGiftBtn.addEventListener('touchend', function() {
  this.style.transform = 'scale(1)';
});

// Main click handler with smooth transition
viewGiftBtn.addEventListener('click', function(e) {
  // Prevent multiple clicks
  if (viewGiftBtn.disabled) return;
  viewGiftBtn.disabled = true;
  
  // Create star burst effect
  createStarBurst(e);
  
  // Start transition sequence
  setTimeout(() => {
    // Fade out main container
    mainContainer.classList.add('fade-out');
    
    // Show transition overlay
    setTimeout(() => {
      transitionOverlay.classList.add('active');
      
      // Redirect after transition animation
      setTimeout(() => {
        window.location.href = 'roses.html';
      }, 2000);
      
    }, 500);
    
  }, 300);
});

// Star burst effect
function createStarBurst(e) {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  
  for (let i = 0; i < 12; i++) {
    const star = document.createElement('div');
    star.innerHTML = '✨';
    star.style.position = 'fixed';
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.fontSize = '1.5rem';
    star.style.pointerEvents = 'none';
    star.style.zIndex = '1000';
    star.style.transition = 'all 1s ease-out';
    document.body.appendChild(star);
    
    const angle = (i / 12) * Math.PI * 2;
    const distance = 120;
    
    setTimeout(() => {
      star.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1.5)`;
      star.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
      star.remove();
    }, 1000);
  }
}