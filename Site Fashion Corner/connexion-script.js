function connectButtonClick() {
    var submitted_email = document.getElementById('email-input').value;
    var submitted_password = document.getElementById('password-input').value;

    //Userinfo logic
    let userInfo;

    if (localStorage.getItem("userInfo") === null) {
        //No need to continue looking if userInfo is not defined
        document.getElementById("wrong-email").innerHTML = "<br><span class=error>E-mail inconnu</span><br>";
        return;
    } else {
        userInfo = JSON.parse(localStorage.getItem("userInfo"));
    }

    //Lookup username associated with email
    const l_username = Object.keys(userInfo).find(username => userInfo[username].email === submitted_email);


    //Check if username exists
    if (l_username === undefined) {
        document.getElementById("wrong-email").innerHTML = "<br><span class=error>E-mail inconnu</span><br>";
        return;
    } else {
        document.getElementById("wrong-email").innerHTML = "";
    }


    //Check password
    if (submitted_password !== userInfo[l_username].password) {
        document.getElementById("wrong-password").innerHTML = "<span class=error>Mot de passe incorrect</span><br>";
        return;
    } else {
        document.getElementById("wrong-password").innerHTML = "";
    }
    

    //At this point, password and email should be confirmed
    sessionStorage.setItem("logged-in", JSON.stringify(true));
    sessionStorage.setItem("login-username", JSON.stringify(l_username));
    window.location.href = "succes1.html";

}