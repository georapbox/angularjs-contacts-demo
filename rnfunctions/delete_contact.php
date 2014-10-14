<?php
	//connect to database
	include("db_config.php");

	$id = $_GET['id'];

	$query = "DELETE FROM contacts WHERE id='".$id."'";
	$result = $mysqli->query($query);

	$result->free();
	$mysqli->close(); 
?>