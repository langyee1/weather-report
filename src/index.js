"use strict"

const state = {
    crabCount: 0,
};

console.log('Hello, World!');

const getCurrentTime = () => {
    const currentDate = new Date();
    return currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}

console.log(`The current time is ${getCurrentTime()}.`);
const appearanceHeading = document.getElementById("facts__heading");
appearanceHeading.textContent = "Qualities and Traits of a Crab";

const importantFact = document.getElementById("facts__fact--important");
importantFact.className = `${importantFact.className} highlight`;

const newAppearanceFact = document.createElement("li");
newAppearanceFact.textContent = "covered in sand (when on a sandy beach)";

const appearanceList = document.getElementById("facts__list");
appearanceList.appendChild(newAppearanceFact);

const addCrab = (event) => {
    console.log("in addCrab:", event);
    const newCrab = document.createElement("span");
    const crabContainer = document.querySelector("#crabContainer");
    newCrab.textContent = "🦀";
    crabContainer.appendChild(newCrab);
    state.crabCount += 1;
    const crabCountContainer = document.querySelector("#crabCount")
    crabCountContainer.textContent = `Crab Count: ${state.crabCount}`;
};



const dark = () => {
    document.body.classList.toggle('dark-mode');
}

const registerEventHandlers = (event) => {
    console.log("in registerEventHandlers:", event);
    const crabButton = document.querySelector("#addCrabButton");
    crabButton.addEventListener("click", addCrab);
    const toggleModeButton = document.getElementById('toggle-mode');
    toggleModeButton.addEventListener('click', dark);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

let cityName = 'fff';






