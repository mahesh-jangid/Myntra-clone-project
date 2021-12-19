var discount = JSON.parse(localStorage.getItem("Discount"));
var total = JSON.parse(localStorage.getItem("TotalSub"));
var total_amt = JSON.parse(localStorage.getItem("TotalMRP")) || [];

var DOM_total = document.querySelector(".total_MRP");
var total_discount = document.querySelector(".total_discount");
var total_amount = document.querySelector(".total_amount");

DOM_total.textContent = total_amt;
total_discount.textContent = discount;
total_amount.textContent = total;

var buy_btn = document.querySelector("button#buy");
console.log(buy_btn);
var back_home_btn = document.querySelector("#apply");
buy_btn.addEventListener("click", function () {
  window.location = "checkout.html";
});
back_home_btn.addEventListener("click", function () {
  window.location = "home.html";
});

function change() {
  var buy_btn = document.querySelector("#buy");
}
