var fashionCornerRoot = new URL("../../", document.currentScript.src);

function onEveryPageLoad() {
    afficherNombrePanier();

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

function getNombreArticles() {
    let panier = JSON.parse(localStorage.getItem("panier"));
    let nombre = 0;
    if (panier != null) {
        for (let i = 0; i < panier.length; i++) {
            nombre = nombre + panier[i].quantite;
        }
    }
    return nombre;
}

function afficherNombrePanier() {
    let nombre = getNombreArticles();
    let badge = document.getElementById("basket-nombre");
    if (badge == null) {
        badge = document.createElement("span");
        badge.id = "basket-nombre";
        badge.className = "basket-nombre";
        document.querySelector(".basket").appendChild(badge);
    }
    badge.textContent = nombre;
    badge.hidden = nombre == 0;
}
