function getArticleGenerator(articles) {
    let contentField = document.getElementById("content");
    return show;

    function show() {
        if (articles.length > 0) {
            let newArticle = document.createElement("article");
            newArticle.textContent = articles.shift();
            contentField.appendChild(newArticle);
        }
    }
}
