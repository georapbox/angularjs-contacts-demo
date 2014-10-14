<?php 
	//$arr = array();
	
	$data = file_get_contents("php://input");
	$objData = json_decode($data);

	//connect to database
	include("db_config.php");

	$id = $_GET['id'];
	$name = $objData -> name;
	$phoneNo = $objData -> phoneNo;
	$mobileNo = $objData -> mobileNo;
	$email = $objData -> email;

	$query = "UPDATE contacts SET name='".$name."', phoneNo='".$phoneNo."', mobileNo='".$mobileNo."', email='".$email."' WHERE id='".$id."'";
	$result = $mysqli->query($query);

	while($rows = $result->fetch_object()) {
    	$arr[] = $rows;
	}

	$result->free();
	$mysqli->close(); 

	//echo json_encode($arr);
?>