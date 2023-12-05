<?php
    //in your php ignore any submissions that inlcude this field
if(!empty($_POST['website'])) die();
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$visitor_email = $_POST['email'];	$phone = $_POST['cellPhone'];
	$message = $_POST['message'];
	$email_from = 'dynamiclions@sanangelodowntownlions.org';
	$email_subject = "New Message From $firstName $lastName";
	$txt = "Name: $firstName $lastName\n".
		   "Email: $visitor_email\n".        
		   "Message: $message\n";
	$to = "dynamiclions@sanangelodowntownlions.org, webmaster@sanangelodowntownlions.org";		
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    mail($to,$email_subject,$txt,$headers);
    header("Location: index.html");	
?>