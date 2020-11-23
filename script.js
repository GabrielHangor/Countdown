const input = document.querySelector("#input-container");
const countdownForm = document.querySelector("#countdownForm");
const dateEl = document.querySelector("#date-picker");
let countdownTitle = '';
let countdownDate = '';



// Set Date Input Min with Today's Date (YMD);
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

function updateCountdown(e) {
countdownTitle = e.srcElement[0].value;
countdownDate = e.srcElement[1].value;



e.preventDefault();
}

// Event Listeners 
countdownForm.addEventListener('submit', updateCountdown);

