const allProducts = [];

function createItem(name, prices, img) {
  const product = {};

  product.name = name;
  product.prices = prices;
  product.count = 1;
  product.condition = 0;
  product.selected = false;
  product.img = "./images/" + img;

  product.getTotal = function () {
    return this.prices[this.condition] * this.count;
  };

  allProducts.push(product);

  return product;
}

createItem("Blender", [500, 300, 200], "img1.jpg");
createItem("Microwave", [1000, 500, 300], "img2.jpg");
createItem("Fridge", [900, 400, 350], "img3.jpg");
createItem("Electric Cooker", [400, 325, 175], "img4.jpg");
createItem("Electrice Kettle", [180, 150, 40], "img5.jpg");
createItem("Juicer", [100, 90, 50], "img6.jpg");
createItem("Toaster", [250, 200, 100], "img7.jpg");
createItem("Stoves", [300, 120, 100], "img8.jpg");
createItem("Grills", [200, 100, 50], "img9.jpg");
createItem("Blender", [500, 300, 200], "img1.jpg");
createItem("Microwave", [1000, 500, 300], "img2.jpg");
createItem("Fridge", [900, 400, 350], "img3.jpg");
createItem("Electric Cooker", [400, 325, 175], "img4.jpg");
createItem("Electrice Kettle", [180, 150, 40], "img5.jpg");
createItem("Juicer", [100, 90, 50], "img6.jpg");
createItem("Toaster", [250, 200, 100], "img7.jpg");
createItem("Stoves", [300, 120, 100], "img8.jpg");
createItem("Grills", [200, 100, 50], "img9.jpg");
createItem("Electric Cooker", [400, 325, 175], "img4.jpg");
createItem("Electrice Kettle", [180, 150, 40], "img5.jpg");
