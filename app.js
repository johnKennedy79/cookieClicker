//DOM nodes
const countCookie = document.getElementById("count-cookie");
const cpsDisplay = document.getElementById("cps-display");
const cookieBtn = document.getElementById("cookieBtn");
const x10Btn = document.getElementById("x10");
const x100Btn = document.getElementById("x100");
const handDisplay = document.getElementById("handDisplay");
const hand = document.getElementById("hand");
const monimg = document.querySelector("monimg");
//state variables including recal from local storage
let cookies = localStorage.getItem("countCookie")
  ? parseInt(localStorage.getItem("countCookie"))
  : 0;
countCookie.textContent = cookies;

let cps = localStorage.getItem("cps")
  ? parseInt(localStorage.getItem("cps"))
  : 1;
cpsDisplay.textContent = cps;

let hands = localStorage.getItem("hands")
  ? parseInt(localStorage.getItem("hands"))
  : 1;
handDisplay.textContent = hands;

//func to increase cookie army per secound by cps value
function increaseCookies() {
  cookies += cps;
  countCookie.textContent = cookies;
  localStorage.setItem("countCookie", cookies);
}
// run the function every 1 sec
setInterval(increaseCookies, 1000);
// increase cookies with a click of a button
function clickCookie() {
  cookies++ * hands;
  countCookie.textContent = cookies;
}
//add listener to button
cookieBtn.addEventListener("click", clickCookie);
x10Btn.addEventListener("click", multi10);
hand.addEventListener("click", growAHand);
x100Btn.addEventListener("click", monster);

// TODO Store the number of cookies and cps in local storage
// add local storage set item when returning from local storage get item it returns as a string so you need to parse the value back into an intager or return to 0 if no data stored.

// localStorage.setItem("cps", cps);
// TODO STRETCH GOAL upgrades (buttons) that increase CPS and take away cookies
//ad a function that does not work unles there are more than 100 cookies to deduct from deducts 100 cookies from cookies adds 10 to cps
function multi10() {
  if (cookies < 1000) {
    alert("You do not have enough cookies to buy this yet!");
  } else {
    cookies = cookies - 1000;
    cps = cps + 10;
    cpsDisplay.textContent = cps;
    localStorage.setItem("cps", cps);
  }
}
// add cps value to local storage and recall it
// TODO STRETCH GOAL upgrades (buttons) that increase number of cookies I get per click
function growAHand() {
  if (cookies < 100) {
    alert("You do not have enough cookies to buy this yet!");
  } else {
    cookies = cookies - 100;
    hands = hands + 1;
    handDisplay.textContent = hands;
    localStorage.setItem("hands", hands);
  }
}

function monster() {
  console.log(monster);
  if (cookies < 10000) {
    alert("You do not have enough cookies to buy this yet");
  } else {
    cookies = cookies - 10000;
    cps = cps + 100;
    cpsDisplay.textContent = cps;
    localStorage.setItem("cps", cps);
    monimg.style.animation = "CookieMonster 15s";
    setTimeout(function () {
      cps = cps - 100;
      cpsDisplay.textContent = cps;
      localStorage.setItem("cps", cps);
      monimg.style.animation = "CookieMonster 15s";
    }, 15000);
  }
}

// TODO Make the page look SWEEEEET

// TODO Have fun!
