<?php


require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

try{
    


$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'joggers24X7@gmail.com';                 // SMTP username
$mail->Password = 'joggers2907';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom($_POST['name'], $_POST['name']);
$mail->addAddress($_POST['phone'].'@txt.att.net');     // Add a recipient
$mail->addAddress($_POST['phone'].'@sms.alltelwireless.com');  
$mail->addAddress($_POST['phone'].'@sms.mycricket.com'); 
$mail->addAddress($_POST['phone'].'@messaging.sprintpcs.com'); 
$mail->addAddress($_POST['phone'].'@tmomail.net'); 
$mail->addAddress($_POST['phone'].'@vtext.com'); 
$mail->addAddress($_POST['phone'].'@vmobl.com'); 
$mail->addAddress($_POST['phone'].'@metropcs.sms.us'); 
$mail->addAddress($_POST['phone'].'@email.uscc.net'); 
$mail->addAddress($_POST['phone'].'@msg.telus.com'); 
$mail->addAddress($_POST['phone'].'@tms.suncom.com'); 

 $mail->addAddress($_POST['email']);  

$email->FromName = $_POST['name'];
$email->From = "joggers24X7@gmail.com";



$mail->addReplyTo('');
$mail->addCC('');
$mail->addBCC('');

$mail->addAttachment('run_1.jpg');    // Optional name
//$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'JOG REQUEST';
$mail->Body    = $_POST['name']." ".'Wants to jog with you'." ".'at'." "."Place:"." ".$_POST['place']." ".'at'." "."Time:"." ".$_POST['time'];
  //$mail->AltBody = $_POST['name']." ".'Wants to jog with you'." ".'at'." ".$_POST['place']." ".'at'." ".$_POST['time'];

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'success';
    
}
    
}



catch(phpmailerException $e) {
  echo $e->getMessage();
}

?>