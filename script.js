/* =========================================
   MAIN COLORS
   You can change these later.
========================================= */

:root {

    --background: #080d27;

    --text-main: #ffffff;
    --text-secondary: #c4c7d8;

    --blue: #24bfff;
    --blue-dark: #102d55;

    --purple: #8c5cff;

    --pink: #ff5d83;
    --pink-dark: #321b38;

    --yellow: #ffc400;
    --yellow-dark: #322819;

    --glass: rgba(255, 255, 255, 0.10);

    --border: rgba(255, 255, 255, 0.20);

}


/* =========================================
   BASIC RESET
========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {

    min-height: 100vh;

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    color: var(--text-main);

    background:
        radial-gradient(
            circle at 20% 10%,
            rgba(52, 72, 180, 0.25),
            transparent 35%
        ),

        radial-gradient(
            circle at 90% 30%,
            rgba(120, 50, 160, 0.20),
            transparent 35%
        ),

        linear-gradient(
            145deg,
            #080d25,
            #10183b,
            #080d25
        );

    overflow-x: hidden;
}


/* =========================================
   BACKGROUND GLOW
========================================= */

.background-glow {

    position: fixed;

    width: 300px;
    height: 300px;

    border-radius: 50%;

    filter: blur(100px);

    pointer-events: none;

    opacity: 0.15;

}


.glow-one {

    top: 10%;
    left: -150px;

    background: #286dff;

}


.glow-two {

    right: -150px;
    top: 45%;

    background: #a64dff;

}


/* =========================================
   MAIN CONTAINER
========================================= */

.container {

    width: 100%;

    max-width: 850px;

    margin: auto;

    padding: 28px 20px 60px;

    position: relative;

    z-index: 2;

}


/* =========================================
   HERO CARD
========================================= */

.hero-card {

    width: 100%;

    min-height: 570px;

    padding: 35px 25px 40px;

    display: flex;

    flex-direction: column;

    align-items: center;

    text-align: center;

    border-radius: 38px;

    background:
        linear-gradient(
            145deg,
            rgba(65, 74, 135, 0.45),
            rgba(30, 32, 75, 0.65)
        );

    border: 1px solid rgba(255, 255, 255, 0.20);

    box-shadow:
        0 25px 70px rgba(0, 0, 0, 0.35),
        inset 0 1px 1px rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(15px);

}


/* =========================================
   TITLE BADGE
========================================= */

.title-badge {

    padding: 12px 28px;

    border-radius: 50px;

    background:
        linear-gradient(
            100deg,
            #238cff,
            #8d4dff
        );

    box-shadow:
        0 8px 25px rgba(70, 100, 255, 0.35);

    font-size: 18px;

    font-weight: 800;

    letter-spacing: 0.4px;

}


/* =========================================
   MAIN GREETING
========================================= */

.hero-card h1 {

    margin-top: 38px;

    max-width: 650px;

    font-size: clamp(35px, 7vw, 58px);

    line-height: 1.08;

    font-weight: 800;

    color: #ffffff;

    text-shadow:
        0 3px 20px rgba(20, 180, 255, 0.15);

}


/* =========================================
   DATE
========================================= */

.date {

    margin-top: 22px;

    font-size: 21px;

    color: var(--text-secondary);

}


/* =========================================
   CLOCK
========================================= */

.clock {

    margin-top: 25px;

    font-size: clamp(42px, 9vw, 72px);

    line-height: 1;

    font-weight: 900;

    letter-spacing: 2px;

    color: #ffffff;

    text-shadow:
        0 5px 25px rgba(255, 255, 255, 0.12);

}


/* =========================================
   HERO DESCRIPTION
========================================= */

.hero-description {

    max-width: 600px;

    margin-top: 28px;

    font-size: 19px;

    line-height: 1.4;

    color: var(--text-secondary);

}


/* =========================================
   BUTTON ROW
========================================= */

.button-row {

    margin-top: 28px;

    display: flex;

    justify-content: center;

    align-items: center;

    gap: 18px;

    flex-wrap: wrap;

}


/* =========================================
   GLASS BUTTON
========================================= */

.glass-button {

    min-width: 175px;

    padding: 15px 25px;

    border-radius: 50px;

    border: 1px solid rgba(255, 255, 255, 0.22);

    background:
        rgba(255, 255, 255, 0.10);

    color: #ffffff;

    font-size: 17px;

    font-weight: 700;

    cursor: pointer;

    backdrop-filter: blur(10px);

    transition:
        transform 0.2s ease,
        background 0.2s ease,
        box-shadow 0.2s ease;

}


.glass-button:hover {

    transform: translateY(-3px);

    background:
        rgba(255, 255, 255, 0.17);

    box-shadow:
        0 10px 25px rgba(0, 0, 0, 0.25);

}


.glass-button:active {

    transform: scale(0.96);

}


