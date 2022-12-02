<!DOCTYPE html>
<html>
    <head>
        <title> Create Account </title>
	<link rel="stylesheet" type="text/css" href="./css/style.css">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>
    </head>
    <body class=login-body>
        <div class="centerbox">
            <div class="login">
                <h1>Sign Up</h1>
                <h4>Create an Account to get started with us today!</h4>
                <form action="createlogin.php" method="post" id="signup">
                    <div class="form-field">
                        <div>
                            <label for="name"> Name </label>
                            <input type="text" id="name" name="name">
                        </div>
                    </div>
                    <div class="form-field">
                        <div>
                            <label for="uname"> Username </label>
                            <input type="text" id="uname" name="uname">
                            <!--<a class="passwordButton" onclick="showPass()"><span id="show" class="material-icons">visibility</span></a>-->
                            <alert></alert>
                        </div>
                    </div>
                    <div class="form-field">
			            <!--<label for="pass"> Password </label>-->
			            <div>
                            <div class="tipped">
                                <label for="pass"> Password </label>
                                <a class="passwordButton" onclick="showPass()"><span id="show" class="material-icons">visibility</span></a>
                                <!--<input type="password" id="pass" name="password">-->
                                <div class="tool-tip slideIn right">Atleast one of each of the following:
                                    <ul>
                                        <li>Special</li>
                                        <li>Uppercase</li>
                                        <li>Lowercase</li>
                                        <li>Number</li>
                                    </ul>
                                </div>
                            </div>
			            <input type="password" id="pass" name="password">
			            </div>
                        <!--<a style="float: right; cursor: pointer;" onclick="showPass()" ><span class="material-icons">visibility</span></a>-->
                        <alert></alert>
                    </div>
                    <div class="form-field">
                        <div>
                            <label for="retype"> Re-Enter Password </label>
                            <input type="password" id="retype">
                            <alert></alert>
                        </div>
                    </div>
                    <div class="form-field">
                        <div>
                            <label for="email"> Email Address </label>
                            <input type="text"  id="email" name="email">
                            <alert></alert>
                        </div>
                    </div>
                    <button type="submit"> Create Account </button>
                </form>
            </div>
	</div>
	<div class="centerbox">
	    <div>
 	        <form action="login.php" method="post">
		    <p> Already have an account?
			<br>
			Log in now!
		    </p>
		    <button href="login.php"> Log-in Here</button>
   	        </form>
	    </div>
	</div>
	<p class="error"> <?php echo $_GET['error']; ?></p>
        <script src="js/app.js"></script>
    </body>
</html>
