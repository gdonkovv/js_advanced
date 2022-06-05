function solve() {

  document.querySelectorAll("button")[0].addEventListener("click", addProductToTable);
  document.querySelectorAll("button")[1].addEventListener("click", buyCheckedProducts);

  function addProductToTable() {
    let inputString = document.querySelectorAll("#exercise textarea")[0].value;
    let data = JSON.parse(inputString);
    for (let product of data) {

      let table = document.querySelector("tbody");
      let imageEl = document.createElement("td");
      let img = document.createElement("img");
      img.src = product.img;
      imageEl.appendChild(img);
      let nameEl = document.createElement("td");
      nameEl.textContent = product.name;
      let priceEl = document.createElement("td");
      priceEl.textContent = product.price;
      let decFactorEl = document.createElement("td");
      decFactorEl.textContent = product.decFactor;
      let checkBoxEl = document.createElement("td");
      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      // checkBox.disabled = true;
      checkBoxEl.appendChild(checkBox);

      let newRow = document.createElement("tr");
      newRow.appendChild(imageEl);
      newRow.appendChild(nameEl);
      newRow.appendChild(priceEl);
      newRow.appendChild(decFactorEl);
      newRow.appendChild(checkBoxEl);

      table.appendChild(newRow);
    }
  }
  function buyCheckedProducts() {
    let tableRows = Array.from(document.querySelector("tbody").children).filter(x => {
      let children = x.children;
      let mark = children[4];
      let check = mark.children[0].checked;
      return check;

    });
    let boughtFurnuture = [];
    let totalPrice = 0;
    let avgDecFactorSum = 0;
    for (let row of tableRows) {
      let name = row.children[1].textContent;
      let price = Number(row.children[2].textContent);
      let decFact = Number(row.children[3].textContent);
      boughtFurnuture.push(name);
      totalPrice += price;
      avgDecFactorSum += decFact;
    }
    let resultField = document.querySelectorAll("textarea")[1];
    resultField.value += `Bought furniture: ${boughtFurnuture.join(", ")}\n`;
    resultField.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    resultField.value += `Average decoration factor: ${avgDecFactorSum / tableRows.length}`;

  }
}