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
var bag_Total_items = document.querySelector(".total_item");
var bag_Total_selected = document.querySelector(".total_selected");
var AllbagProdArray = JSON.parse(localStorage.getItem("AllBagItems")) || [];
totalBagitems();
var getTotalBagData = JSON.parse(localStorage.getItem("totalBagItems"));

function totalWishListitems() {
  var DOMWishlist = document.querySelector("#wishlist_items");

  var TotalWishListItem = getwishListArray.length;

  DOMWishlist.textContent = TotalWishListItem;
  localStorage.setItem("totalWishListItems", JSON.stringify(TotalWishListItem));
  // DisplayWishlistData(getwishListArray);
}

function totalBagitems() {
  var DOM_bag = document.querySelector("#bag_items");

  var totalBagitems = AllbagProdArray.length;

  DOM_bag.textContent = totalBagitems;
  localStorage.setItem("totalBagItems", JSON.stringify(totalBagitems));
  // DisplayWishlistData(getwishListArray);
}

function DisplayWishlistData(getwishListArray) {
  document.querySelector(".product_info").innerHTML = "";
  getwishListArray.map(function (elem, index) {
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
            </div>
            <button class="remove_btn">
               <i class="fas fa-times"></i>
              </button>`;

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

    var wishlist_btn = productDiv.querySelectorAll(".w_btn");
    var wish_btn_text = productDiv.querySelector(".bag_btn_text");
    wishlist_btn.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();

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
    // localStorage.setItem("AllBagItems", JSON.stringify(getwishListArray));
  });
}

function addInBag(bagProd) {
  AllbagProdArray.push(bagProd);
  localStorage.setItem("AllBagItems", JSON.stringify(AllbagProdArray));
}
// --------------------------------------------End of Diasplay Wishlist Item -----------------------------////

// -------------Profile Card---------------////
var profile_icon = document.querySelector(".user_icon");
var profile_info = document.querySelector(".profile_info");

profile_icon.addEventListener("click", function () {
  if (profile_info.classList.contains("show_profile")) {
    profile_info.classList.remove("show_profile");
  } else {
    profile_info.classList.add("show_profile");
  }
});
// -------------End of Profile Card---------------////

// -------------------------Delete Target product from wishlist--------------------------------///

function deleteItem(index) {
  getwishListArray.splice(index, 1);
  localStorage.setItem("WishListItems", JSON.stringify(getwishListArray));
  DisplayWishlistData(getwishListArray);

  // totalWishListitems();
  // totalBagitems();
}
// }
