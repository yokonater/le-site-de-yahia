var count = 2;

window.onload = function() {
    var savedUser = localStorage.getItem("lastUser");
    if (savedUser) {
        document.login.username.value = savedUser;
    }
};

function validate(event) {
    if (event) event.preventDefault();

    var user     = document.login.username.value.trim();
    var password = document.login.password.value;

    // Look up the password stored for this username
    var savedPass = localStorage.getItem("user_" + user);

    if (savedPass !== null && savedPass === password) {
        localStorage.setItem("lastUser", user);
        alert("Login was successful");
        window.location.assign("index.html");
        return false;
    } else {
        if (count >= 1) {
            var unit = (count === 1) ? "try" : "tries";
            alert("Wrong password or username. You have " + count + " " + unit + " left.");
            count--;
        } else {
            alert("Account locked. Too many failed attempts.");
            document.login.username.disabled = true;
            document.login.password.disabled = true;
            document.querySelector(".submit").disabled = true;
        }
        return false;
    }
}

    
