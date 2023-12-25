let eyeSlash = document.getElementById("no-show");
let eye = document.getElementById("show");
let uName = document.getElementById("u-name");
let pass = document.getElementById("pass");
let submit = document.querySelector(".all-cnt-login .btn");
let p_uName = document.querySelector("p.u-name");
let p_pass = document.querySelector("p.pass");
let pass_ = document.querySelector(".remember-forgot");

window.onload = function () {
  uName.focus();
}

// دي التحقق من ان الفورم لا يكون فيها اي حقل فارغ

submit.onclick = function (e) {
  let validPass = false;
  let validUName = false;
  if (uName.value.length > 0) {
    validUName = true;
    pass.style.colcr = "red";
    p_uName.style.maxHeight = "0px";
    // p_uName.style.display = "none";
  } else {
    p_uName.style.maxHeight = "52px";
    // p_uName.style.display = "block";
  }
  if (pass.value.length > 8 && pass.value.length <= 12) {
    p_pass.style.maxHeight = "0px";
    pass_.style.top = "";
    validPass = true;
  } else {
    p_pass.style.maxHeight = "52px";
    pass_.style.top = "-3px";
  }
  if (validUName === false || validPass === false) {
    e.preventDefault();
  }
}
// دي التحقق من ان الفورم لا يكون فيها اي حقل فارغ


// دي لكشف كلمه السر و اخفاءها
eyeSlash.addEventListener("click", () => {
  eyeSlash.style.opacity = "0";
  eyeSlash.style.zIndex = "-1";
  eye.style.zIndex = "0";
  eye.style.opacity = "1";
  pass.type = "text";
});
eye.addEventListener("click", () => {
  eyeSlash.style.zIndex = "0";
  eye.style.zIndex = "-1";
  eye.style.opacity = "0";
  eyeSlash.style.opacity = "1";
  pass.type = "password";
});
// دي لكشف كلمه السر و اخفاءها
