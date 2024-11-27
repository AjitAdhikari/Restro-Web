<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = ""; // Use your database password
$dbname = "restaurant_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
//$stmt = $conn->prepare("INSERT INTO orders (name, phone_number, order_name, additional_food, table_number, message) VALUES (?, ?, ?, ?, ?, ?)");
//$stmt->bind_param("sssiss", $name, $phone_number, $order_name, $additional_food, $table_number, $message);
// Get form data
//$name = $_POST['name'];
//$phone_number = $_POST['phone_number'];
//$order_name = $_POST['order_name'];
//$additional_food = $_POST['additional_food'];
//$table_number = $_POST['table_number'];
//$message = $_POST['message'];

// Execute the statement
//if ($stmt->execute() === TRUE) {
    //echo "Order placed successfully!";
//} else {
    //echo "Error: " . $stmt->error;
//}

// Close statement and connection
//$stmt->close();
//$conn->close();
?>
