

function auth(){
    var mob= document.querySelector('#number').value;
     if(mob.length==10){
         window.location.href="otp.html";
     }
     else{
         console.log("Please enter valid number");
     }
 }
 
 