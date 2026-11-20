
function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (email === "mattewjoaquin4@gmail.com" && password === "mattewjoaquin_23") {

        window.location.href = "all.html";

    } else {

        message.innerHTML = "Invalid Email or Password";
        message.style.color = "red";

    }
}
