function solve() {

  let text = document.getElementById("input").value;
  let sentences = text.split(".").filter(x => x.length > 0);

  let output = document.getElementById("output");

  for (let i = 0; i < sentences.length; i += 3) {
    let sentence1 = sentences[i]!== undefined ? sentences[i] + "." : "";
    let sentence2 = sentences[i+1]!== undefined ? sentences[i+1] + "." : "";
    let sentence3 = sentences[i+2]!== undefined ? sentences[i+2] + "." : "";

    let paragraphText = `<p>${sentence1 + sentence2 + sentence3}</p>`;
    output.innerHTML += paragraphText;
    
  }

}