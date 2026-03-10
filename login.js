var count = 2; // Nombre d'essais autorisés

function validate(event) {
    // EMPÊCHE la page de se rafraîchir (Raison n°1 de l'échec des redirections)
    if (event) event.preventDefault();

    // On récupère les valeurs du formulaire
    var user = document.login.username.value;
    var password = document.login.password.value;
    var valid = false;

    // Vos listes d'utilisateurs et mots de passe
    var usernameArray = ["diddy"];
    var passwordArray = ["123"];

    // Boucle pour vérifier si les identifiants correspondent
    for (var i = 0; i < usernameArray.length; i++) {
        if (user === usernameArray[i] && password === passwordArray[i]) {
            valid = true;
            break;
        }
    }

    if (valid) {
        alert("Login was successful");
        // FIX: Utiliser la syntaxe correcte pour la redirection relative
        window.location.assign("index.html");
        return false;
    } else {
        // Gestion des essais restants
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
