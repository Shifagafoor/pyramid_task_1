const draw_button = document.querySelector(".draw");
const display_output = document.querySelector(".display_output");
const start_button = document.querySelector(".start");
const stop_button = document.querySelector(".stop");
const restart_button = document.querySelector(".restart");
const colors = document.querySelector(".color");

let delay;
let selectedColor = null;

colors.addEventListener("input", (event) => {
  selectedColor = event.target.value;
  console.log(selectedColor);
});

let animationTimeouts = [];
let lastActiveIndex = -1; 
draw_button.addEventListener("click", () => {
  const numRows = parseInt(document.querySelector(".pyramid .input").value);

  display_output.innerHTML = "";
  for (let i = 1; i <= numRows; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "rowDiv");

    for (let j = 0; j < i; j++) {
      const circle = document.createElement("div");
      circle.setAttribute("class", "circle");

      rowDiv.appendChild(circle);
    }

    display_output.appendChild(rowDiv);
  }

  lastActiveIndex = -1;
  animationTimeouts = [];
});

start_button.addEventListener("click", () => {
  start_button.disabled = true;
  stop_button.disabled = false;

  const rows = display_output.querySelectorAll(".rowDiv");
  delay = parseInt(document.querySelector(".delay-input .input").value);

  for (let i = Math.max(0, lastActiveIndex); i < rows.length; i++) {
    const row = rows[i];

    const timeouta = setTimeout(() => {
      row.classList.add("active");
      lastActiveIndex = i; 
    }, (i - lastActiveIndex) * delay);

    const timeout = setTimeout(() => {
        row.style.opacity = 1;
      row.classList.remove("active");
    }, (i - lastActiveIndex) * delay + delay);

    animationTimeouts.push(timeouta);
    animationTimeouts.push(timeout);
  }
});

stop_button.addEventListener("click", () => {
  start_button.disabled = false;
  stop_button.disabled = true;

  animationTimeouts.forEach((timeout) => clearTimeout(timeout));
  animationTimeouts = [];
});

restart_button.addEventListener("click", () => {
  start_button.disabled = false;
  stop_button.disabled = true;

  display_output.innerHTML = "";
  lastActiveIndex = -1; 
  animationTimeouts = [];
});