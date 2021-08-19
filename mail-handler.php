<?php 
// if(isset($_POST['submit'])){
//     $to = "justin.yang8499@gmail.com";
//     $from = $_POST['email'];
//     $firstName = $_POST['firstName'];
//     $lastName = $_POST['lastName'];
//     $subject = "Form submission";
//     $subject2 = "Copy of your form submission";
//     $message = $firstName . " " . $lastName . " wrote the following:" . "\n\n" . $_POST['message'];
//     $message2 = "Here is a copy of your message " . $firstName . "\n\n" . $_POST['message'];

//     $headers = "From:" . $from;
//     $headers2 = "From:" . $to;
//     mail($to,$subject,$message,$headers);
//     mail($from,$subject2,$message2,$headers2);
//     echo "Mail Sent. Thank you " . $firstName . ", we will contact you shortly.";
//     }

if(isset($_GET['submit'])){
    $to = "justin.yang8499@gmail.com";
    $from = $_GET['email'];
    $firstName = $_GET['firstName'];
    $lastName = $_GET['lastName'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $firstName . " " . $lastName . " wrote the following:" . "\n\n" . $_GET['message'];
    $message2 = "Here is a copy of your message " . $firstName . "\n\n" . $_GET['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2);
    echo "Mail Sent. Thank you " . $firstName . ", we will contact you shortly.";
    }
?>