let form = document.getElementById("frm");

form.onsubmit = function()
{
    let email = document.getElementById("mail").value;
    let pass = document.getElementById("password").value;

    let text_obj = {email:email.value,password:pass}
    let user_text_obj = JSON.stringify(text_obj)

    if(email != "" & pass != "")
    {
        localStorage.setItem(email,user_text_obj);

        let button = document.getElementById("now");   
     {
        
        window.alert("your id login successful !")
        button.innerHTML = "Login Successful";
        setTimeout(function(){
            form.reset();

        },1000);
        return false;
    
     }
        
    }   
}

/* email same */

let email_input = document.getElementById("mail"); 
email_input.onchange = function()
{
    let email = document.getElementById("mail").value;
    warning = document.getElementById("small");
    let btn = document.getElementById("btn");

    if(localStorage.getItem(email) != null)
    {
        warning.style.display = "block";
        email_input.style.borderColor = "red";
        btn.style.background = "#ccc";
        btn.disabled = true;

        email_input.onclick = function()  // this function run when you  will click on inputbox.
        {
            email_input.value = "";
            warning.style.display = "none";
            btn.style.background = "yellow";
            email_input.style.borderColor = "#ccc";
            btn.style.border = "none";
            btn.disabled = false;
        }
    }
}
    







   