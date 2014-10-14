<?php 
	//$arr = array();
	
	$data = file_get_contents("php://input");
	$objData = json_decode($data);	

	//connect to database
	include("db_config.php");

	$name = $objData -> name;
	$phoneNo = $objData -> phoneNo;
	$mobileNo = $objData -> mobileNo;
	$email = $objData -> email;

	$query = "INSERT INTO contacts (name, phoneNo, mobileNo, email) VALUES ('$name', '$phoneNo', '$mobileNo', '$email')";
	$result = $mysqli->query($query);

	while($rows = $result->fetch_object()) {
    	$arr[] = $rows;
	}

	$result->free();
	$mysqli->close(); 

	//echo json_encode($arr);
?>