<!DOCTYPE html>
<html>
<head>
    <title>Login Form Validation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .error {
            color: red;
            margin-top: 10px;
        }
        .success {
            color: green;
            margin-top: 10px;
        }
    </style>
</head>
<body>

    <h2>Login Form</h2>

    <form onsubmit="return validateForm()">
        <label>Email:</label><br>
        <input type="text" id="email"><br><br>

        <label>Password:</label><br>
        <input type="password" id="password"><br><br>

        <input type="submit" value="Login">
    </form>

    <p id="message" class="error"></p>
    <p>Wrong Submission Count: <span id="count">0</span></p>

    <script>
        let wrongCount = 0;

        function validateForm() {

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let message = document.getElementById("message");

            message.innerHTML = "";

            // Email validation
            if (!email.includes("@")) {
                wrongCount++;
                document.getElementById("count").innerHTML = wrongCount;
                message.innerHTML = "Error: Email must contain '@'.";
                return false;
            }

            // Password length validation
            if (password.length < 6) {
                wrongCount++;
                document.getElementById("count").innerHTML = wrongCount;
                message.innerHTML = "Error: Password must be at least 6 characters.";
                return false;
            }

            // Password must contain #
            if (!password.includes("#")) {
                wrongCount++;
                document.getElementById("count").innerHTML = wrongCount;
                message.innerHTML = "Error: Password must contain '#'.";
                return false;
            }

            message.className = "success";
            message.innerHTML = "Login Successful!";
            return false; // prevent actual submission (for demo)
        }
    </script>

</body>
</html>