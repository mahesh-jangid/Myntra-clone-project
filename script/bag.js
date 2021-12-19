var AllbagProdArray = JSON.parse(localStorage.getItem("AllBagItems")) || [];

DisplayBagData(AllbagProdArray);
function DisplayBagData(AllbagProdArray) {
  document.querySelector(".bag_prod").innerHTML = "";
  AllbagProdArray.map(function (elem, index) {
    var prod_container = document.querySelector(".bag_prod");

    var productDiv = document.createElement("div");
    productDiv.classList.add("prod_cont");

    var htmlData = `     <div class="info">
              <img
                src="${elem.image}"
                alt="" />
              <div class="content">
                <h4>${elem.brand_name}</h4>
                <p>${elem.brand_info}</p>
                <p>Best Offer Available</p>
                <h5><span id="origin_price">Rs. ${elem.price}</span id="strick_price"><span>Rs. ${elem.strick_price}</span></h5>
              </div>
            </div>
            <div class="remove_btn">
              <i class="fas fa-times"></i>
            </div>`;

    productDiv.insertAdjacentHTML("afterbegin", htmlData);

    prod_container.append(productDiv);

    var remove_btn = productDiv.querySelectorAll(".remove_btn");

    remove_btn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        deleteItem(index);
        totalBagitems();
        totalWishListitems();
      });
    });
  });
  localStorage.setItem("AllBagItems", JSON.stringify(AllbagProdArray));
  function deleteItem(index) {
    AllbagProdArray.splice(index, 1);
    localStorage.setItem("AllBagItems", JSON.stringify(AllbagProdArray));
    DisplayBagData(AllbagProdArray);
    totalWishListitems();
    totalBagitems();
  }
}

// ----------------------------------------Bag Total----------------------------//

var total_amount = [];
var DOM_total = document.querySelector(".total_MRP");
var total_sub = document.querySelector(".total_amount");

AllbagProdArray.map(function (elem) {
  total_amount.push(elem.price);
});

var total_amt = total_amount.reduce(function (total, price) {
  total += price;
  return total;
}, 0);

localStorage.setItem("TotalMRP", JSON.stringify(total_amt));
DOM_total.textContent = total_amt;
total_sub.textContent = total_amt;

// ----------------------------------------Bag Total----------------------------//

// -----------------------------Remove All Item From Bag------------------------------///
var remove_all = document.querySelector("#remove");
remove_all.addEventListener("click", function () {
  localStorage.removeItem("AllBagItems");
  document.querySelector(".bag_prod").innerHTML = "";
});
// -----------------------------Remove All Item From Bag------------------------------///

// ---------------------------Bag Total Items Display ------------------------------------/////
var Total_Bag_Item = document.querySelector(".total_item");
var Total_Selected_Item = document.querySelector(".total_selected");
var totalLength = AllbagProdArray.length;
Total_Bag_Item.textContent = totalLength;
Total_Selected_Item.textContent = totalLength;
// ---------------------------Bag Total Items Display ------------------------------------/////

// ------------------------Show Modal------------------------//
var coupon_DOM = document.querySelector("#coupon");
var remove_modal = document.querySelector(".box .fa-times");
var modal = document.querySelector(".pop_up_container");
coupon_DOM.addEventListener("click", function () {
  modal.classList.add("show_modal");
  document.body.classList.add("show_modal");
});

remove_modal.addEventListener("click", function () {
  modal.classList.remove("show_modal");
  document.body.classList.remove("show_modal");
});
// ------------------------Show Modal------------------------//

// -----------------------get Coupon Code value ---------------------///
JSON.parse(localStorage.getItem("Discount"));
JSON.parse(localStorage.getItem("TotalSub"));
SubTotal();
DisplayBagData(AllbagProdArray);
function SubTotal() {
  var apply_code_btn = document.querySelector("#apply");
  apply_code_btn.addEventListener("click", function () {
    var coupon_value = document.querySelector("input#coupon").value;
    var total_discount = document.querySelector(".total_discount");
    var total_amount = document.querySelector(".total_amount");
    if (coupon_value === "Mahesh63") {
      var discount = (total_amt * 60) / 100;
      total_discount.textContent = discount;
      localStorage.setItem("Discount", JSON.stringify(discount));
      var Final_total = total_amt - discount;
      total_amount.textContent = Final_total;
      localStorage.setItem("TotalSub", JSON.stringify(Final_total));
    }
  });
}

// -----------------------get Coupon Code value ---------------------///

// ----------------------payment ---------------------------///
var place_order_btn = document.querySelector("#order");
place_order_btn.addEventListener("click", function () {
  window.location = "payment.html";
});
// ----------------------payment ---------------------------///
