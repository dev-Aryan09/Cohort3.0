const main = document.querySelector("main");
const box = document.querySelector(".box");
const btn = document.querySelector("button");
const timer = document.querySelector("#timer");

let time = 0;
let interval;
btn.addEventListener("click", (e) => {
  clearInterval(interval);

  interval = setInterval(() => {
    time += 1;
    timer.textContent = time;

    const rY = Math.ceil(Math.random() * 101);
    const rX = Math.ceil(Math.random() * 101);

    box.style.top = `${rY}%`;
    box.style.left = `${rX}%`;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
});
