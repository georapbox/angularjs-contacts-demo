<?php 
	$arr = array();
	
	//connect to database
	include("db_config.php");

	if(isset($_GET['id'])){
		$query = "SELECT * FROM contacts WHERE id='".$_GET['id']."'";
	} else {
		$query = "SELECT * FROM contacts";
	}
	$result = $mysqli->query($query);

	while($rows = $result->fetch_object()) {
    	$arr[] = $rows;
	}

	$result->free();
	$mysqli->close(); 

	echo json_encode($arr);
?>