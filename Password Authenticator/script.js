function Validate(){
    let password = document.getElementById('password').value;
    let con_passowrd = document.getElementById('confirmpassword').value;

    if(password !== con_passowrd){
        alert("Please recheck your password");
        return false;
    }
    return true;
}
