function load() {
  alert("Loading weather report...");
}

function acceptCookie() {
  let cookie = document.getElementById("foot");
  cookie.remove();
}

let maxTemprature = document.querySelectorAll(".max-temp");
let minTemprature = document.querySelectorAll(".min-temp");



function convertTemprature(para) {
  
  let maxtemp = [];
  let mintemp = [];

  if (para.value == "Fahrenheit") {
    for (let i = 0; i <= 3; i++) {
      maxtemp[i] = parseInt(maxTemprature[i].innerHTML);

      maxTemprature[i].innerHTML = Math.round(((9 / 5) * maxtemp[i] + 32));
      mintemp[i] = parseInt(minTemprature[i].innerHTML);

      minTemprature[i].innerHTML =  Math.round(((9 / 5) * mintemp[i] + 32));
    }
  }
  else{
    for (let i = 0; i <= 3; i++) {
      maxTemprature[i].innerHTML =FtoC( maxTemprature[i].innerHTML)
      minTemprature[i].innerHTML = FtoC( minTemprature[i].innerHTML)
      
      

    }

  }
}


function FtoC(element) {
    element=Number(element)
    let x=(element-32)*(5/9);
    return Math.round(x).toString()


}