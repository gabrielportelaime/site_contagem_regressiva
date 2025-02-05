let targetDate = new Date('March 10, 2025 18:00:00').getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (distance < 0) {
        targetDate = new Date().getTime();
        addTime();
    }
}

const interval = setInterval(updateCountdown, 1000);
function addTime() {
    targetDate = targetDate + (45 * 24 * 60 * 60 * 1000);
    updateCountdown();
}
