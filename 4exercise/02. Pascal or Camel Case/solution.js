function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;

  let wordsFromText = text.split(" ").map(x => x.toLowerCase());
  let result = [];

  if (convention !== "Pascal Case" && convention !== "Camel Case") {
    result.push("Error!");
  } else {
    for (let word of wordsFromText) {
      let index = wordsFromText.indexOf(word);
      if (convention === "Camel Case" && index === 0) {
        result.push(word);
        continue;
      }
      result.push(word[0].toUpperCase() + word.substring(1));
    }
  }

  let resultElement = document.getElementById("result");
  resultElement.textContent = result.join("");

}