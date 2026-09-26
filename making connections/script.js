console.log("page loaded...");
let icon = document.querySelectorAll(".icon");
let cardItem = document.querySelectorAll(".card-list-item");
let connectionRequistsNumber = document.getElementsByClassName("badge");
const list = document.getElementsByClassName("card-list");
const firstConnection = document.getElementById("firstConnection");
const secodConnection = document.getElementById("secodConnection");
let editUserName = document.querySelector("#edit");
let userName = document.getElementById("user-name");

console.log(userName);

icon[0].addEventListener("click", function removeRequest() {
  cardItem[0].remove();
  connectionRequistsNumber[0].innerHTML =
    Number(connectionRequistsNumber[0].innerHTML) - 1;
  connectionRequistsNumber[1].innerHTML =
    parseInt(connectionRequistsNumber[1].innerHTML) + 1 + "+";

  list[1].appendChild(firstConnection);
  firstConnection.classList.add("fix-addedConnection");
});
icon[1].addEventListener("click", function removeRequest() {
  cardItem[0].remove();
  connectionRequistsNumber[0].innerHTML =
    Number(connectionRequistsNumber[0].innerHTML) - 1;
});
icon[2].addEventListener("click", function removeRequest() {
  cardItem[1].remove();
  connectionRequistsNumber[0].innerHTML =
    Number(connectionRequistsNumber[0].innerHTML) - 1;
  connectionRequistsNumber[1].innerHTML =
    parseInt(connectionRequistsNumber[1].innerHTML) + 1 + "+";
  list[1].appendChild(secodConnection);
  secodConnection.classList.add("fix-addedConnection");
});
icon[3].addEventListener("click", function removeRequest() {
  cardItem[1].remove();
  connectionRequistsNumber[0].innerHTML =
    Number(connectionRequistsNumber[0].innerHTML) - 1;
});

editUserName.addEventListener("click", function changeName() {
  let newNameEntery = document.getElementById("newNameEntery");
  newNameEntery.hidden = false;
  newNameEntery.addEventListener("change", function replace() {
    userName.innerHTML = newNameEntery.value;

    newNameEntery.remove();
  });
});
