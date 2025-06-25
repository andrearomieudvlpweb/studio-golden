 const boutonsAjouter = document.querySelectorAll('.ajouter-panier');
const listePanier = document.getElementById('liste-panier');
const totalElement = document.getElementById('total');
const boutonVider = document.getElementById('vider-panier');

let panier = [];

boutonsAjouter.forEach(bouton => {
  bouton.addEventListener('click', () => {
    const nom = bouton.getAttribute('data-nom');
    const prix = parseFloat(bouton.getAttribute('data-prix'));

    panier.push({ nom, prix });
    afficherPanier();
  });
});

boutonVider.addEventListener('click', () => {
  panier = [];
  afficherPanier();
});

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
