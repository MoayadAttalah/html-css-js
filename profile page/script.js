let a = document.getElementById("connection-requists-one");
let b = document.getElementById("connection-requists-two");
let c = document.querySelector("#user-name");
let d = document.querySelector("#UserNameInput");
let e = document.getElementById("number");

function removeOne() {
  a.remove();
  reduce();
}

function removeTwo() {
  b.remove();
  reduce();
}

function editUserName() {
  d.style.visibility = "visible";
}
d.addEventListener("change", function reName() {
  console.log(d.value);
  c.innerHTML = d.value;
  d.style.visibility = "hidden";
});

function reduce() {
  let f = +e.innerText;
  f--;
  e.innerHTML = f;
}
