const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const futureDay = document.querySelector(".day");
const futureMnth = document.querySelector(".month");
const futureYr = document.querySelector(".year");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const company = document.querySelector("#company");
const getOnList = document.querySelector("#submit");
const input = document.getElementsByTagName("input");

let inputArr = Array.from(input);
console.log(inputArr);

console.log(input);
console.log(getOnList);

const futureDate = new Date(); // Now
const deadLine = futureDate.setDate(futureDate.getDate() + 30); // Set now + 30 days as the new date
const currentYear = futureDate.getFullYear();

const futureMonth = futureDate.toLocaleString("default", { month: "long" }); // Get the month name from the futureDate
let strMonth = futureMonth.substring(0, 3); // Get the first three characters of the month name
let capStrMonth = strMonth.charAt(0).toUpperCase() + strMonth.slice(1);
const futureDays = futureDate.getDate();

function getTimeRemaining(endtime) {
  const total = deadLine - Date.parse(new Date());
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / 1000 / 60) % 24);
  const seconds = Math.floor((total / 1000) % 60);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

function initializeClock(endtime) {
  const timeInterval = setInterval(() => {
    let time = getTimeRemaining(endtime);
    day.textContent = time.days;
    hour.textContent = time.hours;
    min.textContent = time.minutes;
    sec.textContent = time.seconds;
    futureDay.textContent = futureDays;
    futureMnth.textContent = capStrMonth;
    futureYr.textContent = currentYear;
  });
}

window.onload = function () {
  initializeClock(deadLine);
};

// Form Validation

function Validation() {
  if (name.value === "") {
    input.classList.add("error");
    return;
  }
}

function submitForm(e) {
  e.preventDefault();
}

getOnList.addEventListener("click", submitForm);
