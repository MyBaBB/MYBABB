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

 
          const images = document.querySelectorAll('img');
          let index = 0;

          function changeImage() {
            images[index].style.opacity = 0;
            index = (index + 1) % images.length;
            images[index].style.opacity = 1;
          }

          setInterval(changeImage, 10000);
        

 