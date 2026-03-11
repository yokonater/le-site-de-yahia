function createAccount(event) {
    event.preventDefault();

    var user    = document.createForm.username.value.trim();
    var pass    = document.createForm.password.value;
    var confirm = document.createForm.confirm.value;

    if (user === "") {
        alert("Please enter a username.");
        return false;
    }
    if (pass.length < 4) {
        alert("Password must be at least 4 characters.");
        return false;
    }
    if (pass !== confirm) {
        alert("Passwords do not match.");
        return false;
    }

    // Check if username already exists
    if (localStorage.getItem("user_" + user) !== null) {
        alert("That username is already taken. Please choose another.");
        return false;
    }

    // Save account as individual key: user_username = password
    localStorage.setItem("user_" + user, pass);

    alert("Account created! You can now log in.");
    window.location.href = "login.html";
    return false;
}
