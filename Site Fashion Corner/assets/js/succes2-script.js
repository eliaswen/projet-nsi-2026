//Sleep function
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function pageLoad() {
    if(!JSON.parse(sessionStorage.getItem('userJustCreated'))) {
        window.location.replace("../../index.html");
    }

    document.getElementById("username-replace").innerHTML = JSON.parse(sessionStorage.getItem('newlyCreatedUsername'));

    timerExecute();
}

async function timerExecute() {
    let timerRemaining = 5;
    while (timerRemaining > 0) {
        await sleep(1000);
        timerRemaining -= 1;
        document.getElementById("redirect-timer").innerHTML = timerRemaining;
    }
    sessionStorage.setItem('userJustCreated', false);
    window.location.replace("../../index.html");

}