// -----------------------Navbar animation----------------------------//

function fixedNav() {
  const navbar = document.querySelector(".navbar");
  const navbar_info = document.querySelector(".nav_info");
  const navHeight = navbar.clientHeight;

  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (navHeight < scroll) {
      navbar.classList.add("active");
      navbar_info.classList.add("active");
    } else {
      navbar.classList.remove("active");
      navbar_info.classList.remove("active");
    }
  };
}
fixedNav();

// -----------------------End of Navbar animation----------------------------//

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
