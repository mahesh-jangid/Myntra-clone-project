// --------------------------------------------Diasplay Wishlist Item -----------------------------////
var getwishListArray = JSON.parse(localStorage.getItem("WishListItems")) || [];

var totalWishListItems = JSON.parse(
  localStorage.getItem("totalWishListItems") || []
);
var DOMWishlist = document.querySelector("#wishlist_items");
var TotalWishlistItem = document.querySelector(".totalWishlist");
TotalWishlistItem.textContent = ` ${totalWishListItems} Items`;
DOMWishlist.textContent = totalWishListItems;

DisplayWishlistData(getwishListArray);
var AllbagProdArray = JSON.parse(localStorage.getItem("AllBagItems")) || [];

var getTotalBagData = JSON.parse(localStorage.getItem("totalBagItems"));
totalBagitems();

function totalBagitems() {
  var DOM_bag = document.querySelector("#bag_items");

  var totalBagitems = AllbagProdArray.length;
  DOM_bag.textContent = totalBagitems;
  localStorage.setItem("totalBagItems", JSON.stringify(totalBagitems));
}

function DisplayWishlistData(getwishListArray) {
  getwishListArray.map(function (elem) {
    var prod_container = document.querySelector(".product_info");

    var productDiv = document.createElement("div");
    productDiv.classList.add("product");

    var htmlData = `  <img
              src="${elem.image}"
              alt=""
            />
            <div class="content">
              <p>${elem.brand_info}</p>
               <h4><span id="origin_price">Rs.${elem.price}</span id="strick_price" ><span>Rs.${elem.strick_price}</span></h4><br>
          <hr>
              <button class="w_btn">
               <a href="" class="bag_btn_text">Move To Bag</a>
              </button>
            </div>`;

    productDiv.insertAdjacentHTML("afterbegin", htmlData);

    prod_container.append(productDiv);
    var alert_container = document.querySelector(".alert_pop_up");
    var alert_pop_up = document.querySelector(".alert_pop_up span");

    var wishlist_btn = productDiv.querySelectorAll("button");
    var wish_btn_text = productDiv.querySelector(".bag_btn_text");
    wishlist_btn.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();

        console.log(e.target.parentElement);
        if (e.target.classList.contains("bag_btn_text")) {
          wish_btn_text.style.color = "white";
          wish_btn_text.textContent = "ADDED";
          wish_btn_text.style.fontWeight = "bold";
          this.style.backgroundColor = "#fc427b";
          this.style.transition = "all .5s ease-in";
        }
        addInBag(elem);
        totalBagitems();
      });
    });
  });
}

function addInBag(bagProd) {
  AllbagProdArray.push(bagProd);
  localStorage.setItem("AllBagItems", JSON.stringify(AllbagProdArray));
}
// --------------------------------------------End of Diasplay Wishlist Item -----------------------------////
