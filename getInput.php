<?php
if (isset($_POST['submit'])){
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$peoplenum= $_POST['peoplenum'];
	$email = $_POST['email'];


	$mailTo = "kagan.roy.mySite@gmail.com";
	$headers ="From: ".$email;
	$txt = "קיבלת אימייל מ".$firstname.$lastname.".\n\n".$peoplenum;
	
	mail($mailTo,$txt,$headers);

}