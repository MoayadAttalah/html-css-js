// this works with onclick="like(id of the span i want to change the number of)" inside html
// function like(para) {
//   let likesNumber = document.getElementById(para);
//   let a = Number(likesNumber.innerText) + 1;
//   likesNumber.innerHTML = a;
// }

// onclick="like(this)"  inside html
function like(para) {
  let likesNumber = document.querySelectorAll(".numberOfLikes");
  let index;
  if (para.id == "btn0") {
    index = 0;
  } else if (para.id == "btn1") {
    index = 1;
  } else {
    index = 2;
  }
  likesNumber[index].innerHTML = Number(likesNumber[index].innerHTML) + 1;
}
