
function Login()
{
    let Username = "Admin";
    let Password = "Admin";
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