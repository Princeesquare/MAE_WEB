const productsElem = document.querySelector("#products-table tbody");
const hash = window.location.hash;

function populateTable() {
  productsElem.innerHTML = "";

  allProducts.forEach((p, index) => {
    productsElem.innerHTML += `
        <tr id="${p.name}">
            <td>
                <label><input type="checkbox"/> ${p.name}</label>
            </td>
            <td>
                <label>
                <input type="radio" name="${
                  p.name
                }" checked value="0"/> New ($${p.prices[0]})
    </label>
                <label>
                <input type="radio" name="${
                  p.name
                }" value="1"/> Fairly used ($${p.prices[1]})
    </label>
                <label>
                <input type="radio" name="${p.name}" value="2"/> Old ($${
      p.prices[2]
    })
    </label>
            </td>
            <td>
                <select>
                    <option value="1" selected>1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                    <option value="4" >4</option>
                    <option value="5" >5</option>
                </select>
            </td>
            <td class="p-total">${p.getTotal()}</td>
        </tr>
        `;
  });
}

populateTable();

const radioBtns = document.querySelectorAll(
  '#products-table input[type="radio"]'
);
const checkBoxes = document.querySelectorAll(
  '#products-table input[type="checkbox"]'
);
const allSelects = document.querySelectorAll("#products-table select");
const totalElems = document.querySelectorAll(".p-total");
const totalCostElem = document.getElementById("total-cost");

radioBtns.forEach((btn, index) => {
  btn.onclick = (e) => {
    const val = e.target.value;
    const i = Math.floor(index / 3);

    allProducts[i].condition = parseInt(val);
    totalElems[i].innerHTML = allProducts[i].getTotal();
  };
});

allSelects.forEach((s, i) => {
  s.onchange = (e) => {
    const val = e.target.value;

    allProducts[i].count = parseInt(val);
    totalElems[i].innerHTML = allProducts[i].getTotal();
  };
});

checkBoxes.forEach((box, i) => {
  box.onchange = (e) => {
    allProducts[i].selected = e.target.checked;
  };
});

function calculate() {
  const selectedItems = allProducts.filter((p) => p.selected);

  if (selectedItems.length === 0) {
    alert("Kindly pick an Item");
    return;
  }

  let total = selectedItems.reduce((sum, p) => sum + p.getTotal(), 0);

  if (total < 200) {
    total += total * 0.15;
  } else {
    total -= total * 0.15;
  }

  let res = confirm(`Total Cost will be $${total}`);

  if (res) {
    alert("We are Happy to meet your needs");
  } else {
    alert("Edit your shopping List");
  }

  totalCostElem.innerHTML = `<b>$(${total})</b>`;
}

if (hash) {
  document.querySelector(hash + ' input[type="checkbox"]')?.click();
}
