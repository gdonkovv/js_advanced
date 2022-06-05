function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = Array.from(document.querySelectorAll("tbody tr"));
      rows.forEach(x => x.classList.remove("select"));
      let searchText = document.getElementById("searchField").value;
      document.getElementById("searchField").value = "";

      for (let row of rows) {
         let data = Array.from(row.children).map(x => x.textContent).join("; ");
         if (data.includes(searchText)) {
            row.classList.add("select");
         }
      }
   }
}