<!DOCTYPE html>
<html>
    <head>
	<title> Login </title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="./css/style.css">
    </head>
    <body class="login-body">
        <div>
            <div class="centerbox">
                <div class="login">
                    <h2><b>Login</b></h2>
                    <form action="performlogin.php" method="post">
                        <label for="uname"> Username </label>
                        <input type="text" name="uname">
			            <br>
                        <label for="password"> Password </label>
                        <a class="passwordButton" onclick="showPass()">
                            <span id="show" class="material-icons">visibility</span>
                        </a>
                        <input id="pass" type="password" name="password">
                        <br>
                        <br>
                        <button type="submit">Log In</button>
                    </form>
                    <div>
                        <?php if(isset($_GET['error'])){ ?>
                            <p class="error"> <?php echo $_GET['error']; ?></p>
                        <?php } ?>
                    </div>
                </div>
            </div>
            <div class="centerbox">
                <div>
                    <form action="newUser.php" method="post">
                        <p>Easily send and track your boxes today!
                            <br>
                            Create an account now!
                        </p>
                        <button href="newUser.php"> Sign Up </button>
                    </form>
                </div>
            </div>
	</div>
	<script src="js/app.js"></script>
    </body>
</html>
