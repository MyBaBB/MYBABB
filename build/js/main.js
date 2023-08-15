const password = 'password';
function passcheck() {
 if (document.getElementById('pass1').value != password) {
alert('🎣stop fishing🎣'); 
return false;
} 
 if (document.getElementById('pass1').value == password) {
alert('Correct Password, Ok to enter Webpage.')
}
}



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
setInterval(toggleImages, 4000);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

// Get the image elements by their IDs
const imageAlt1 = document.getElementById('imageAlt1');
const imageAlt2 = document.getElementById('imageAlt2');

// Set the initial state of the images
imageAlt1.style.display = 'block';
imageAlt2.style.display = 'none';

// Create a function to toggle the images
function toggleImagesAlt() {
  if (imageAlt1.style.display === 'block') {
    imageAlt1.style.display = 'none';
    imageAlt2.style.display = 'block';
  } else {
    imageAlt1.style.display = 'block';
    imageAlt2.style.display = 'none';
  }
}

// Call the toggleImages function every 5 seconds
setInterval(toggleImagesAlt, 2000);
// Get the image elements by their IDs
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */


const imageAlt3 = document.getElementById('imageAlt3');
const imageAlt4 = document.getElementById('imageAlt4');

// Set the initial state of the images
imageAlt3.style.display = 'block';
imageAlt4.style.display = 'none';

// Create a function to toggle the images
function toggleImagesAlt2() {
  if (imageAlt3.style.display === 'block') {
    imageAlt3.style.display = 'none';
    imageAlt4.style.display = 'block';
  } else {
    imageAlt3.style.display = 'block';
    imageAlt4.style.display = 'none';
  }
}

// Call the toggleImages function every 5 seconds
setInterval(toggleImagesAlt2, 4000);

        

 