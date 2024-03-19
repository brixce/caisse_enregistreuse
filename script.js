let total = 0;

fetch("items.json")
  .then((response) => response.json())
  .then((data) => {
    for (let item of data.items) {
      let itemElement = document.createElement("div");
      itemElement.className = "item";

      let nameElement = document.createElement("span");
      nameElement.className = "name";
      nameElement.textContent = item.name;

      let priceElement = document.createElement("span");
      priceElement.className = "price";
      priceElement.textContent = ` ${item.price}€`;

      let imageElement = document.createElement("img");
      imageElement.src = item.image;

      let buttonElement = document.createElement("button");
      buttonElement.textContent = "Ajouter au panier";

      // Ajoute un gestionnaire d'événements pour le bouton
      buttonElement.addEventListener("click", () => {
        total += item.price;
        document.getElementById("total").textContent = total.toFixed(2);
      });

      itemElement.appendChild(nameElement);
      itemElement.appendChild(priceElement);
      itemElement.appendChild(imageElement);
      itemElement.appendChild(buttonElement);

      document.getElementById("items").appendChild(itemElement);
    }
  })
  .catch((error) => console.error("Erreur:", error));

document.getElementById("reset").addEventListener("click", () => {
  total = 0;
  document.getElementById("total").textContent = total.toFixed(2);
});
