<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "your-email@example.com";
    $subject = "New Free Quote Request";
    $message = "Name: " . $_POST['name'] . "\nEmail: " . $_POST['email'] . "\nMessage: " . $_POST['message'];
    $headers = "From: noreply@yourdomain.com";

    mail($to, $subject, $message, $headers);
    echo "Thank you! Your request has been sent.";
}
?>
