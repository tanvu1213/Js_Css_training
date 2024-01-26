
function Login()
{
    let Username = "Admin123";
    let Password = "Admin123";
    var user = document.getElementById("Username").value;     
    var pass = document.getElementById("password").value;
    if(user == Username,pass == Password)
    {
        alert("Login Success");
    }
    else
    {
        alert("Password or Username wrong");
    }
}