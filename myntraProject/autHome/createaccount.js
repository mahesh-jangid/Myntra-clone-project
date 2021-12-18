
// signup data 

var signUp=JSON.parse(localStorage.getItem('userData'))||[];
function signup(){
    
    var email = document.querySelector('#email').value;
    var fullName = document.querySelector('#name').value;
    var pass = document.querySelector('#pass').value;
    var male=document.querySelector('#male').value;
    var female=document.querySelector('#female').value;
    if(male == "male"){
        var gender="male";
    }

    var signUpObj={
        email:email,
        fullName:fullName,
        pass:pass,
        gender:gender,
    }
    signUp.push(signUpObj);

    localStorage.setItem('userData',JSON.stringify(signUp));
}


