let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let form = document.querySelector("#myform");

let emailerror = document.querySelector("#email-error");
let passerror = document.querySelector("#pass-error");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Clear previous errors
    emailerror.textContent = "";
    passerror.textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailStatus = emailRegex.test(email.value);
    let passStatus = passRegex.test(pass.value);

    if (!emailStatus) {
        emailerror.textContent = "Please enter a valid email";
    }

    if (!passStatus) {
        passerror.textContent =
        "Password must contain uppercase, lowercase, digit and special character";
    }

    if (emailStatus && passStatus) {
        alert("Validation Successful ✅");
    }
});