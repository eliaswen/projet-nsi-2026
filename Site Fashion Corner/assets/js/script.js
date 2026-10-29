function promo() {
  var compteur=localStorage.getItem("nbPopups");
  if (compteur==null) {
      compteur=0;
  }
  compteur=Number(compteur);
  if (compteur < 5) {
      alert("Offre spéciale Platinum 10% de réduction");
      compteur=compteur+1;
      localStorage.setItem("nbPopups", compteur);
  }
}



function onlynumbers(input) {
  input.value=input.value.replace(/[^0-9]/g, '');
}

function onlyletters(input) {
  input.value=input.value.replace(/[^a-zA-Z]/g, '');
}



const offer=localStorage.getItem("offer");

if (offer) {
  const offerText=document.getElementById("offer-text");
  if (offerText) {
      offerText.textContent=offer;
  }
}

const price = localStorage.getItem("price");

if (price) {
  const priceText = document.getElementById("price-text");
  if (priceText) {
      priceText.textContent = price;
  }
}

const badges = [
  document.getElementById("badge-alma"),
  document.getElementById("badge-elias"),
  document.getElementById("badge-mariola")
];
const randomIndex=Math.floor(Math.random()*badges.length);
badges[randomIndex].textContent=" Membre du mois";



function checkPay() {
  const name=document.getElementById("card-name").value.trim();
  const number=document.getElementById("card-number").value.trim();
  const date=document.getElementById("card-date").value.trim();
  const code=document.getElementById("card-code").value.trim();

  if (name==="" || number==="" || date==="" ||code==="") {
    alert("Veuillez remplir tous les champs.");
    return false;
  }
  return true;
}
function blink() { 
const elem = document.getElementById("blink"); 
setInterval(() => { 
  elem.style.visibility = 
    (elem.style.visibility === "hidden") ? "visible" : "hidden"; 
   }, 500); 
}