//Sleep function
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function pageLoad() {
    if(!JSON.parse(sessionStorage.getItem('logged-in'))) {
        window.location.replace("acceuil.html");
    }

    document.getElementById("username-replace").innerHTML = JSON.parse(sessionStorage.getItem('login-username'));

    timerExecute();
}

async function timerExecute() {
    let timerRemaining = 5;
    while (timerRemaining > 0) {
        await sleep(1000);
        timerRemaining -= 1;
        document.getElementById("redirect-timer").innerHTML = timerRemaining;
    }
    window.location.replace("acceuil.html");

}