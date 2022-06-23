window.addEventListener("load", solve);

function solve() {
  let btnPublish = document.getElementById("publish-btn");
  btnPublish.addEventListener("click", addInfo);
  let btnClear = document.getElementById("clear-btn");
  btnClear.addEventListener("click", clearPublishedPosts);

  function addInfo(event) {

    if (document.getElementById("post-title").value !== "" && document.getElementById("post-category").value !== "" &&
      document.getElementById("post-content").value !== "") {

      event.preventDefault();
      let title = document.getElementById("post-title").value;
      let category = "Category: " + document.getElementById("post-category").value;
      let content = "Content: " + document.getElementById("post-content").value;

      let targetUl = document.getElementById("review-list");

      let li = document.createElement("li");
      li.className = "rpost";

      let article = document.createElement("article");

      let tit = document.createElement("h4");
      tit.textContent = title;
      article.appendChild(tit);
      let cat = document.createElement("p");
      cat.textContent = category;
      article.appendChild(cat);
      let cont = document.createElement("p");
      cont.textContent = content;
      article.appendChild(cont);

      let btnEdit = document.createElement("button");
      btnEdit.classList.add("action-btn");
      btnEdit.classList.add("edit");
      btnEdit.textContent = "Edit";
      btnEdit.addEventListener("click", editPost);

      let btnApprove = document.createElement("button");
      btnApprove.classList.add("action-btn");
      btnApprove.classList.add("approve");
      btnApprove.textContent = "Approve";
      btnApprove.addEventListener("click", approvePost);

      li.appendChild(article);
      li.appendChild(btnEdit);
      li.appendChild(btnApprove);

      targetUl.appendChild(li);

      document.getElementById("post-title").value = "";
      document.getElementById("post-category").value = "";
      document.getElementById("post-content").value = "";
    }

  }

  function editPost(event) {
    let button = event.target;
    let currLi = button.parentElement;
    let div = currLi.parentElement;

    let article = currLi.children[0];
    let heading = article.children[0].textContent;
    let category = article.children[1].textContent.split(": ")[1];
    let content = article.children[2].textContent.split(": ")[1];

    div.removeChild(currLi);

    document.getElementById("post-title").value = heading;
    document.getElementById("post-category").value = category;
    document.getElementById("post-content").value = content;
  }

  function approvePost(event) {
    let button = event.target;
    let currLi = button.parentElement;
    let currDiv = currLi.parentElement;
    let buttonEdit = currLi.children[1];
    let buttonApprove = currLi.children[2];
    currLi.removeChild(buttonEdit);
    currLi.removeChild(buttonApprove);
    currDiv.removeChild(currLi);

    document.getElementById("published-list").appendChild(currLi);
  }

  function clearPublishedPosts() {
    let div = document.getElementById("published-list");
    div.innerHTML = "";
  }
}
