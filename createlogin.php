<?php
    session_start();
    require "db_conn.php";

    function validate($data){
        $data = trim($data);
        return $data;
    }
    
    $uname = validate($_POST['uname']);
    $pass = validate($_POST['password']);
    $email = validate($_POST['email']);
    $name = validate($_POST['name']);

    $data = [
	'uname' => $uname,
	'pass' => $pass,
	'email' => $email,
	'name' => $name,
    ];

//	header("Location: newUser.php?error=createlogin reached");
//	exit();
    try{
	    $sql = "INSERT INTO users (username, password, email, name) VALUES (:uname, :pass, :email, :name)";

        $statement = $conn->prepare($sql);
	    $success = $statement->execute($data);
        $lastId = $conn->lastInsertId();

	//header("Location: newUser.php?error=inserted to DB");
	//exit();
    }
    catch(PDOException $error){
        header("Location: newUser.php?error=Unable to connect to DB:".$error->getMessage());
        exit();
    }
    
    if($success){
        echo "Redirecting...";
        $_SESSION['username'] = $uname;
        $_SESSION['name'] = $name;	
        $_SESSION['id'] = $lastId;
        header("Location: home.php");
	
//	header("Location: newUser.php?error=Connected");
	exit();
    }
    else{
        header("Location: newUser.php?error=Unable to create account.");
    	exit();
    }
?>
