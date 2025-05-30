const bouton = document.querySelector(".click");

// Génère un nombre entre 1 et 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
console.log("Nombre secret :", secretNumber);

bouton.addEventListener("click", () => {
    let reponse = parseInt(prompt("Devine un nombre entre 1 et 100 :"));

    while (reponse !== secretNumber) {
        if (reponse > secretNumber) {
            alert("Trop grand !");
        } else if (reponse < secretNumber) {
            alert("Trop petit !");
        }

        reponse = parseInt(prompt("Essaie encore :"));
    }

    alert("Bravo ! Tu as trouvé le bon nombre !");
});
