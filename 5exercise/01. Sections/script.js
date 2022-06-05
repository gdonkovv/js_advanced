function create(words) {
   let content = document.getElementById("content");

   for (let word of words) {
      let element = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = word;
      p.style.display = "none";
      element.appendChild(p);
      content.appendChild(element);
      element.addEventListener("click",showText);
   }


   function showText(event){
      let paragraph = event.target.children[0];
      paragraph.style.display = "block";
   }

}