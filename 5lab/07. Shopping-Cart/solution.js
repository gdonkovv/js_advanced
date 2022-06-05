function solve() {
   // "Added {name} for {money} to the cart.\n". 
   // "You bought {list} for {totalPrice}."

   let products = Array.from(document.querySelectorAll("div .product"));

   for (let product of products) {
      product.children[2].children[0].addEventListener("click", addToCart);
   }

   let resultField = document.querySelector("textarea");
   let cart = {};

   document.getElementsByClassName("checkout")[0].addEventListener("click", checkOutFunc);

   function checkOutFunc() {
      let sum = 0;
      let list = "";
      for (let key of Object.keys(cart)) {
         sum += cart[key];
      }

      resultField.textContent += `You bought ${Object.keys(cart).join(", ")} for ${sum.toFixed(2)}.`;
      for (let product of products) {
         product.children[2].children[0].removeEventListener("click", addToCart);
      }
      document.getElementsByClassName("checkout")[0].removeEventListener("click", checkOutFunc);
   }


   function addToCart(event) {
      let currButton = event.target;
      let product = currButton.parentElement.parentElement;
      let info = product.children;
      let productName = info[1].children[0].textContent;
      let productPrice = Number(info[3].textContent).toFixed(2);
      resultField.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
      if (cart.hasOwnProperty(productName)) {
         cart[productName] += Number(productPrice);
      } else {
         cart[productName] = Number(productPrice);
      }
   }
}