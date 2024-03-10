function validateOrder(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let products = document.getElementById("products").value;
    let color = document.getElementById("color").value;
    let size = document.getElementById("size").value;
    let nameStatus = emailStatus = phoneStatus = productsStatus = colorStatus = sizeStatus = false;
    const alphaExp = /^[A-Za-z]+$/;
    const mailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const numExp = /^[0-9]+$/;

    //Name validation
    if(name === ""){
        document.getElementById("nameNote").innerHTML = "Please enter your Name";
    }
    else{
        if(name.match(alphaExp)){
            document.getElementById("nameNote").innerHTML = "";
            nameStatus = true;
        }
        else{
            document.getElementById("nameNote").innerHTML = "Invalid name. Please use A-Z or a-z";
        }
    }

    //Email validation
    if(email === ""){
        document.getElementById("emailNote").innerHTML = "Please enter your Email";
    }
    else{
        if(email.match(mailExp)){
            document.getElementById("emailNote").innerHTML = "";
            emailStatus = true;
        }
        else{
            document.getElementById("emailNote").innerHTML = "Invalid email. Eg: example@gmail.com";
        }
    }

    //Phone validation
    if(phone === ""){
        document.getElementById("phoneNote").innerHTML = "Please enter your Phone Number";
    }
    else{
        if(phone.match(numExp)){
            if(phone.length===10){
            document.getElementById("phoneNote").innerHTML = "";
            phoneStatus = true;
        }else{
            document.getElementById("phoneNote").innerHTML = "Invalid Phone Number. Please enter 10 digits number.";
        }
        }
        else{
            document.getElementById("phoneNote").innerHTML = "Numbers Only";
        }
    }
    //products validation
    if(products === ""){
        document.getElementById("productsNote").innerHTML = "Please choose your Product";
    }
    else{
            document.getElementById("productNote").innerHTML = "";
            nameStatus = true;
        }
    //color validation
    if(color === ""){
        document.getElementById("colorNote").innerHTML = "Please enter your Color";
    }
    else{
            document.getElementById("colorNote").innerHTML = "";
            nameStatus = true;
        }

    

    //size validation
    if(size === ""){
        document.getElementById("sizeNote").innerHTML = "Please enter your Size";
    }
    else{
            document.getElementById("sizeNote").innerHTML = "";
            nameStatus = true;
        }

    //return
    if(nameStatus===true && emailStatus===true && phoneStatus===true && productsStatus===true && colorStatus===true && sizeStatus===true){
        return true;
    } else{
        return false;
    }
}
function validateContact(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    
    let nameStatus = emailStatus = false;
    const alphaExp = /^[A-Za-z]+$/;
    const mailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    

    //Name validation
    if(name === ""){
        document.getElementById("nameNote").innerHTML = "Please enter your Name";
    }
    else{
        if(name.match(alphaExp)){
            document.getElementById("nameNote").innerHTML = "";
            nameStatus = true;
        }
        else{
            document.getElementById("nameNote").innerHTML = "Invalid name. Please use A-Z or a-z";
        }
    }

    //Email validation
    if(email === ""){
        document.getElementById("emailNote").innerHTML = "Please enter your Email";
    }
    else{
        if(email.match(mailExp)){
            document.getElementById("emailNote").innerHTML = "";
            emailStatus = true;
        }
        else{
            document.getElementById("emailNote").innerHTML = "Invalid email. Eg: example@gmail.com";
        }
    }

   
    //return
    if(nameStatus===true && emailStatus===true){
        return true;
    } else{
        return false;
    }
}