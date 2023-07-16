const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }
    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}
document.addEventListener('DOMContentLoaded', initApp)


// Get the image elements by their IDs
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

// Set the initial state of the images
image1.style.display = 'block';
image2.style.display = 'none';

// Create a function to toggle the images
function toggleImages() {
  if (image1.style.display === 'block') {
    image1.style.display = 'none';
    image2.style.display = 'block';
  } else {
    image1.style.display = 'block';
    image2.style.display = 'none';
  }
}

// Call the toggleImages function every 5 seconds
setInterval(toggleImages, 5000);

        

 