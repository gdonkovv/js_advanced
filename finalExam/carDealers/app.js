window.addEventListener("load", solve);

function solve() {

  let btnPublish = document.getElementById("publish");
  btnPublish.addEventListener("click", addInfo);

  let make = document.getElementById("make");
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let fuel = document.getElementById("fuel");
  let orCost = document.getElementById("original-cost");
  let sellPrice = document.getElementById("selling-price");

  let totalProfit = document.getElementById("profit");

  function addInfo(event) {
    event.preventDefault();
    //fuel.options[fuel.selectedIndex].text

    if (make.value !== "" && model.value !== "" && year.value !== "" && fuel.value !== ""
      && orCost.value !== "" && sellPrice.value !== "" && Number(orCost.value) <= Number(sellPrice.value)) {
      let targetTbody = document.getElementById("table-body");

      let tr = document.createElement("tr");
      tr.className = "row";

      let tdMake = document.createElement("td");
      tdMake.textContent = make.value;
      let tdModel = document.createElement("td");
      tdModel.textContent = model.value;
      let tdYear = document.createElement("td");
      tdYear.textContent = year.value;
      let tdFuel = document.createElement("td");
      tdFuel.textContent = fuel.value;
      let tdOrCost = document.createElement("td");
      tdOrCost.textContent = orCost.value;
      let tdSellPrice = document.createElement("td");
      tdSellPrice.textContent = sellPrice.value;

      let tdButtons = document.createElement("td");
      let btnEdit = document.createElement("button");
      btnEdit.textContent = "Edit";
      btnEdit.classList.add("action-btn", "edit");
      btnEdit.addEventListener("click", editCar);
      let btnSell = document.createElement("button");
      btnSell.textContent = "Sell";
      btnSell.classList.add("action-btn", "sell");
      btnSell.addEventListener("click", sellCar);
      tdButtons.appendChild(btnEdit);
      tdButtons.appendChild(btnSell);

      tr.appendChild(tdMake);
      tr.appendChild(tdModel);
      tr.appendChild(tdYear);
      tr.appendChild(tdFuel);
      tr.appendChild(tdOrCost);
      tr.appendChild(tdSellPrice);
      tr.appendChild(tdButtons);

      targetTbody.appendChild(tr);

      make.value = "";
      model.value = "";
      year.value = "";
      fuel.value = "";
      orCost.value = "";
      sellPrice.value = "";
    }
  }

  function editCar(event) {
    let button = event.target;
    let parentTd = button.parentElement;
    let parentTr = parentTd.parentElement;

    make.value = parentTr.children[0].textContent;
    model.value = parentTr.children[1].textContent;
    year.value = parentTr.children[2].textContent;
    fuel.value = parentTr.children[3].textContent;
    orCost.value = parentTr.children[4].textContent;
    sellPrice.value = parentTr.children[5].textContent;

    parentTr.remove();
  }

  function sellCar(event) {
    let button = event.target;
    let parentTd = button.parentElement;
    let parentTr = parentTd.parentElement;

    let targetUl = document.getElementById("cars-list");

    let li = document.createElement("li");
    li.className = "each-list";

    let spanMakeModel = document.createElement("span");
    spanMakeModel.textContent = parentTr.children[0].textContent + " " + parentTr.children[1].textContent;
    let spanYear = document.createElement("span");
    spanYear.textContent = parentTr.children[2].textContent;
    let spanDiff = document.createElement("span");
    spanDiff.textContent = Number(parentTr.children[5].textContent) - Number(parentTr.children[4].textContent);

    li.appendChild(spanMakeModel);
    li.appendChild(spanYear);
    li.appendChild(spanDiff);

    targetUl.appendChild(li);
    parentTr.remove();

    totalProfit.textContent = (Number(totalProfit.textContent) + Number(spanDiff.textContent)).toFixed(2);
  }

}
