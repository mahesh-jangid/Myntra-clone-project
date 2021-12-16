function otp() {
  var otp1 = document.querySelector("#number1").value;
  var otp2 = document.querySelector("#number2").value;
  var otp3 = document.querySelector("#number3").value;
  var otp4 = document.querySelector("#number4").value;

  if (otp1 == "1" && otp2 == "2" && otp3 == "3" && otp4 == "4") {
    window.location.href = "men.html";
  }
}
