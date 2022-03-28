let range = document.querySelector("input");

let minutes = document.querySelector(".min");
let seconds = document.querySelector(".sec");

range.addEventListener("input", (e) => {
  // console.log(range.value)
  minutes.innerText = range.value;
});

let secondsCounter = 0;
let minutesCounter = 0;

function countDown() {
  console.log("countDown");
}
