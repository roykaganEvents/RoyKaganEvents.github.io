<?php
if (isset($_POST['submit'])){
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$peoplenum= $_POST['peoplenum'];
	$yes= $_POST['yes'];
	$no = $_POST['no'];
	$email = $_POST['email'];


	$mailTo = "kagan.roy.mySite@gmail.com";
	$headers ="From: ".$email;
	$txt = "קיבלת אימייל מ".$firstname.$lastname.".\n\n".$peoplenum.$yes.$no;
	
	mail($mailTo,$txt,$headers);

}