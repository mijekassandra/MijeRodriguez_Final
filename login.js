function login(){
    var un = document.forms["myform"]["username"].value
    var pw = document.forms["myform"]["password"].value

    if(un=="user" && pw=="user"){
        document.getElementById("user").innerHTML = "It works.";
        document.getElementById("admin").innerHTML = "";    
    }

    else if(un=="admin" && pw=="admin"){
        document.getElementById("admin").innerHTML = "It works.";  
        document.getElementById("user").innerHTML = "";      
    }

    else{
        alert("Incorrect username or password.")
        document.getElementById("user").innerHTML = "";    
        document.getElementById("admin").innerHTML = "";       
    }

}