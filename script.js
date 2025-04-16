function registerUser(event) 
{
    event.preventDefault();
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;
    let address = document.getElementById("regAddress").value;
    let phone = document.getElementById("regTelephone").value;

    const user = { name, email, password, address, phone };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successful! Redirecting to Login.");
    document.querySelector("#register form").reset();
    window.location.href = "login.html";
}

function loginUser(event) 
{
    event.preventDefault();
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        document.getElementById("loginError").innerText = "No registered user found. Please register first.";
        return;
    }
    if (user.email === email && user.password === password) {
        localStorage.setItem("isLoggedIn", "true");
        alert(`Welcome back, ${user.name}!`);
        alert(`Your Phone Number is, ${user.phone}!`);
        alert(`Address = , ${user.address}!`);


    } else {
        document.getElementById("loginError").innerText = "Invalid Username or Password";
    }
}

