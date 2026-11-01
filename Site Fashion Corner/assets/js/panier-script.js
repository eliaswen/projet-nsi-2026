function getPanier() {
    let panier = JSON.parse(localStorage.getItem("panier"));
    if (panier == null) {
        return [];
    }
    return panier;
}

function savePanier(panier) {
    localStorage.setItem("panier", JSON.stringify(panier));
    afficherNombrePanier();
}

function getTotal(panier) {
    let total = 0;
    for (let i = 0; i < panier.length; i++) {
        total = total + panier[i].prix * panier[i].quantite;
    }
    return total;
}

function choisirTaille(bouton) {
    let boutons = document.querySelectorAll(".size-btn");
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].classList.remove("size-selected");
    }
    bouton.classList.add("size-selected");
}

function ajouterArticle() {
    let tailleChoisie = document.querySelector(".size-selected");
    if (tailleChoisie == null) {
        alert("Choisissez une taille.");
        return false;
    }

    let produit = document.querySelector(".product-container").dataset;
    let taille = tailleChoisie.textContent;
    let panier = getPanier();
    let dejaPresent = false;

    for (let i = 0; i < panier.length; i++) {
        if (panier[i].id == produit.idProduit && panier[i].taille == taille) {
            panier[i].quantite = panier[i].quantite + 1;
            dejaPresent = true;
        }
    }

    if (dejaPresent == false) {
        panier.push({
            id: produit.idProduit,
            nom: produit.nom,
            prix: Number(produit.prix),
            image: produit.image,
            taille: taille,
            quantite: 1
        });
    }

    savePanier(panier);
    return true;
}

function ajouterAuPanier() {
    if (ajouterArticle()) {
        alert("Article ajouté au panier !");
    }
}

function acheterMaintenant() {
    if (ajouterArticle()) {
        window.location.href = new URL("pages/panier/panier.html", fashionCornerRoot).href;
    }
}

function changerQuantite(index, valeur) {
    let panier = getPanier();
    let quantite = Math.floor(Number(valeur));
    if (quantite < 1) {
        quantite = 1;
    }
    panier[index].quantite = quantite;
    savePanier(panier);
    afficherPanier();
}

function retirerDuPanier(index) {
    let panier = getPanier();
    panier.splice(index, 1);
    savePanier(panier);
    afficherPanier();
}

function afficherPanier() {
    let panier = getPanier();
    let liste = document.getElementById("panier-liste");
    let modele = document.getElementById("panier-modele");

    liste.innerHTML = "";

    for (let i = 0; i < panier.length; i++) {
        let article = panier[i];
        let ligne = modele.content.cloneNode(true);

        ligne.querySelector(".panier-item").dataset.idProduit = article.id;
        ligne.querySelector(".panier-img").src = article.image;
        ligne.querySelector(".panier-img").alt = article.nom;
        ligne.querySelector(".panier-nom").textContent = article.nom;
        ligne.querySelector(".panier-taille").textContent = article.taille;
        ligne.querySelector(".panier-prix").textContent = article.prix;
        ligne.querySelector(".panier-quantite").value = article.quantite;
        ligne.querySelector(".panier-quantite").onchange = function () {
            changerQuantite(i, this.value);
        };
        ligne.querySelector(".panier-retirer").onclick = function () {
            retirerDuPanier(i);
        };

        liste.appendChild(ligne);
    }

    document.getElementById("panier-nombre").textContent = getNombreArticles();
    document.getElementById("panier-total").textContent = getTotal(panier);
    document.getElementById("panier-vide").hidden = panier.length > 0;
    document.getElementById("panier-resume").hidden = panier.length == 0;
}

function afficherCommande() {
    let panier = getPanier();
    if (panier.length == 0) {
        window.location.href = "panier.html";
        return;
    }
    document.getElementById("panier-nombre").textContent = getNombreArticles();
    document.getElementById("panier-total").textContent = getTotal(panier);
}

function validerCommande() {
    let champs = document.querySelectorAll(".payment-input");
    for (let i = 0; i < champs.length; i++) {
        if (champs[i].value.trim() === "") {
            alert("Veuillez remplir tous les champs.");
            return false;
        }
    }
    if (document.getElementById("commande-email").value.includes("@") == false) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return false;
    }
    savePanier([]);
    return true;
}
