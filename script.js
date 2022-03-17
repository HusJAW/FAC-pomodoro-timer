let range = document.querySelector("input");

let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

range.addEventListener("input", (e) => {
  // console.log(range.value)
  min.innerText = range.value;
});

let secCounter = 0;
let minCounter = 0;

function countDown() {
  console.log("countDown");
}
