function validatePassword() {
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm_password");
    const passwordAlert = document.querySelector("#password_alert");
    const button = document.querySelector('button');

    if (password.value.length < 8) {
        passwordAlert.style.color = 'red';
        passwordAlert.textContent = "* Password length must be at least 8 characters";
        passwordAlert.style.fontSize = "12px";
        button.disabled = true;
        button.style.opacity = 0.4;
        button.style.cursor = "auto";
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    } else if (password.value != confirmPassword.value) {
        passwordAlert.textContent = "* Passwords do not match";
    } else {
        passwordAlert.style.color = 'green';
        passwordAlert.textContent = "* Passwords match";
        passwordAlert.style.fontSize = "12px";
        button.disabled = false;
        button.style.opacity = 1;
        button.style.cursor = "pointer";
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
    }
}