/* =========================================
   SECTION HUB
========================================= */

.hub-button {

    margin-top: 20px;

    padding: 15px 30px;

    border-radius: 50px;

    border: 1px solid rgba(255, 255, 255, 0.20);

    background:
        rgba(255, 255, 255, 0.09);

    color: #ffffff;

    font-size: 17px;

    font-weight: 700;

    cursor: pointer;

    transition: 0.2s ease;

}


.hub-button:hover {

    background:
        rgba(255, 255, 255, 0.16);

    transform: translateY(-2px);

}


/* =========================================
   TASK SECTION
========================================= */

.tasks-section {

    margin-top: 70px;

    display: flex;

    flex-direction: column;

    gap: 30px;

}


/* =========================================
   GENERAL TASK CARD
========================================= */

.task-card {

    position: relative;

    min-height: 230px;

    padding: 32px 30px;

    border-radius: 38px;

    overflow: hidden;

    border: 2px solid transparent;

    box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.25);

}


/* Left glowing accent */

.task-card::before {

    content: "";

    position: absolute;

    left: 0;
    top: 0;

    width: 9px;
    height: 100%;

}


/* =========================================
   BLUE CARD
========================================= */

.blue-card {

    background:
        linear-gradient(
            120deg,
            rgba(18, 55, 100, 0.95),
            rgba(10, 35, 70, 0.85)
        );

    border-color:
        rgba(36, 191, 255, 0.65);

    box-shadow:
        0 15px 45px rgba(0, 150, 255, 0.10);

}


.blue-card::before {

    background: var(--blue);

    box-shadow:
        0 0 20px var(--blue);

}


/* =========================================
   PINK CARD
========================================= */

.pink-card {

    background:
        linear-gradient(
            120deg,
            rgba(58, 27, 60, 0.95),
            rgba(43, 25, 55, 0.90)
        );

    border-color:
        rgba(255, 85, 125, 0.65);

}


.pink-card::before {

    background: var(--pink);

    box-shadow:
        0 0 20px var(--pink);

}


/* =========================================
   YELLOW CARD
========================================= */

.yellow-card {

    background:
        linear-gradient(
            120deg,
            rgba(60, 45, 22, 0.90),
            rgba(36, 29, 27, 0.90)
        );

    border-color:
        rgba(255, 196, 0, 0.65);

}


.yellow-card::before {

    background: var(--yellow);

    box-shadow:
        0 0 20px var(--yellow);

}


/* =========================================
   CARD CONTENT
========================================= */

.card-content {

    padding-left: 5px;

}


.card-content h2 {

    font-size: 21px;

    letter-spacing: 1px;

    font-weight: 800;

    color: #ffffff;

}


/* =========================================
   BIG NUMBER
========================================= */

.task-number {

    margin-top: 18px;

    font-size: 58px;

    line-height: 1;

    font-weight: 900;

}


.blue-card .task-number {
    color: #36c8ff;
}


.pink-card .task-number {
    color: #ff7897;
}


.yellow-card .task-number {
    color: #ffd22e;
}


/* =========================================
   CARD DESCRIPTION
========================================= */

.card-content p {

    margin-top: 18px;

    max-width: 650px;

    font-size: 19px;

    line-height: 1.45;

    font-weight: 600;

    color: #e1e3eb;

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {

    .container {

        padding:
            20px 18px 50px;

    }


    .hero-card {

        min-height: 0;

        padding:
            30px 18px 35px;

        border-radius: 32px;

    }


    .title-badge {

        font-size: 16px;

        padding:
            11px 20px;

    }


    .hero-card h1 {

        margin-top: 30px;

        font-size: 37px;

    }


    .date {

        font-size: 18px;

        margin-top: 20px;

    }


    .clock {

        font-size: 45px;

        letter-spacing: 1px;

        margin-top: 25px;

        white-space: nowrap;

    }


    .hero-description {

        font-size: 17px;

        margin-top: 25px;

    }


    .button-row {

        width: 100%;

        gap: 12px;

    }


    .glass-button {

        min-width: 145px;

        padding:
            13px 17px;

        font-size: 15px;

    }


    .hub-button {

        font-size: 15px;

        padding:
            13px 23px;

    }


    .tasks-section {

        margin-top: 40px;

        gap: 25px;

    }


    .task-card {

        min-height: 210px;

        padding:
            28px 24px;

        border-radius: 32px;

    }


    .card-content h2 {

        font-size: 18px;

    }


    .task-number {

        font-size: 52px;

    }


    .card-content p {

        font-size: 17px;

    }

}


/* =========================================
   VERY SMALL PHONES
========================================= */

@media (max-width: 360px) {

    .hero-card h1 {

        font-size: 32px;

    }


    .clock {

        font-size: 38px;

    }


    .glass-button {

        min-width: 130px;

        font-size: 14px;

    }

}
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
