const bouton = document.querySelector(".click");
let nombreTentative = 0;
// Génère un nombre entre 1 et 100
const secretNumber = Math.floor(Math.random() * 100);
console.log("Nombre secret :", secretNumber);

bouton.addEventListener("click", () => {
    let reponse = prompt("Devine un nombre entre 1 et 100 :");

    while (reponse !== secretNumber) {
        nombreTentative++;
        if (reponse > secretNumber) {
            alert("Trop grand !");
        } else if (reponse < secretNumber) {
            alert("Trop petit !");
        }

        reponse = parseInt(prompt("Essaie encore :"));
    }

    alert("Bravo ! Tu as trouvé le bon nombre !");
    alert("Bravo ! Tu as trouvé en " + nombreTentative + " tentative(s).");

});
