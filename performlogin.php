<?php 
session_start();
require "db_conn.php";

if(isset($_POST['uname']) && isset($_POST['password'])){

    function validate($data){
        $data = trim($data);
        return $data;
    }
}

$uname = validate($_POST['uname']);
$pass = validate($_POST['password']);

if(empty($uname)){
    header ("Location: login.php?error=Username is required" . $uname);
    exit();
}
else if(empty($pass) || (strlen($pass) < 4)){  //Pass is empty OR does not meet length requirements, it automatically is invalid -> No need to connect to DB
    header ("Location: login.php?error=Password is invalid" . $pass);
    exit();
}
else{
	try{
		$sql = "SELECT * FROM users WHERE username='$uname' AND password='$pass'";
		$statement = $conn->query($sql);
		$statement->execute();

		$result = $statement->fetchAll();
		$rows = $statement->rowCount();
		header("Location: login.php?error=".$rows);
	}catch(PDOException $error){
		header("Location: login.php?error=".$error->getMessage());
		exit();
	}
}
/*
if(!$result && $row == 0){
	header("Location: login.php?error=Incorrect Login Information"));
	exit();
}*/
if($rows === 1){
    $row = $result[0];

    if($row['username'] === $uname && $row['password'] === $pass){
        echo "Redirecting...";
        $_SESSION['username'] = $row['username'];
        $_SESSION['name'] = $row['name'];
        $_SESSION['id'] = $row['id'];
        header("Location: home.php");
        exit();
    }
    //if username and password doesn't match -> error
    else{
        header("Location: login.php?error=Incorrect Login Credentials");
        exit();
    }
}
else{
    header("Location: login.php?error=Unable to connect");
    exit();
}

?>
