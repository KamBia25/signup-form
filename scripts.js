const myButton = document.getElementById("myButton");
const input = document.getElementById('password');
myButton.addEventListener('click' ,function(){
    let password = document.getElementById("password")
    let confirm_password = document.getElementById("confirm_password")
   
    console.log(password.value);
    console.log(confirm_password.value);
    if(password.value != confirm_password.value){
        const div_error = document.getElementById('div_error');
        div_error.textContent = 'Passwords do not match';
        
    }
    else{
        div_error.textContent = "";
    }
});
