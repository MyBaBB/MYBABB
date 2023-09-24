 
       /*  // Set the date we're counting down to
        var countDownDate = new Date("oct 22, 2023 00:00:00 UTC").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
   

 */

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

 



        

 