<?php
// Assuming you have already established a database connection
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'miniproject';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Assuming form data is submitted via POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Escape user inputs for security
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $message = $conn->real_escape_string($_POST['message']);
    
    // Insert user input into database
    $sql = "INSERT INTO IceCreamMessages (name, email, message) VALUES ('$name', '$email', '$message')";
    if ($conn->query($sql) === TRUE) {
        echo "New record inserted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>
