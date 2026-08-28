/* =========================================
   LIVE CLOCK
========================================= */

function updateClock() {

    const clock = document.getElementById("clock");

    const now = new Date();

    let hours = now.getHours();

    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    hours = String(hours).padStart(2, "0");

    clock.textContent =
        `${hours}:${minutes}:${seconds} ${period}`;
}


/* Update every second */

updateClock();

setInterval(updateClock, 1000);


/* =========================================
   SWITCH THEME
========================================= */

const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

});


/* =========================================
   VIEW TASKS BUTTON
========================================= */

const tasksButton =
    document.getElementById("tasksButton");

const taskList =
    document.getElementById("taskList");

tasksButton.addEventListener("click", function () {

    taskList.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================================
   SECTION HUB BUTTON
========================================= */

const hubButton =
    document.getElementById("hubButton");

hubButton.addEventListener("click", function () {

    alert("Section Hub is not connected yet.");

});
