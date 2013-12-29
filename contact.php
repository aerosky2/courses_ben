<?php
//if(isset($_POST['nom']) AND isset($_POST['prenom'])AND isset($_POST['email']) AND isset($_POST['message'])){
	if(isset($_POST['nom']){
		$nom= $_POST['nom'];
		//$prenom= $_POST['prenom'];
		//$email= $_POST['email'];
		//$message= $_POST['message'];
		
//echo $nom.$prenom.$email.$message;
	
	$to= 'cbvmmb@gmail.com';
	$subject='Votre application "le porc dans tous ses états"';
	$message2 = "Nom: "+ $nom ;

	mail($to,$subject,$message2);


	
}
?>