
// signup data 

var signUp=JSON.parse(localStorage.getItem('userData'))||[];
function signup(){
    
    var email = document.querySelector('#email').value;
    var fullName = document.querySelector('#name').value;
    var pass = document.querySelector('#pass').value;
    var male=document.getElementById('male').checked;
    var female=document.getElementById('female').checked;
   
    if(male==true){
        var gender="male";
    }
    else if(female==true){
        gender="female";
    }

    var signUpObj={
        email:email,
        fullName:fullName,
        pass:pass,
        gender:gender,
    }
    signUp.push(signUpObj);

    localStorage.setItem('userData',JSON.stringify(signUp));
    window.location.href="login.html";
}


