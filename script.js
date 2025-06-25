 const boutonsAjouter = document.querySelectorAll('.ajouter-panier');

let panier = JSON.parse(localStorage.getItem('panier')) || [];

boutonsAjouter.forEach(bouton => {
  bouton.addEventListener('click', () => {
    const nom = bouton.getAttribute('data-nom');
    const prix = parseFloat(bouton.getAttribute('data-prix'));

    panier.push({ nom, prix });
    localStorage.setItem('panier', JSON.stringify(panier));

    alert(`${nom} ajouté au panier !`);
  });
});


const boutonVider = document.getElementById('vider-panier');

    function afficherPanier() {
      listePanier.innerHTML = '';
      let total = 0;

      panier.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nom} - ${item.prix} €`;
        listePanier.appendChild(li);
        total += item.prix;
      });

      totalElement.textContent = total.toFixed(2);
    }

    boutonVider.addEventListener('click', () => {
      localStorage.removeItem('panier');
      panier = [];
      afficherPanier();
    });

    afficherPanier();
  </script>
</body>
</html>
<button id="passer-commande">Passer commande</button>

#passer-commande {
  background-color: limegreen;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 1rem;
}

#passer-commande:hover {
  background-color: green;
}

const boutonCommander = document.getElementById('passer-commande');

boutonCommander.addEventListener('click', () => {
  if (panier.length === 0) {
    alert("Votre panier est vide !");
    return;
  }

  // Simuler une commande (peut être personnalisé plus tard)
  alert("Merci pour votre commande !");
  
  // Vider le panier
  localStorage.removeItem('panier');
  panier = [];
  afficherPanier();

  // Redirection facultative :
  // window.location.href = "confirmation.html";
});
