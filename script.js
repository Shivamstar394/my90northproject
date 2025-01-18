// Toggle the left menu on mobile devices
function toggleMenu() {
    const menu = document.getElementById('leftMenu');
    menu.classList.toggle('show');
  }
  
  // Function to adjust the page scale based on screen width
  function adjustPageScale() {
    const width = window.innerWidth;
  
    let scaleValue;
  
    if (width >= 992 && width <= 1600) {
      scaleValue = 0.9;  // Shrink to 90%
    } else if (width >= 700 && width <= 767) {
      scaleValue = 0.8;  // Shrink to 80%
    } else if (width >= 600 && width <= 699) {
      scaleValue = 0.75; // Shrink to 75%
    } else if (width <= 600) {
      scaleValue = 0.5;  // Shrink to 50%
    } else {
      scaleValue = 1;    // No scaling for larger screens
    }
  
    // Apply the scale transformation to the body element
    document.body.style.transform = `scale(${scaleValue})`;
    document.body.style.transformOrigin = 'top center';
  }
  
  // Adjust the page scale when the window is resized
  window.addEventListener('resize', adjustPageScale);
  
  // Initial call to adjust the scale when the page loads
  adjustPageScale();
  