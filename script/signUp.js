// -------------------------------store UserData in Local Storage -----------------------///

function storeUserData() {
  var userData = JSON.parse(localStorage.getItem("userDataBase")) || [];
  var user_email = document.querySelector("#email").value;
  var user_name = document.querySelector("#user").value;
  var user_phone_number = document.querySelector("#number").value;
  var userCred = {
    User_email: user_email,
    User_name: user_name,
    phone: user_phone_number,
  };

  userData.push(userCred);

  localStorage.setItem("userDataBase", JSON.stringify(userData));
  window.location.href = "login.html";
}
function auth() {
  var alert_DOM = document.querySelector(".alert_message p");
  var mob = document.querySelector("#number").value;
  if (mob.length === 10) {
    storeUserData();
  } else {
    alert_DOM.textContent = "Please Enter Valid Mobile Number!!";
  }
}

// ------------------------login UserData --------------------------//
var regdUserData = JSON.parse(localStorage.getItem("userDataBase"));
console.log(regdUserData);

var sign_in_btn = document.querySelector("#button");

sign_in_btn.addEventListener("click", function () {
  var user_name = document.querySelector("#user").value;
  var user_mobile = document.querySelector("#number").value;

  var alert_container = document.querySelector(".alert_pop_up");
  var alert_pop_up = document.querySelector(".alert_pop_up span");

  if (user_name === "Admin" && user_password === "Admin") {
    window.location.href = "admin.html";
  } else {
    for (var i = 0; i < regdUserData.length; i++) {
      if (
        regdUserData[i].User_name === user_name &&
        regdUserData[i].phone === user_mobile
      ) {
        localStorage.setItem("currentLoggedUser", JSON.stringify(user_name));
        alert_container.classList.add("show_pop_up");
        alert_pop_up.textContent = "login successful";
        alert_pop_up.style.color = "green";
        alert_pop_up.style.letterSpacing = "1px";
        window.location.href = "men.html";

        break;
      } else {
        // alert("Login Faliled!!");
        alert_container.classList.add("show_pop_up");
        alert_pop_up.textContent = "Oops!! login failed!";
        alert_pop_up.style.color = "red";
      }
    }
  }
});
