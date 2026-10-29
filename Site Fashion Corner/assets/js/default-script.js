var fashionCornerRoot = new URL("../../", document.currentScript.src);

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
        window.location.href = new URL("pages/account/info.html", fashionCornerRoot).href;
    } else {
        window.location.href = new URL("pages/account/connexion.html", fashionCornerRoot).href;
    }
}