<?php
try {
    $dbh = new PDO('mysql:host=localhost;dbname=shopingCart', 'root', '');
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}