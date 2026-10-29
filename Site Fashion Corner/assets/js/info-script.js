function pageLoad() {
    if(!JSON.parse(sessionStorage.getItem('logged-in'))) {
        window.location.replace("../../index.html");
    }

    const currentUsername = JSON.parse(sessionStorage.getItem('login-username'));

    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const currentEmail = userInfo[currentUsername].email;
    

    document.getElementById("email-fill").innerHTML = currentEmail;
    document.getElementById("username-fill").innerHTML = currentUsername;

}


function logOut() {
    sessionStorage.clear();
    window.location.href = "../../index.html";
}

function deleteAccount() {
    const currentUsername = JSON.parse(sessionStorage.getItem('login-username'));
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    userInfo[currentUsername] = "";
    sessionStorage.clear();
    window.alert("Compte supprimé");
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.href = "../../index.html";

}