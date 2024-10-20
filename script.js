// Function to display the current time
function showCurrentTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    timeElement.textContent = `The current time is: ${currentTime}`;
}

// Update the time every second
setInterval(showCurrentTime, 1000);

// Call the function once when the page loads
showCurrentTime();
