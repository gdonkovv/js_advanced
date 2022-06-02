function search() {
   let towns = Array.from(document.querySelectorAll("ul#towns li"));
   let searchText = document.getElementById("searchText").value.toLowerCase();

   let matchesCount = 0;

   for (let town of towns) {
      town.style.fontWeight = "normal";
      town.style.textDecoration = "";
      if (town.textContent.toLowerCase().includes(searchText)) {
         matchesCount++;
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
      }
   }

   let resultElement = document.getElementById("result");
   resultElement.textContent = `${matchesCount} matches found`;
}
