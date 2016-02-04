<!DOCTYPE html>

<html>
<head>
    <title>Shopping Cart</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/css.css">
	
    <link href="http://cdn3.bigcommerce.com/r-7d6a638493d37a4bbc33fd4fe15b95d62daf0227/themes/Clarity2/Styles/styles.css" media="all" type="text/css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	
</head>

<body>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">GPUs And More</a>
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
