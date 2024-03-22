const gridDiv = document.getElementById("Best-grid");

allProducts.slice(0, 15).forEach((p, i) => {
  gridDiv.innerHTML += `<a href="./items.html?item=${p.name}"><img src="${p.img}" alt="${p.name}" title=${p.name}></a>`;
});
