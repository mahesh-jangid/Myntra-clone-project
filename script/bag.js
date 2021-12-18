var AllbagProdArray = JSON.parse(localStorage.getItem("AllBagItems")) || [];
var total_amount = [];
// showTotal();
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

    // -----------------------------Bag Total----------------------------//

    total_amount.push(elem.price);

    var DOM_total = document.querySelector(".total_MRP");
    function showTotal() {
      var total_price = total_amount.reduce(function (total, price) {
        total += price;
        return total;
      });
      // console.log(showTotal());
      DOM_total.textContent = total_price;
      // apply.addEventListener("click", discount(total_price));
    }
    console.log(total_amount);

    // -----------------------------Bag Total----------------------------//

    var remove_btn = productDiv.querySelectorAll(".remove_btn");

    remove_btn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        deleteItem(index);
        totalBagitems();
        totalWishListitems();
        // DisplayBagData(AllbagProdArray);
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

// -----------------------------Bag Total----------------------------//
