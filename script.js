(function () {
    // Get references to the start, stop, and reset buttons and the hour, minute, and second elements in the HTML page
    var startButton = document.getElementById('start');
    var stopButton = document.getElementById('stop');
    var resetButton = document.getElementById('reset');
    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');
    var millisecond = document.getElementById('millisecond')

    // Initialize variables to keep track of whether the stopwatch is currently running and the ID of the setInterval timer
    var isRunning = false;
    var interval;

    // This function increments the time by one 20 millisecond and updates the hour, minute, and second elements on the page
    let incrementTime = () => {
        // Parse the current values of the hour, minute, and second elements as integers
        let ms = Number.parseInt(millisecond.innerHTML) + 20,
            s = Number.parseInt(second.innerHTML),
            m = Number.parseInt(minute.innerHTML),
            h = Number.parseInt(hour.innerHTML);
        // Check if the millisecond value has rolled over to 1000, and increment the second value if so
        if (ms == 1000) {
            ms = 0; s++;
        }
        // Check if the second value has rolled over to 60, and increment the minute value if so
        if (s == 60) {
            s = 0; m++;
        }
        // Check if the minute value has rolled over to 60, and increment the hour value if so
        if (m == 60) {
            m = 0; h++;
        }
        // Update the millisecond/second/minute/hour element with the new value, padding with a leading '0' if necessary
        millisecond.innerHTML = ms < 100 ? (ms < 10 ? `00${ms}` : `0${ms}`) : ms;
        second.innerHTML = s < 10 ? `0${s}` : s;
        minute.innerHTML = m < 10 ? `0${m}` : m;
        hour.innerHTML = h < 10 ? `0${h}` : h;
    }

    // This function starts the stopwatch by setting isRunning to true and calling setInterval to run incrementTime every second
    let startWatch = () => {
        if (!isRunning) {
            isRunning = true;
            interval = setInterval(incrementTime, 20);
        }
    }


    // This function stops the stopwatch by setting isRunning to false and clearing the interval returned by setInterval
    let stopWatch = () => {
        if (isRunning) {
            isRunning = false;
            clearInterval(interval);
        }
    }

    // This function resets the stopwatch to 00:00:00 by setting the hour, minute, and second elements to '00' and stopping the stopwatch if it is running
    let resetWatch = () => {
        millisecond.innerHTML = '000';
        hour.innerHTML = '00';
        minute.innerHTML = '00';
        second.innerHTML = '00';
        if (isRunning) {
            isRunning = false;
            clearInterval(interval);
        }
    }
    // Set up the startButton to call startWatch when clicked
    startButton.addEventListener('click', startWatch);
    // Set up the stopButton to call stopWatch when clicked
    stopButton.addEventListener('click', stopWatch);
    // Set up the resetButton to call resetWatch when clicked
    resetButton.addEventListener('click', resetWatch);
})();