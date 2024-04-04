console.log("3");

function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username == "haseef" && password == "ats"){
        window.location.href = "home.html";
    }else{
        document.getElementById("msg1").innerHTML="Incorrect username or password";
    }
}