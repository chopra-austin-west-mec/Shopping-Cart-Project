
<!DOCTYPE html>
<html lang="en">
<head>

    <title>Login</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link href="http://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="loginCSS.css">
    
</head>
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
<?php
try {
    $dbh = new PDO('mysql:host=127.0.0.1;dbname=Checkout', 'root', '');

} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}


if(@$_POST['formSubmit'] == "Submit")
{
    $errorMessage = "";

    if(empty($_POST['fName']))
    {
        $errorMessage = "<li>You forgot to enter your first name.</li>";
    }
    if(empty($_POST['lName']))
    {
        $errorMessage = "<li>You forgot to enter your last name.</li>";
    }
    if(empty($_POST['password']))
    {
        $errorMessage = "<li>You forgot to enter a password</li>";
    }
//        $varfirstName = $_POST['fName'];
//        $varlastName = $_POST['lName'];
//        $varuserName = $_POST['user'];
//        $varpassword = $_POST['password'];
//        $varaddress = $_POST['address'];
//        $varcity = $_POST['city'];
//        $varstate = $_POST['state'];
//        $varzip = $_POST['zip'];
//        $varapt = $_POST['apt'];


    $stmt = $dbh->prepare("INSERT INTO login(firstName, lastName, password, email) VALUES (?, ?, ?, ?)");

    $result = $stmt->execute(array($_POST['fName'], $_POST['lName'], $_POST['password'], $_POST['email']));

    if(!$result){
        print_r($stmt->errorInfo());
    }

    if(!empty($errorMessage))
    {
        echo("<p>There was an error with your form:</p>\n");
        echo("<ul>" . $errorMessage . "</ul>\n");
    }

}


?>


<body>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="index.html">GPUs And More</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">GPUs<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="products/asus/">Asus</a></li>
            <li><a href="products/diamond/">Diamond</a></li>
            <li><a href="products/msi/">MSI</a></li>
			<li><a href="products/visionTek/">VisionTek</a></li>
			<li><a href="products/xfx/">XFX</a></li>
          </ul>
        </li>
        
         <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">3D Prints <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">3D Printers</a></li>
            <li><a href="#">3D Prints</a></li>
          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
		<li><a href="cart.php"><span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</a></li>
        <li><a href="login.php"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>


<div class="jumbotron text-center">
    <h1>GPUs And More</h1>
</div>

<!-- Container (Login / Signup Section) -->
<div id="about" class="container-fluid">
    <div class="row">
        <div class="col-sm-8">
            <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#login">Log In</a></li>
                <li><a data-toggle="tab" href="#signup">Sign Up</a></li>
            </ul>
            <div class="tab-content">
                <div id="login" class="tab-pane fade in active">
                    <form action="submit_email.php" method="post">
                        <input class="form-control" name="email" placeholder="Email"/><br>
                        <input class="form-control" name="password" type="password" placeholder="Password"/><br>
                        <input class="btn btn-default btn-lg" type="submit"/>
                    </form>
                </div>
                <div id="signup" class="tab-pane fade">
                    <form action="" method="post">
                        <input class="form-control" name="fname" placeholder="First Name"/><br>
                        <input class="form-control" name="lname" placeholder="Last Name"/><br>
                        <input class="form-control" name="email" placeholder="Email"/><br>
                        <input class="form-control" name="password" type="password" placeholder="Password"/><br>
                        <input class="btn btn-default btn-lg" name="submit" type="submit"/>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <span class="glyphicon glyphicon-user logo"></span>
        </div>
    </div>
</div>

<!-- Container (Contact Section) -->
<div id="contact" class="container-fluid bg-grey">
    <h2 class="text-center">CONTACT</h2>
    <div class="row">
        <div class="col-sm-7 slideanim">
            <div class="row">
                <div class="col-sm-6 form-group">
                    <input class="form-control" id="name" name="name" placeholder="Name" type="text" required>
                </div>
                <div class="col-sm-6 form-group">
                    <input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
                </div>
            </div>
            <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br>
            <div class="row">
                <div class="col-sm-12 form-group">
                    <button class="btn btn-default pull-right" type="submit">Send</button>
                </div>
            </div>
        </div>
		<div class="col-sm-5">
            <p>Contact us and we'll get back to you within 24 hours.</p>
            <p><span class="glyphicon glyphicon-map-marker"></span> Glendale, AZ</p>
            <p><span class="glyphicon glyphicon-phone"></span> +00 1515151515</p>
            <p><span class="glyphicon glyphicon-envelope"></span> myemail@something.com</p>
        </div>
    </div>
</div>


<script>
    $(document).ready(function(){
        // Add smooth scrolling to all links in navbar + footer link
        $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){


                window.location.hash = hash;
            });
        });


        $(window).scroll(function() {
            $(".slideanim").each(function(){
                var pos = $(this).offset().top;

                var winTop = $(window).scrollTop();
                if (pos < winTop + 600) {
                    $(this).addClass("slide");
                }
            });
        });
    })
</script>

</body>
</html>