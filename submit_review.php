<?php
// Connect to the database
$host = 'localhost';
$dbname = 'mydatabase';
$user = 'myusername';
$password = 'mypassword';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Get user input
    $name = $_POST['name'];
    $rating = $_POST['rating'];
    $review = $_POST['review'];

    // Insert the review into the database
    $sql = "INSERT INTO reviews (name, rating, review) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$name, $rating, $review]);

    // Redirect back to the HTML form
    header('Location: index.html');
    exit;

} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
}

$conn = null;
?>