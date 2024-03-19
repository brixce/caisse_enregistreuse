let total = 0;

fetch("items.json")
  .then((response) => response.json())
  .then((data) => {
    for (let item of data.items) {
      let itemElement = document.createElement("div");
      itemElement.innerHTML = `<span class="name">${item.name}</span> - <span class="price">${item.price}</span>€ <button>Ajouter au panier</button>`;
      itemElement.className = "item";
      document.getElementById("items").appendChild(itemElement);

      // Ajoute un gestionnaire d'événements pour le bouton
      itemElement.querySelector("button").addEventListener("click", () => {
        total += item.price;
        document.getElementById("total").textContent = total.toFixed(2);
      });
    }
  })
  .catch((error) => console.error("Erreur:", error));

document.getElementById("reset").addEventListener("click", () => {
  total = 0;
  document.getElementById("total").textContent = total.toFixed(2);
});
