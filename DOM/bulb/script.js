// Selection of elements
const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");

let flag = true;
// using event listner to add interactivity
btn.addEventListener("click", function () {
  if (flag === true) {
    btn.textContent = "OFF";
    bulb.classList.toggle("toggle-bulb");
    flag = false;
  } else {
    btn.textContent = "ON";
    bulb.classList.toggle("toggle-bulb");
    flag = true;
  }
});
