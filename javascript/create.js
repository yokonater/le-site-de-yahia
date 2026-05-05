function createAccount(event) {
    event.preventDefault();

    var user    = document.createForm.username.value.trim();
    var pass    = document.createForm.password.value;
    var confirm = document.createForm.confirm.value;

    if (user === "") {
        alert("met un nom d'utilisateur.");
        return false;
    }
    if (pass.length < 4) {
        alert("Password dois être au moins 4 characters.");
        return false;
    }
    if (pass !== confirm) {
        alert("Passwords sons pas le même.");
        return false;
    }

    // Check if username already exists
    if (localStorage.getItem("user_" + user) !== null) {
        alert("nom d'utilisateur et deja pris.");
        return false;
    }

    // Save account as individual key: user_username = password
    localStorage.setItem("user_" + user, pass);

    alert("conte creer! vous pouvéslog in.");
    window.location.href = "login.html";
    return false;
}
