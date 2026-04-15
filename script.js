const startDate = new Date("2014-06-25T00:00:00");
const releaseDate = null;

function updateCounter() {
  const now = new Date();

  let answer = "NO";

  if (releaseDate && now >= releaseDate) {
    answer = "YES";
  }

  document.getElementById("answer").textContent = answer;

  let diff = now - startDate;

  let totalSeconds = Math.floor(diff / 1000);

  let years = Math.floor(totalSeconds / (365.25 * 24 * 60 * 60));
  totalSeconds -= years * 365.25 * 24 * 60 * 60;

  let months = Math.floor(totalSeconds / (30.44 * 24 * 60 * 60));
  totalSeconds -= months * 30.44 * 24 * 60 * 60;

  let weeks = Math.floor(totalSeconds / (7 * 24 * 60 * 60));
  totalSeconds -= weeks * 7 * 24 * 60 * 60;

  let days = Math.floor(totalSeconds / (24 * 60 * 60));
  totalSeconds -= days * 24 * 60 * 60;

  let hours = Math.floor(totalSeconds / (60 * 60));
  totalSeconds -= hours * 60 * 60;

  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);

  document.getElementById("counter").innerHTML = `
    <div class="timer__unit"><span class="timer__value">${years}</span><span class="timer__label">YEARS</span></div>
    <div class="timer__unit"><span class="timer__value">${months}</span><span class="timer__label">MONTHS</span></div>
    <div class="timer__unit"><span class="timer__value">${weeks}</span><span class="timer__label">WEEKS</span></div>
    <div class="timer__unit"><span class="timer__value">${days}</span><span class="timer__label">DAYS</span></div>
    <div class="timer__unit"><span class="timer__value">${hours}</span><span class="timer__label">HOURS</span></div>
    <div class="timer__unit"><span class="timer__value">${minutes}</span><span class="timer__label">MINUTES</span></div>
    <div class="timer__unit"><span class="timer__value">${seconds}</span><span class="timer__label">SECONDS</span></div>
  `;
}

updateCounter();
setInterval(updateCounter, 1000);
