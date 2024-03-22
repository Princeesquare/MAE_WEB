const allProductsDiv = document.getElementById("all-products");

allProducts.forEach((p, i) => {
  allProductsDiv.innerHTML += `
    <div class="product">
        <img src="${p.img}" alt="" loading="lazy">
        <div>
            <span class="p-name">${p.name}</span>
            <span class="p-price">$${p.prices[0]}</span>
            <a href="./checkout.html#${p.name}">  
                <button class="primary">ADD TO CART</button>
            </a>
        </div>
    </div>
    `;
});
