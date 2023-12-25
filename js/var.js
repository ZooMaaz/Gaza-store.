// التحكم في جزء الاعدادات
// تقوم بتحريك الاعدادات في الصفحه من اعلي الي اسفل و العكس
// 1

let contentAll = document.querySelector(".color-page");
let iconClick = document.getElementById("icon-click");
let boletsAll = document.querySelectorAll(".colors ul li");
let i = document.getElementById("i");
let iconClick_i = document.querySelector(".settings-icon i ");
let check = true;
let clickYes_no = false;

function move(event) {
if (clickYes_no) {
  iconClick.style.top = event.clientY + "px";
}
}

iconClick.addEventListener("click", () => {
clickYes_no = !clickYes_no; // Toggle the value
});

document.body.addEventListener("mousemove", move);

iconClick.addEventListener("mousedown", function () {
clickYes_no = true;
// console.log("gamal")
});
let io;
document.body.addEventListener("mouseup", function () {
clickYes_no = false;
io = true;
// console.log(clickYes_no + "   up" )
if (io) {
}
iconClick.addEventListener("mouseleave", function () {
  clickYes_no = false;
  // console.log(clickYes_no + "    leave")
});
});
// 1
// عند الضغط علي الاعدادات تقوم بفتح قاءمه الاعدادات
// 2
iconClick.addEventListener("click", () => {
contentAll.style.transition = ".5s";
iconClick.style.transition = ".5s";
iconClick_i.style.transition = "5s";

if (check === true) {
  contentAll.style.left = "0";
  iconClick.style.left = "208px";

  setTimeout(rotateIcon, 450);

  function rotateIcon() {
    iconClick_i.style.animationDuration = "2s";
  }

  check = false;
} else {
  iconClick_i.style.animationDuration = "";
  contentAll.style.left = "-208px";
  iconClick.style.left = "0px";
  check = true;
}
});
// 2
// التحكم في جزء الاعدادات

// تغير اللون و اضافته الي ال local

// اذا كان في local لون يتم استدعاءه و يتم تجزاته الي لونين
// 1

if (window.localStorage.getItem("colorInElement")) {
let d = window.localStorage.getItem("colorInElement");
document.documentElement.style.setProperty(
  "--bg-main",
  `${window.localStorage.getItem("colorInElement")}`
);
document.documentElement.style.setProperty(
  "--bg1",
  `${d.slice(d.indexOf("#"), 30)}`
);
document.documentElement.style.setProperty(
  "--bg2",
  `${d.slice(d.lastIndexOf("#"), -1)}`
);
boletsAll.forEach((el) => {
  el.classList.remove("active");
});
// console.log(document.querySelector(`[data-color="${window.localStorage.getItem("colorInElement")}"]`))
document
  .querySelector(
    `[data-color="${window.localStorage.getItem("colorInElement")}"]`
  )
  .classList.add("active");
}
// 1

