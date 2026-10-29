function onEveryPageLoad() {

    let loggedIn = JSON.parse(sessionStorage.getItem("logged-in"));
    if (loggedIn == true) {
        let currentUsername = JSON.parse(sessionStorage.getItem("login-username"));
        document.getElementById("login-text").innerHTML = currentUsername;
    }
}

function loginButtonClicked() {
    let loggedIn = JSON.parse(sessionStorage.getItem("logged-in"));
    if (loggedIn == true) {
        window.location.href = "info.html";
    } else {
        window.location.href = "connexion.html";
    }
}