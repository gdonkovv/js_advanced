function validate() {
    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", check);

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPass = document.getElementById("confirm-password");
    let isCompany = document.getElementById("company");

    let usernamePattern = /^[A-Za-z0-9]{3,20}$/m;
    let passwordPattern = /^\w{5,15}$/m;
    //let emailPattern = /\w+\@\w+\.+\w+/m;
    // let emailPattern = /^\w+\@{1}\w+\.\w+[\w\.]*$/m;
    let emailPattern = /^.*@.*\..*$/;

    isCompany.addEventListener("change", showAdditionalField);

    function showAdditionalField() {
        if (isCompany.checked) {
            document.getElementById("companyInfo").style.display = "block";
        } else {
            document.getElementById("companyInfo").style.display = "none";
        }
    }

    function check(event) {
        event.preventDefault();
        let isValid = true;

        if (usernamePattern.test(username.value) === false) {
            username.style.borderColor = "red";
            isValid = false;
        } else {
            username.style.border = "none";
        }
        if (passwordPattern.test(password.value) === false) {
            password.style.borderColor = "red";
            isValid = false;
        } else {
            password.style.border = "none";
        }
        if (passwordPattern.test(confirmPass.value) === false) {
            confirmPass.style.borderColor = "red";
            isValid = false;
        } else {
            confirmPass.style.border = "none";
        }
        
        if(passwordPattern.test(password.value) && passwordPattern.test(confirmPass.value)){
            if (password.value !== confirmPass.value) {
                confirmPass.style.borderColor = "red";
                password.style.borderColor = "red";
                isValid = false;
            } else {
                confirmPass.style.border = "none";
                password.style.border = "none";
            }
        }

        if (emailPattern.test(email.value) === false) {
            email.style.borderColor = "red";
            isValid = false;
        } else {
            email.style.border = "none";
        }

        if (isCompany.checked) {
            let companyNumber = document.getElementById("companyNumber");
            if (Number(companyNumber.value) >= 1000 && Number(companyNumber.value) <= 9999) {
                companyNumber.style.border = "none";
            } else {
                companyNumber.style.borderColor = "red";
                isValid = false;
            }
        }

        let validDiv = document.getElementById("valid");
        if (isValid) {
            validDiv.style.display = "block";
        } else {
            validDiv.style.display = "none";
        }
    }
}
