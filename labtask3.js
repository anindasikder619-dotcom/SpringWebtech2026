let wrongCount = 0;

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Stop form submission

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    message.innerHTML = "";

    // Email must contain "@"
    if (!email.includes("@")) {
        wrongCount++;
        document.getElementById("count").innerHTML = wrongCount;
        message.innerHTML = "Error: Email must contain '@'.";
        return;
    }

    // Password must be at least 6 characters
    if (password.length < 6) {
        wrongCount++;
        document.getElementById("count").innerHTML = wrongCount;
        message.innerHTML = "Error: Password must be at least 6 characters.";
        return;
    }

    // Password must contain "#"
    if (!password.includes("#")) {
        wrongCount++;
        document.getElementById("count").innerHTML = wrongCount;
        message.innerHTML = "Error: Password must contain '#'.";
        return;
    }

    // If everything is correct
    message.style.color = "green";
    message.innerHTML = "Login Successful!";
});