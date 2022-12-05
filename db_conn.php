<?php

    require "../configs/config.php";
    //function $connect($table){} //f(table name) -> php can pass the table name and reuse this function to make a connection 
    try{
	    $conn = new PDO($dsn, $db_uname, $db_password);
    }catch(PDOException $e){
	    header("Location: login.php?error=Connection Error".$e->getMessage());
	exit();
    }
?>
