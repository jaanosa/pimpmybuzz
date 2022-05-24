<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

if(isset($_POST['name']) && isset($_POST['email'])){
    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $phone   = $_POST['phone'];
    $website = $_POST['website'];
    $msg     = $_POST['msg'];

    $host       = 'smtp.gmail.com';
    $username   = 'pimpmybuzz2022@gmail.com';
    $password   = 'PimpMyBuzz_2022';
    $email_from = 'pimpmybuzz2022@gmail.com';
    $email_to   = 'admin@pimpmybuzz.com';
    $subject    = 'Inquiry from '.$name;
    $body       = 'Email :'.$email.'<br> Phone # : '.$phone.'<br> Website : '.$website. '<br> Message : '.$msg;

    try {
        $mail->isSMTP();
        $mail->Host = $host;
        $mail->SMTPAuth = true;
        $mail->Username = $username; // Gmail address which you want to use as SMTP Server
        $mail->Password = $password; // Gmail address password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = '587';

        $mail->setFrom($email,'SMTP Server (do not reply)');
        $mail->addAddress($email_to); // Email address where you want to receive emails
       
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;

        $mail->send();

        echo 'OK';
    } catch (Exception $e) {
        echo $e;
    }
}

?>