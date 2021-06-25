const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const futureDay = document.querySelector(".day");
const futureMnth = document.querySelector(".month");
const futureYr = document.querySelector(".year");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const company = document.querySelector("#company");
const submitBtn = document.querySelector("#submit-btn");
console.log(email);

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

// Validate form
function validateForm() {
  // Validate Name
  if (fullName.value.trim() === "") {
    fullName.classList.add("error");
    return;
  } else if (!/^[A-Z]+$/i.test(fullName.value)) {
    fullName.classList.add("error");
    return;
  } else {
    fullName.classList.remove("error");
  }
  // Validate email
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value === "") {
    email.classList.add("error");
    return;
  // } else if (!re.test(String(email.value).toLowerCase())) {
  //   email.classList.add("error");
  //   return;
  }
}

function submitForm(e) {
  e.preventDefault();
  validateForm();
}

submitBtn.addEventListener("click", submitForm);
