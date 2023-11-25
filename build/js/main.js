/* const url = 'https://mybabb.com/data.json';
const responsePromise = fetch(url).then((response) => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const responseToCache = response.clone();
  caches.open(cacheName).then((cache) => {
    cache.put(url, responseToCache);
  });
  return response;
}).catch((error) => {
  console.error('Error fetching data:', error);
}); */

    
 
 
    // Set the date we're counting down to
    var countDownDate = new Date("dec 25, 2023 00:00:00 PST").getTime();

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
        document.getElementById("demo").innerHTML = days + "-days " + hours + ":"
        var minutesStr = minutes < 10 ? "0" + minutes : minutes;
        var secondsStr = seconds < 10 ? "0" + seconds : seconds;
        document.getElementById("demo").innerHTML = days + "-days " + hours + ":" + minutesStr + ": " + secondsStr + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "<span style='color:rgba(235, 156, 10, 1); text-shadow: .5px .5px 0 #000; font-size: 2.75rem;'><b>....Everyone</b></span>";
        }
    }, 1000);
