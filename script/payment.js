var buy_btn = document.querySelector("#buy");
var back_home_btn = document.querySelector("#apply");
buy_btn.addEventListener("click", function () {
  window.location = "checkout.html";
});
back_home_btn.addEventListener("click", function () {
  window.location = "home.html";
});
