<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Database connection details
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "dalike_wb";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO signups (name, email) VALUES ('$name', '$email')";

    if ($conn->query($sql) === TRUE) {
        // Redirect to the "home" page after successful submission
        header("Location: home.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
