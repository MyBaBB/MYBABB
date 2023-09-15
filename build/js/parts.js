


const downArrow = document.querySelectorAll('.downArrow');

downArrow.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'translateY(10px)';
    window.scrollBy({
      top: 50000,
      behavior: 'smooth'
    });
  });
  
  item.addEventListener('mouseout', () => {
    item.style.transform = '';
  });
  
});

const upArrow = document.querySelectorAll('.upArrow');

upArrow.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'translateY(-10px)';
    window.scrollBy({
      top: -50000,
      behavior: 'smooth',
      // Increase duration to slow down scroll speed
    });
  });
  
  item.addEventListener('mouseout', () => {
    item.style.transform = '';
  });

});

 



        

 