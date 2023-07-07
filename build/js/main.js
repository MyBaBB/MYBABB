




// Set the countdown time to 2 minutes (in seconds)
var countdownTime = 40;

// Get the element where the countdown timer will be displayed
var countdownElement = document.createElement('div');
countdownElement.style.position = 'fixed';
countdownElement.style.top = '10px';
countdownElement.style.right = '10px';
countdownElement.style.fontSize = '24px';
countdownElement.style.color = 'white';
document.body.appendChild(countdownElement);

// Update the countdown timer every second
var countdownInterval = setInterval(function() {
    countdownTime--;
    var minutes = Math.floor(countdownTime / 60);
    var seconds = countdownTime % 60;
    countdownElement.innerHTML = 'Time left: ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    if (countdownTime <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = 'Time is up!';
    }
}, 1000);

 
