
    var userData = JSON.parse(localStorage.getItem('userData'));
    function login(){
        var email = document.querySelector('#email').value;
        var pass = document.querySelector('#pass').value;

       for(var i=0;i<userData.length;i++){
            if(userData[i].email==email && userData[i].pass==pass){
                window.location.href="/Myntra-clone-project-main/home.html";
            }
            else{
                alert("You Email and Password Not Matched");
            }
       }
        
    }