// اذا كان لم يكن هنا لون في local لون يتم استدعاءه و يتم تجزاته الي لونين
// 2
boletsAll.forEach((li) => {
li.addEventListener("click", (e) => {
  // console.log(e.currentTarget.dataset.color)
  boletsAll.forEach((el) => {
    el.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
  window.localStorage.setItem(
    "colorInElement",
    e.currentTarget.dataset.color
  );
  let d = window.localStorage.getItem("colorInElement");
  document.documentElement.style.setProperty(
    "--bg1",
    `${d.slice(d.indexOf("#"), 30)}`
  );
  document.documentElement.style.setProperty(
    "--bg2",
    `${d.slice(d.lastIndexOf("#"), -1)}`
  );
  document.documentElement.style.setProperty(
    "--bg-main",
    `${window.localStorage.getItem("colorInElement")}`
  );
});
});
// 2
// تغير اللون و اضافته الي ال local

//  تقوم باظهار منيو فيها الوضع العادي و الداكن وتقوم بتخزين القيمه في ال local
let dark = document.querySelector(".dark");
let ulItems_dark = document.querySelector(".ul-dark");
let choiceMenuItems_dark = document.querySelectorAll(".ul-dark li");
let span = document.querySelector(".content-check span");
let sun_dark = document.querySelector(".content-check .sun");
let moon_dark = document.querySelector(".content-check .moon");
let boxClick = document.querySelector(".content-check");
let angleDown_dark = document.querySelector(".content-check .down-dark");
let logo = document.querySelector(".logo a img");
let checkONAndOff_dark = true;

boxClick.addEventListener("click", () => {
if (checkONAndOff_dark) {
  angleDown_dark.style.transform = "rotate(180deg)";
  dark.style.borderRadius = "5px 5px 0px 0px";
  ulItems_dark.style.maxHeight = "100px";
  checkONAndOff_dark = false;
} else {
  angleDown_dark.style.transform = "rotate(0deg)";
  ulItems_dark.style.maxHeight = "0px";
  setTimeout(borderRadius_close, 300);
  function borderRadius_close() {
    dark.style.borderRadius = "5px";
  }
  checkONAndOff_dark = true;
}
});
// window.localStorage.clear();

function darkMode() {
// start if user click in li colse UL
angleDown_dark.style.transform = "rotate(0deg)";
ulItems_dark.style.maxHeight = "0px";
setTimeout(borderRadius_close, 300);
function borderRadius_close() {
  dark.style.borderRadius = "5px";
}
checkONAndOff_dark = true;
// end if user click in li colse UL
if (window.localStorage.getItem("theme") === "System") {
  document.body.classList.remove(document.body.classList.item(0));
  sun_dark.style.display = "block";
  moon_dark.style.display = "none";
  sun_dark.style.color = "";
} else if (window.localStorage.getItem("theme") === "Ligth") {
  document.body.classList.add(`${window.localStorage.getItem("theme")}`);
  sun_dark.style.display = "block";
  moon_dark.style.display = "none";
  sun_dark.style.color = "#0ea5e9";
} else if (window.localStorage.getItem("theme") === "Dark") {
  document.body.classList.remove(document.body.classList.item(0));
  sun_dark.style.display = "none";
  moon_dark.style.display = "block";
  moon_dark.style.color = "#0ea5e9";
}
span.textContent = window.localStorage.getItem("theme");
}
if (window.localStorage.getItem("theme")) {
choiceMenuItems_dark.forEach((el) => {
  el.classList.remove("active");
});
document
  .querySelector(`[value= "${window.localStorage.getItem("theme")}"]`)
  .classList.add("active");
darkMode();
}
choiceMenuItems_dark.forEach((el) => {
el.addEventListener("click", (e) => {
  choiceMenuItems_dark.forEach((el) => {
    el.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
  window.localStorage.setItem("theme", el.getAttribute("value"));
  darkMode();
});
});
//  تقوم باظهار منيو فيها الوضع العادي و الداكن وتقوم بتخزين القيمه في ال local

// عند الضغط علي نعم يقوم باظهر العناصر و عند الضغط علي لا يقوم باخفاء العناصر
let boletsYes = document.querySelectorAll(".show-bull .yes-no li");

if (window.localStorage.getItem("bolets")) {
boletsYes.forEach((el) => {
  el.classList.remove("active");
});
document
  .querySelector(`[value='${window.localStorage.getItem("bolets")}']`)
  .classList.add("active");
}

boletsYes.forEach((e) => {
e.addEventListener("click", () => {
  boletsYes.forEach((el) => {
    el.classList.remove("active");
  });
  e.classList.add("active");
  window.localStorage.setItem("bolets", e.getAttribute("value"));
});
});
// عند الضغط علي نعم يقوم باظهر العناصر و عند الضغط علي لا يقوم باخفاء العناصر

// عند الضغط علي زر الريسيت يقوم بحذف جميع المحتوي الموجود فب ال local
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
window.localStorage.clear();
location.reload();
console.log("gamal");
setTimeout(w, 450);
function w() {
  contentAll.style.left = "0";
  iconClick.style.left = "208px";
  setTimeout(rotateIcon, 450);
  function rotateIcon() {
    iconClick_i.style.animationDuration = "2s";
  }
  check = false;
}
});
// عند الضغط علي زر الريسيت يقوم بحذف جميع المحتوي الموجود فب ال local

// عند النزول الي الاسفل يقوم باظهار زر الصعود الي الاعلي و عند الضغط عليه يقوم بصعود الي الاعلي
let btnUp = document.getElementById("btn-top");
window.addEventListener("scroll", () => {
if (window.scrollY >= 100) {
  btnUp.style.display = "flex";
  btnUp.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
} else {
  btnUp.style.display = "none";
}
});
// عند النزول الي الاسفل يقوم باظهار زر الصعود الي الاعلي و عند الضغط عليه يقوم بصعود الي الاعلي

// عند عمل reload يقوم بصعود الي الاعلي
window.onload = function () {
window.scrollTo({
  top: 0,
  behavior: "smooth",
});
};
// عند عمل reload يقوم بصعود الي الاعلي
