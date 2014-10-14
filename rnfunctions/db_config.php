<?php
	$host = 'localhost';
	$user = 'root';
	$pass = '';
	$dbname = 'phoneCatalogue';
	
	@ $mysqli = new mysqli();
	$mysqli->connect($host , $user , $pass);
	$mysqli->select_db($dbname);
	
	if(mysqli_connect_errno()) {
    	die('The connection to the database could not be established.');
	}
	
	mysqli_query($mysqli , "SET NAMES 'utf8'");
	mysqli_query($mysqli , "SET CHARACTER SET 'utf8'");
?>