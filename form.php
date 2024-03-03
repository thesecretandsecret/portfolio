 <?php 
    // Validation
    $nameErr = "";
    $emailErr = "";
    $messageErr = "";

 if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = sanitize_input($_POST["name"]);
    $email = sanitize_input($_POST["email"]);
    $message = sanitize_input($_POST["message"]);

    if (empty($name)) {
        $nameErr = "Name is required";
    } else {
        // Check if name contains only letters and whitespace
        if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
            $nameErr = "Only letters and white space allowed";
        }
    }

    if (empty($email)) {
        $emailErr = "Email is required";
    } else {
        // Check if email is valid
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }

    if (empty($message)) {
        $messageErr = "Message is required";
    }

    // If there are no validation errors, process the form data
    if (empty($nameErr) && empty($emailErr) && empty($messageErr)) {
        $contactData = array(
            "name" => $name,
            "email" => $email,
            "message" => $message
        );
        insertData($contactData);
        echo "Form submitted successfully!";
    }
}


// Function to sanitize user input
function sanitize_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Function to establish a database connection and return the connection object
function connectDatabase() {
    $servername = 'localhost';
    $username = 'root';
    $password = 'root';
    $dbname = 'portdb';

    // Create a database connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die('Connection failed: ' . $conn->connect_error);
    }

    return $conn;
}

// Function to insert contact details into the database
function insertData($contactData) {
    // Connect to the database
    $conn = connectDatabase();

    // Perform insert operation here using $contactData

    // Example query
    $sql = "INSERT INTO users (name, email, message) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $contactData['name'], $contactData['email'], $contactData['message']);

    if ($stmt->execute()) {
        return true; // Insert successful
    } else {
        return false; // Insert failed
    }

    // Close the connection
    $stmt->close();
    $conn->close();
}

// Function to retrieve contact data from the database
function getContacts() {
    // Connect to the database
    $conn = connectDatabase();

    // Perform select operation here and return the result

    // Example query
    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);

    // Process the result and return the data

    // Close the connection
    $conn->close();

    return $contactData; // Return the retrieved data
}

//
?>