function notify(message) {
  // show message in div
  let notificationField = document.getElementById("notification");
  notificationField.textContent = message;
  // make div visible
  notificationField.style.display = "block";
  // when user clicks the div, it should be hidden again
  notificationField.addEventListener("click", hide);
  function hide() {
    notificationField.style.display = "none";
  }
}